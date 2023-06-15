import { it, expect } from "vitest";

import MATE_SOURCE from "../src/main";

it("Should return a mate emoji", () => {
	expect(MATE_SOURCE).toBe("🧉");
});

import MATE_MJS from "../lib/main";

it("Should return a mate emoji", () => {
	expect(MATE_MJS).toBe("🧉");
});

const MATE_CJS = require("../lib/main");

it("Should return a mate emoji", () => {
	expect(MATE_CJS).toBe("🧉");
});
