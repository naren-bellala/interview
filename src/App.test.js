/* eslint-disable */
import * as React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./components/organisms/Pokemon";

beforeEach(() => {
  jest.spyOn(window, "fetch");
  jest.spyOn(console, "error");
});

afterEach(() => {
  window.fetch.mockRestore();
  console.error.mockRestore();
});

test("displays the pokemon", async () => {
  render(<App />);
  await waitFor(() => {
    const input = screen.getByLabelText(/pokemon/i);
    const submit = screen.getByText(/^submit$/i);

    userEvent.type(input, "pikachu");
    userEvent.click(submit);
    userEvent.clear(input);

    // verify that when props remain the same a request is not made
    window.fetch.mockClear();

    userEvent.click(submit);

    // verify error handling
    console.error.mockImplementation(() => {});

    userEvent.clear(input);
    userEvent.type(input, "george");
    userEvent.click(submit);
  });
  expect(await screen.findByRole("alert")).toHaveTextContent(
    /There was an error: No pokemon with the name "george"Try again/
  );
  expect(console.error).toHaveBeenCalledTimes(3);

  console.error.mockReset();
});
