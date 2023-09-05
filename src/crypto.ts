import { formatTo, fromBuffer, toBuffer } from "bformat";
import { createCipheriv, createDecipheriv, randomBytes } from "node:crypto";
import { ALGORITHM, IV_LENGTH, IV_PROTOCOL } from "./config";

export const decrypt = (text: string, key: Buffer) => {
  const [ivString, msg] = Buffer.from(text, "base64")
    .toString("utf-8")
    .split(":") as [string, string];
  const iv = toBuffer(ivString, IV_PROTOCOL);
  const decipher = createDecipheriv(ALGORITHM, key, iv);

  return decipher.update(msg, "hex", "utf8") + decipher.final("utf8");
};

export const encrypt = (text: string, key: Buffer) => {
  const iv = randomBytes(IV_LENGTH);
  const cipher = createCipheriv(ALGORITHM, key, iv);
  const encrypted = cipher.update(text, "utf8", "hex") + cipher.final("hex");

  return formatTo(
    `${fromBuffer(iv, IV_PROTOCOL)}:${encrypted}`,
    "utf-8",
    "base64"
  );
};
