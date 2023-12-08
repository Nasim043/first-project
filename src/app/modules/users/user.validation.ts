import { z } from "zod";

const userValidationSchema = z.object({
    password: z.string({
        invalid_type_error: "Password must be String!",
    })
        .max(20, { message: "Must be 20 or fewer characters long" })
        .optional(),
})

export default userValidationSchema;