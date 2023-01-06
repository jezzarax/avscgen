import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HelloWorld from "../HelloWorld.vue";

import {sumfn} from "avscgen-code"

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(HelloWorld, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
  it('adds 1 + 2 to equal 3', () => {
    expect(sumfn(1, 2)).toBe(3);
  });
});
