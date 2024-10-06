import { Builder } from "../building/Builder";

(async () => {
  await Builder.build();
})().catch(console.log);
