import { Link } from "react-router-dom";
import { login } from "../utils/network-data";
import LoginForm from "../components/auth/LoginForm";
import PropTypes from "prop-types";

function LoginPage({loginSuccess}) {

    async function onLoginHandler(user) {

        const { error, data } = await login(user);
 
        if (!error) {
          loginSuccess(data);
        }
        
      }

  return (
    <div className="container d-flex flex-column">
      <div className="row vh-100">
        <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
          <div className="d-table-cell align-middle">
            <div className="text-center mt-4">
              <h1 className="h2">Welcome back!</h1>
              <p className="lead">Sign in to your account to continue</p>
            </div>

            <LoginForm onLogin={onLoginHandler}/>
            <div className="text-center mb-3">
              Don't have an account? <Link to={"/register"}>Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
 
}

LoginPage.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
  };

export default LoginPage;
