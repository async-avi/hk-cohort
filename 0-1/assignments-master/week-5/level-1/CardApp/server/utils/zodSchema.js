import zod from "zod";

let emailSchemaZod = zod.string().email();
let urlSchemaZod = zod.string().url();

export { emailSchemaZod, urlSchemaZod };
