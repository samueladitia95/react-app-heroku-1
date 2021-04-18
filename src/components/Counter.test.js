import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

//?

describe("Counter Component Test", () => {
  test("Should render counter title properly", () => {
    //! 1. Render component
    const { getByText } = render(<Counter />);

    //! 2. Mengambil element dari component yang di render
    const title = getByText("Counter: 0");

    //! 3. Element di check apakah ada di component
    expect(title).toBeInTheDocument();
  });

  test("Should render button properly", () => {
    //! 1. Render component
    const { getByText } = render(<Counter />);

    //! 2. Mengambil element dari component yang di render
    const decrement = getByText("-1");
    const increment = getByText("+1");

    //! 3. Element di check apakah ada di component
    expect(decrement).toBeInTheDocument();
    expect(increment).toBeInTheDocument();
  });

  test("id test", () => {
    //! 1. Render component
    const { getByTestId } = render(<Counter />);

    //! 2. Mengambil element dari component yang di render
    const title = getByTestId("counter");

    //! 3. Element di check apakah ada di component
    expect(title).toHaveTextContent(/Counter/);
  });

  test("Should click decrement button correctly", () => {
    //! 1. Render component
    const { getByTestId } = render(<Counter />);

    //! 2. Mengambil element dari component yang di render
    const decrement = getByTestId("decrement");
    const title = getByTestId("counter");

    //! 3. Lakukan Click pada element button
    fireEvent.click(decrement);

    //! 4. Element di check apakah valuenya sesuai
    expect(title).toHaveTextContent("Counter: -1");
  });

  test("Should click increment button correctly", () => {
    //! 1. Render component
    const { getByTestId } = render(<Counter />);

    //! 2. Mengambil element dari component yang di render
    const increment = getByTestId("increment");
    const title = getByTestId("counter");

    //! 3. Lakukan Click pada element button
    fireEvent.click(increment);

    //! 4. Element di check apakah valuenya sesuai
    expect(title).toHaveTextContent("Counter: 1");
  });
});
