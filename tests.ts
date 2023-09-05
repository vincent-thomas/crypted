import { randomBytes } from "crypto";
import { decrypt } from "./src/decrypt";
import { encrypt } from "./src/encrypt";
import { describe, it } from "node:test";
import assert from "node:assert";
import { createPasswordHash, md5Hash, md5Verify, sha256Hash, sha256Verify, verifyPasswordHash } from "./src";

describe("Encryption & Decryption", () => {
  it("Should format string with the utf-8 encoding to a buffer", () => {
    const TEXT = "this is the formatting";
    const KEY = randomBytes(32);
    const encrypted = encrypt(TEXT, KEY);
    const TEST_DECRYPTED = decrypt(encrypted, KEY);

    assert(TEXT === TEST_DECRYPTED);
  });
});

describe("Password Hashing and comparing", () => {
  it("Should hash a password and compare it to the original", async () => {
    const PASSWORD = "this is a password";
    const hash = await createPasswordHash(PASSWORD);
    const result = await verifyPasswordHash(hash, PASSWORD);
    assert(result);
  });
});

describe("Hashing and comparing", () => {
  it("MD5 Algorithm", () => {
    const TEXT = "this is a test";
    const hash = md5Hash(TEXT);
    const result = md5Verify(TEXT, hash);
    assert(result);
  });

  it("SHA256 Algorithm", () => {
    const TEXT = "this is a test";
    const hash = sha256Hash(TEXT);
    const result = sha256Verify(TEXT, hash);
    assert(result);
  });
});