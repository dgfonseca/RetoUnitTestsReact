import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Like from "../Like";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(
      <Like labelActive="Active" labelInactive="Inactive" />,
      container
    );
  });
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Testing Like default 0", () => {
  it("Default to o like", () => {
    const label = container.querySelector("p");
    expect(label.textContent).toBe("Likes: 0");
  });
});

describe("Testing Like increments", () => {
  it("Increment like 1", () => {
    const button = container.querySelector("#increment");
    const label = container.querySelector("p");
    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(label.textContent).toBe("Likes: 1");
  });
});

describe("Testing Like increments", () => {
  it("Decrements Like -1", () => {
    const button = container.querySelector("#decrement");
    const label = container.querySelector("p");
    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(label.textContent).toBe("Likes: -1");
  });
});
