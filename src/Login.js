import React /* useState */ from "react";

const Login = () => {

  return (
    <div>
      <div className="text-center">
        <h1 className="logo">ChatParty</h1>
        <h4>A PARTY WITH FRIENDS YOU'VE NEVER MET</h4>
      </div>
      <br />
      <form
        className="form-inline justify-content-center"
        method="GET"
        action="/api/auth"
      >
        <div className="form-group">
          <p>
            <a className="btn btn-outline-dark" href="/api/auth" role="button">
              <img
                width="25px"
                alt="Google sign-in"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              />
              &nbsp;&nbsp;&nbsp; Login with Google
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
