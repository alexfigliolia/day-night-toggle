import { createReadStream } from "fs";
import { readdir, readFile, stat, writeFile } from "fs/promises";
import { extname, join, resolve } from "path";
import { createInterface } from "readline";
import { ChildProcess } from "@figliolia/child-process";

export class Builder {
  public static async build() {
    await new ChildProcess("yarn transpile").handler;
    await new ChildProcess("yarn compile-scss").handler;
    await new ChildProcess("yarn copy-files").handler;
    await this.fixStyleImports();
    await new ChildProcess("rm -rf src/styles.css").handler;
    await new ChildProcess("rm -rf src/styles.css.map").handler;
  }

  private static async fixStyleImports() {
    const buildDirectory = resolve(__dirname, "../../dist");
    await this.recurseTSFiles(buildDirectory);
  }

  private static async recurseTSFiles(currentPath: string) {
    const directory = await readdir(currentPath);
    for (const path of directory) {
      const absolute = join(currentPath, path);
      if ((await stat(absolute)).isDirectory()) {
        await this.recurseTSFiles(absolute);
      } else if (extname(absolute) === ".js") {
        const indices = await this.detectStyleImports(absolute);
        if (indices.length) {
          await this.replaceImports(absolute, indices);
        }
      }
    }
  }

  private static async detectStyleImports(path: string) {
    const stream = createReadStream(path);
    const RL = createInterface({
      input: stream,
      crlfDelay: Infinity,
    });
    let current = -1;
    const indices: number[] = [];
    for await (const line of RL) {
      ++current;
      if (line.includes("styles.scss")) {
        indices.push(current);
      }
    }
    return indices;
  }

  private static async replaceImports(path: string, indices: number[]) {
    const content = (await readFile(path)).toString();
    const lines = content.split("\n");
    for (const line of indices) {
      lines[line] = lines[line].replace("styles.scss", "styles.css");
      await writeFile(path, lines.join("\n"));
    }
  }
}
