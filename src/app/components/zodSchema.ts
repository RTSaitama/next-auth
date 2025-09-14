import z from "zod";

export type loginData = z.infer<typeof loginSchema>;

export const loginSchema = z
  .object({
    identifier: z.string().min(3, "Login or email required"),
    password: z.string().min(8, "Password should be at least 8 characters long"),
  }).refine((data) => {

    return data.identifier.length >= 3;
  }, {
    message: "Invalid login or email",
    path: ["identifier"],
  });