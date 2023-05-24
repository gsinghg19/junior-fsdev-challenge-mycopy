import userEvent from "@testing-library/user-event";
import Header from "../components/Header";
import { render, screen } from "@testing-library/react";

describe("header", () => {
  test("Detect darkmodeswitch has rendered", async () => {
    render(<Header />);
  });
  test("Detect that the darkmode switch functions when clicked", async () => {
    render(<Header />);
    const toggleDarkModeSwitch = screen.getByTestId("toggleMode");
    const avatarBox = screen.getByTestId("avatarBox");

    expect(avatarBox).toHaveStyle("backgroundColor: rgb(189 189 189 )");
    await userEvent.click(toggleDarkModeSwitch);
    expect(avatarBox).toHaveStyle("backgroundColor: rgb(117 117 117 )");
  });
});
