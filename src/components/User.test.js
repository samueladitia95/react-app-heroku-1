import { render } from "@testing-library/react";
import User from "./User";

//?

describe("User Component Test", () => {
  test("Check User list length", async () => {
    //! 1. Render component
    const { getByTestId, findAllByTestId, getAllByTestId } = render(<User />);

    //! 2. Mengambil element dari component yang di render
    const container = getByTestId("container-user");
    await findAllByTestId("user-list");
    const userList = getAllByTestId("user-list");

    //! 3. Element di check apakah ada di component
    expect(container.childElementCount).toBe(10);
    expect(userList[0]).toHaveTextContent("Leanne Graham");
  });
});
