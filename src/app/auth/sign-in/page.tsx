import { GalleryVerticalEndIcon } from "lucide-react";
import type { Metadata } from "next";
import { SignInForm } from "@/features/auth/components/sign-in-form";

export const metadata: Metadata = {
  title: "Sign-in",
};

export default function SignPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <div className="flex items-center gap-2 font-medium">
            <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEndIcon className="size-4" />
            </div>
            Acme Inc.
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs space-y-6">
            <div className="flex flex-col items-center gap-1 text-center">
              <h1 className="font-bold text-2xl">Login to your account</h1>
              <p className="text-balance text-muted-foreground text-sm">
                Enter your email below to login to your account
              </p>
            </div>
            <SignInForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        {/** biome-ignore lint/performance/noImgElement: <> */}
        <img
          src="/images/placeholder.svg"
          alt="Placeholder"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
