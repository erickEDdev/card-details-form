import z from "zod";

export const schema = z.object({
    name: z.string().nonempty("não pode ser vazio"),
    number: z.string(),
})