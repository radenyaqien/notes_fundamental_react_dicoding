import PropTypes from "prop-types";
import useInput from "../../utils/hook/UseInput";

function RegisterForm({onRegister}) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [name, onNameChange] = useInput("");

const onSubmitHandler = (event) =>{
    event.preventDefault();

    onRegister({
      name: name,
      email: email,
      password: password,
    });
  }

  return (
    <div className="card">
      <div className="card-body">
        <div className="m-sm-3">
          <form onSubmit={onSubmitHandler}>
            <div className="mb-3">
              <label className="form-label">Full name</label>
              <input
                className="form-control form-control-lg"
                type="text"
                name="name"
                value={name}
                onChange={onNameChange}
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                className="form-control form-control-lg"
                type="email"
                name="email"
                value={email}
                onChange={onEmailChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                className="form-control form-control-lg"
                type="password"
                name="password"
                value={password}
                onChange={onPasswordChange}
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button className="btn btn-lg btn-primary">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

RegisterForm.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

export default RegisterForm;
