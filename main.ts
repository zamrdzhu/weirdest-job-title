// weirdest-job-title — a program/v1 entry for make.fun's
// "Weirdest Job Title: Blind Judge Showdown".
//
// The program writes one job title (60 characters at most) to
// /output/entry.txt and prints the same line to stdout.
// It is fully deterministic: every run produces byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";

// The entry: a real job with one gloriously specific twist.
// A dog walker — except every single client is a cat.
const ENTRY = "Dog Walker (Cats Only)";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 60
// characters, not only white space. Refuse to write anything
// that would fail it rather than hand in an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 60 || !ENTRY.trim()) {
  throw new Error(`entry fails the gate at ${ENTRY.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
