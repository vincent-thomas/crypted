import { hash, Algorithm, verify } from "@node-rs/argon2";
import {BinaryToTextEncoding, createHash} from "node:crypto";
const ALGORITHM = Algorithm.Argon2id;

export const createPasswordHash = (password: string) =>
  hash(password, {
    algorithm: ALGORITHM
  });

export const verifyPasswordHash = (hash: string, password: string) =>
  verify(hash, password, {
    algorithm: ALGORITHM
  });


export const md5Hash = (text: string, defaultEncoding: BinaryToTextEncoding = "base64") => createHash("md5").update(text).digest(defaultEncoding);

export const md5Verify = (textToCompare: string, hash: string, encoding: BinaryToTextEncoding = "base64") => createHash("md5").update(textToCompare).digest(encoding) === hash;