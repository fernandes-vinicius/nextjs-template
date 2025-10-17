"use client";

import { type MaskitoOptions, maskitoTransform } from "@maskito/core";
import { Input } from "@/components/ui/input";

export interface MaskInputProps extends React.ComponentProps<typeof Input> {
  maskOptions: MaskitoOptions;
}

export type MaskInputPropsWithoutMaskOptions = Omit<MaskInputProps, "maskOptions">;

export function MaskInput({ maskOptions, value, onChange, ...props }: MaskInputProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const maskedValue = maskitoTransform(e.target.value, maskOptions);
    e.target.value = maskedValue;

    onChange?.(e);
  }

  return <Input {...props} value={value} onChange={handleChange} />;
}
