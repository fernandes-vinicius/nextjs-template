"use client";

import { MaskInput, type MaskInputPropsWithoutMaskOptions } from "@/components/common/masks/mask-input";
import { phoneOptions } from "@/lib/masks";

export function PhoneMaskInput(props: MaskInputPropsWithoutMaskOptions) {
  return <MaskInput placeholder="(00) 00000-0000" {...props} maxLength={17} maskOptions={phoneOptions} />;
}
