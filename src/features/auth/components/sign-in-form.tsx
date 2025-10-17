"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AuthProviders } from "@/lib/next-auth/providers";
import { cn } from "@/lib/utils";

const signInFormSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .trim()
    .min(1, "Password must be at least 32 characters long")
    .max(100, "Password must be a maximum of 100 characters"),
});

type SignInFormData = z.infer<typeof signInFormSchema>;

export function SignInForm({ className, ...props }: React.ComponentProps<"form">) {
  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: { email: "", password: "" },
  });

  async function handleSubmit({ email, password }: SignInFormData) {
    await signIn(AuthProviders.CREDENTIALS, { email, password, callbackUrl: "/" });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className={cn("flex flex-col gap-6", className)} {...props}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="m@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button>Sign-in</Button>
      </form>
    </Form>
  );
}
