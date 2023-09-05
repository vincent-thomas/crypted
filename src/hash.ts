import { hash, Algorithm, verify } from "@node-rs/argon2";
import {BinaryToTextEncoding, createHash} from "node:crypto";

const ALGORITHM = Algorithm.Argon2id;
const DEFAULT_ENCODING: BinaryToTextEncoding = "base64"


export const createPasswordHash = (password: string) =>
  hash(password, {
    algorithm: ALGORITHM
  });

export const verifyPasswordHash = (hash: string, password: string) =>
  verify(hash, password, {
    algorithm: ALGORITHM
  });


export const md5Hash = (text: string, defaultEncoding: BinaryToTextEncoding = DEFAULT_ENCODING) => createHash("md5").update(text).digest(defaultEncoding);
export const md5Verify = (textToCompare: string, hash: string, encoding: BinaryToTextEncoding = DEFAULT_ENCODING) => createHash("md5").update(textToCompare).digest(encoding) === hash;

export const sha256Hash = (text: string, defaultEncoding: BinaryToTextEncoding = DEFAULT_ENCODING) => createHash("sha256").update(text).digest(defaultEncoding);
export const sha256Verify = (textToCompare: string, hash: string, encoding: BinaryToTextEncoding = DEFAULT_ENCODING) => createHash("sha256").update(textToCompare).digest(encoding) === hash;

export const sha512Hash = (text: string, defaultEncoding: BinaryToTextEncoding = DEFAULT_ENCODING) => createHash("sha512").update(text).digest(defaultEncoding);
export const sha512Verify = (textToCompare: string, hash: string, encoding: BinaryToTextEncoding = DEFAULT_ENCODING) => createHash("sha512").update(textToCompare).digest(encoding) === hash;