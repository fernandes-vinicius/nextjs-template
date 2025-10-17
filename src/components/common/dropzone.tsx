"use client";

import ReactDropzone, { type DropzoneProps } from "react-dropzone";
import { cn } from "@/lib/utils";

export function Dropzone({
  children,
  className,
  ...props
}: React.PropsWithChildren<Omit<DropzoneProps, "children"> & { className?: string }>) {
  return (
    <ReactDropzone {...props}>
      {({ getRootProps, getInputProps }) => (
        <div
          className={cn("overflow-hidden rounded-md outline-none ring-primary focus-visible:ring-2", className)}
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          {children}
        </div>
      )}
    </ReactDropzone>
  );
}
