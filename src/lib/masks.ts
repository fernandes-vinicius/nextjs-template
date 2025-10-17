import type { MaskitoOptions } from "@maskito/core";
import { maskitoPhoneOptionsGenerator } from "@maskito/phone";
import metadata from "libphonenumber-js/min/metadata";

export const phoneOptions = maskitoPhoneOptionsGenerator({ countryIsoCode: "BR", metadata });

export const creditCardOptions: MaskitoOptions = {
  mask: [/\d/, /\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/],
};
