import Provider from "next-auth/providers/credentials";
import z from "zod";

// import { login } from "@/features/auth/api/login";
// import { tryCatch } from "@/lib/utils";

const CredentialsSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export const CredentialsProvider = Provider({
  name: "Credentials",
  credentials: {
    email: { label: "Email", type: "email" },
    password: { label: "Password", type: "password" },
  },
  async authorize(credentials) {
    const validatedFields = CredentialsSchema.safeParse(credentials);

    if (!validatedFields.success) {
      return null;
    }

    // const { email, password } = validatedFields.data;

    // const { data, error } = await tryCatch(() => login({ email, password }));

    // if (error) {
    //   return null;
    // }

    // const user = data.data.user;
    // const token = data.data.token;
    // const refreshToken = data.data.refresh_token;

    // return {
    //   token,
    //   refreshToken,
    //   ...user,
    // };

    return {
      id: crypto.randomUUID(),
      email: credentials?.email,
      name: "John Doe",
      image: "https://github.com/fernandes-vinicius.png",
    };
  },
});
