import userEvent from "@testing-library/user-event";
import Header from "../components/Header";
import SignInSide from "../pages/LogIn";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("header", () => {
  test("Detect darkmodeswitch has rendered with app bar", async () => {
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
describe("Login", () => {
  test("Detect the login page", async () => {
    render(
      <BrowserRouter>
        <SignInSide />
      </BrowserRouter>
    );
  });
  test("Detect the google Login button on the login page", async () => {
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <SignInSide />
      </BrowserRouter>
    );
    await user.click(
      screen.getByRole("button", { name: /Sign in with Google/i })
    );
    expect(screen.getByRole("button", { name: /Sign in with Google/i }));
  });
});
