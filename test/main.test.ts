import { it, expect } from "vitest";

import MATE_SOURCE from "../src/main";

it("Should return a mate emoji", () => {
	expect(MATE_SOURCE).toBe("🧉");
});

import MATE_LIB from "../lib/main";

it("Should return a mate emoji", () => {
	expect(MATE_LIB).toBe("🧉");
});
