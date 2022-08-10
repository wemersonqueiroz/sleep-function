"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
test('My Greeter', () => {
    expect((0, index_1.Greeter)('Carl')).toBe('Hello Carl');
});
