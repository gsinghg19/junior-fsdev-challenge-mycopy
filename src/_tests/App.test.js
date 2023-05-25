import userEvent from "@testing-library/user-event";
import Header from "../components/Header";
import SignInSide from "../pages/LogIn";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import {
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { auth, provider } from "../firebase.utils";

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
  test("SigninWithPopUp via google auth single sign in should throw an error with wrong credentials", async () => {
    let error = "";
    try {
      await signInWithPopup("incorrect_auth", "incorrect_provider");
    } catch (e) {
      error = e.toString();
    }
    expect(error).toContain("Error");
  });
  test("SigninWithPopUp via google auth single sign in should create a popup modal, with an email text box", async () => {
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

    await waitFor(() =>
      screen.getByRole("button", { name: /Next/i }, { hidden: true })
    );

    // await waitFor(() => screen.getByRole("presentation", { hidden: true }));
    // expect(screen.getByRole("presentation"));
  });
});
