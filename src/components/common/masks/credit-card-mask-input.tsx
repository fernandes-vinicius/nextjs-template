"use client";

import { MaskInput, type MaskInputPropsWithoutMaskOptions } from "@/components/common/masks/mask-input";
import { creditCardOptions } from "@/lib/masks";

export function CreditCardMaskInput(props: MaskInputPropsWithoutMaskOptions) {
  return <MaskInput {...props} maxLength={19} maskOptions={creditCardOptions} />;
}
