import { randomBytes } from "crypto";
import { decrypt } from "./src/decrypt";
import { encrypt } from "./src/encrypt";
import { describe, it } from "node:test";
import assert from "node:assert";

describe("Encryption & Decryption", () => {
  it("Should format string with the utf-8 encoding to a buffer", () => {
    const TEXT = "this is the formatting";
    const KEY = randomBytes(32);
    const encrypted = encrypt(TEXT, KEY);
    const TEST_DECRYPTED = decrypt(encrypted, KEY);

    assert(TEXT === TEST_DECRYPTED);
  });
});
