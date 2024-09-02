import HomePage from "./pages/HomePage";

import { Link, Routes, Route } from "react-router-dom";

import NoteDetailPage from "./pages/NoteDetailPage";
import RegisterPage from "./pages/RegisterPage";
import React from "react";
import LoginPage from "./pages/LoginPage";
import { getUserLogged, putAccessToken } from "./utils/network-data";
import { ThemeProvider } from "./ThemeContext";
import ToggleTheme from "./components/ToggleTheme";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
      initializing: true,
      theme: localStorage.getItem('theme') || 'light',
      toggleTheme: () => {
        this.setState((prevState) => {
          const newTheme = prevState.theme === "light" ? "dark" : "light";
          // menyimpan nilai tema baru ke local storage
          localStorage.setItem("theme", newTheme);
          // mengembalikan state dengan nilai theme terbaru.
          return {
            theme: newTheme,
          };
        });
      },
    };
  }

  async componentDidMount() {
    document.documentElement.setAttribute('data-theme', this.state.theme);
    console.log('mounting' + this.state.theme);
    document.documentElement.setAttribute("data-bs-theme", this.state.theme);
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authUser: data,
        initializing: false,
      };
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      console.log(this.state.theme,prevState.theme);
      document.documentElement.setAttribute("data-bs-theme", this.state.theme);
    }
  }

  onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    this.setState(() => {
      return {
        authUser: data,
      };
    });
  };

  onLogout = () => {
    this.setState(() => {
      return {
        authUser: null,
      };
    });
    putAccessToken(null);
  };

  render() {
    if (this.state.initializing) {
      return null;
    }

    if (this.state.authUser === null) {
      return (
        <ThemeProvider value={this.state}>
          <main className={this.state.theme == "dark" ? "text-bg-dark d-flex w-100" : "d-flex w-100"}>
            <Routes>
              <Route
                path="/*"
                element={<LoginPage loginSuccess={this.onLoginSuccess} />}
              />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>
        </ThemeProvider>
      );
    }

    return (
      <ThemeProvider value={this.state}>
        <main className={this.state.theme == "dark" ? "text-bg-dark" : ""} data-bs-theme = {this.state.theme}>
          <div className="container px-0">
            <nav className={"navbar navbar-expand-xl bg-"+this.state.theme} data-bs-theme={this.state.theme}>
              <Link to={"/"}>
                <h1 className="text-primary display-5">Notes App</h1>
              </Link>
              <div className="navbar-collapse collapse">
                <ul className="navbar-nav navbar-align">
                  <li className="nav-item dropdown">
                    <ToggleTheme />
                  </li>
                  <li className="nav-item dropdown">
                    <button className="btn" onClick={this.onLogout}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/note/:id" element={<NoteDetailPage />} />
          </Routes>
        </main>
      </ThemeProvider>
    );
  }
}

export default App;
