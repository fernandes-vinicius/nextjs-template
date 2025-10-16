"use client";

import { type Props, CopyToClipboard as ReactCopyToClipboard } from "react-copy-to-clipboard";

export function CopyToClipboard({ ...props }: Props) {
  return <ReactCopyToClipboard {...props} />;
}
