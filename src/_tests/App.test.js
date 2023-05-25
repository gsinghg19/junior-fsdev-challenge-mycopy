import userEvent from "@testing-library/user-event";
import Header from "../components/Header";
import SignInSide from "../pages/LogIn";
import { render, screen, waitFor } from "@testing-library/react";
import { signInWithPopup } from "firebase/auth";
import { AuthContextProvider } from "../context/AuthContext";

const mockedUseNavigate = jest.fn();
const mockedSignInWithPopup = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

jest.mock("firebase/auth", () => ({
  ...jest.requireActual("firebase/auth"),
  signInWithPopup: () => mockedSignInWithPopup,
}));

describe("header", () => {
  test("Detect darkmodeswitch has rendered with app bar", async () => {
    render(
      <AuthContextProvider>
        <Header />
      </AuthContextProvider>
    );
  });
  test("Detect that the darkmode switch functions when clicked", async () => {
    render(
      <AuthContextProvider>
        <Header />
      </AuthContextProvider>
    );
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
      <AuthContextProvider>
        <SignInSide />
      </AuthContextProvider>
    );
  });
  test("Detect the google Login button on the login page", async () => {
    render(
      <AuthContextProvider>
        <SignInSide />
      </AuthContextProvider>
    );

    const signInWithGoogleButton = screen.getByRole("button", {
      name: "Sign in with Google",
    });

    expect(signInWithGoogleButton).toBeInTheDocument();
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
    render(
      <AuthContextProvider>
        <SignInSide />
      </AuthContextProvider>
    );
    expect(screen.getByRole("button", { name: /Sign in with Google/i }));

    await userEvent.click(
      screen.getByRole("button", { name: /Sign in with Google/i })
    );

    screen.debug(undefined, Infinity);

    // await waitFor(() =>
    //   screen.getByRole("button", { name: /Next/i }, { hidden: true })
    // );

    // await waitFor(() => screen.getByRole("presentation", { hidden: true }));
    // expect(screen.getByRole("presentation"));
  });
});
