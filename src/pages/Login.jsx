const Login = () => {
  return (
    <div>
      <main className="main-content">
        <div className="signUP-admin">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-xl-4 col-lg-5 col-md-5 p-0">
                <div className="signUP-admin-left signIn-admin-left position-relative">
                  <div className="signUP-overlay">
                    <img
                      className="svg signupTop"
                      src="img/svg/signuptop.svg"
                      alt="img"
                    />
                    <img
                      className="svg signupBottom"
                      src="img/svg/signupbottom.svg"
                      alt="img"
                    />
                  </div>
                  <div className="signUP-admin-left__content">
                    <div className="text-capitalize mb-md-30 mb-15 d-flex align-items-center justify-content-md-start justify-content-center">
                      <a
                        className="wh-36 bg-primary text-white radius-md mr-10 content-center"
                        href="index.html"
                      >
                        a
                      </a>
                      <span className="text-dark">admin</span>
                    </div>
                    <h1>Bootstrap 4 React Web Application</h1>
                  </div>
                  <div className="signUP-admin-left__img">
                    <img
                      className="img-fluid svg"
                      src="img/svg/signupIllustration.svg"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-7 col-md-7 col-sm-8">
                <div className="signUp-admin-right signIn-admin-right  p-md-40 p-10">
                  <div className="signUp-topbar d-flex align-items-center justify-content-md-end justify-content-center mt-md-0 mb-md-0 mt-20 mb-1">
                    <p className="mb-0">
                      Don't have an account?
                      <a href="sign-up.html" className="color-primary">
                        Sign up
                      </a>
                    </p>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8 col-md-12">
                      <div className="edit-profile mt-md-25 mt-0">
                        <div className="card border-0">
                          <div className="card-header border-0  pb-md-15 pb-10 pt-md-20 pt-10 ">
                            <div className="edit-profile__title">
                              <h6>
                                Sign up to{"{"}" "{"}"}
                                <span className="color-primary">Admin</span>
                              </h6>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="edit-profile__body">
                              <div className="form-group mb-20">
                                <label htmlFor="username">
                                  Username or Email Address
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="username"
                                  placeholder="Username"
                                />
                              </div>
                              <div className="form-group mb-15">
                                <label htmlFor="password-field">password</label>
                                <div className="position-relative">
                                  <input
                                    id="password-field"
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    defaultValue="secret"
                                  />
                                  <div className="fa fa-fw fa-eye-slash text-light fs-16 field-icon toggle-password2" />
                                </div>
                              </div>
                              <div className="signUp-condition signIn-condition">
                                <div className="checkbox-theme-default custom-checkbox ">
                                  <input
                                    className="checkbox"
                                    type="checkbox"
                                    id="check-1"
                                  />
                                  <label htmlFor="check-1">
                                    <span className="checkbox-text">
                                      Keep me logged in
                                    </span>
                                  </label>
                                </div>
                                <a href="forget-password.html">forget password</a>
                              </div>
                              <div className="button-group d-flex pt-1 justify-content-md-start justify-content-center">
                                <button className="btn btn-primary btn-default btn-squared mr-15 text-capitalize lh-normal px-50 py-15 signIn-createBtn ">
                                  sign in
                                </button>
                              </div>
                              <p className="social-connector text-center mb-sm-25 mb-15  mt-sm-30 mt-20">
                                <span>Or</span>
                              </p>
                              <div className="button-group d-flex align-items-center justify-content-md-start justify-content-center">
                                <ul className="signUp-socialBtn">
                                  <li>
                                    <button className="btn text-dark px-30">
                                      <img
                                        className="svg"
                                        src="img/svg/google.svg"
                                        alt="img"
                                      />
                                      {"{"}" "{"}"}
                                      Sign up with Google
                                    </button>
                                  </li>
                                  <li>
                                    <button className=" radius-md wh-48 content-center">
                                      <img
                                        className="svg"
                                        src="img/svg/facebook.svg"
                                        alt="img"
                                      />
                                    </button>
                                  </li>
                                  <li>
                                    <button className="radius-md wh-48 content-center">
                                      <img
                                        className="svg"
                                        src="img/svg/twitter.svg"
                                        alt="img"
                                      />
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div id="overlayer">
        <span className="loader-overlay">
          <div className="atbd-spin-dots spin-lg">
            <span className="spin-dot badge-dot dot-primary" />
            <span className="spin-dot badge-dot dot-primary" />
            <span className="spin-dot badge-dot dot-primary" />
            <span className="spin-dot badge-dot dot-primary" />
          </div>
        </span>
      </div>
    </div>
  );
};

export default Login;
