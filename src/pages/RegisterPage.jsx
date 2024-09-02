import { Link,useNavigate } from "react-router-dom";
import RegisterForm from "../components/auth/RegisterForm";
import { register } from "../utils/network-data";

function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  }

  return (
    <div className="container d-flex flex-column">
      <div className="row vh-100">
        <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
          <div className="d-table-cell align-middle">
            <div className="text-center mt-4">
              <h1 className="h2">Get started</h1>
              <p className="lead">
                Start creating the best possible user experience for you
                customers.
              </p>
              <RegisterForm onRegister={onRegisterHandler} />
              <div className="text-center mb-3">
                Already have account? <Link to={"/"}>Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
