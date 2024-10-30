import lume from "lume/mod.ts";
import lumocs from "lumocs/mod.ts";

export default lume({
  src: "./src",
  dest: "./_site",
})
  .use(lumocs())
  .copy("./assets");