import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "./Regis.css";
import { toastSuccess } from "../components/sharedComponents/toast";

const Register = () => {
    const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
      full_name: "",
      phone: "",
      confirmedPassword: "",
    },
    validationSchema: Yup.object({
      confirmedPassword: Yup.string()
        .required("Bắt buộc")
        .oneOf([Yup.ref("password"), null], "Mật khẩu không khớp"),

      phone: Yup.string().required("Bắt buộc").max(10),

      full_name: Yup.string().required("Bắt buộc").min(8),

      username: Yup.string().required("Bắt buộc").min(4, "Ít nhất 4 ký tự"),
      email: Yup.string()
        .required("Bắt buộc")
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email không hợp lệ"),
      password: Yup.string()
        .required("Bắt buộc")
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
          "Mật khẩu phải có 7-19 ký tự và chứa ít nhất một chữ cái, một số và một ký tự đặc biệt"
        ),
    }),
    onSubmit: (values) => {
      // console.log(formik.values);

      fetch("https://30slice.online/api/user/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formik.values),
      }).then((resp) => {
        resp.json().then((result) => {
            toastSuccess("Đăng ký thành công")
            navigate("/login")

        });
      });
    },
  });

  return (
    <section className="form py-4" onSubmit={formik.handleSubmit}>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className=" col-xl-10">
            <div className="card text-black" style={{ borderRadius: 25 }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-6 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Đăng ký thành viên
                    </p>
                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            style={{
                              backgroundColor: "#E8F0FE",
                              color: "black",
                            }}
                            type="text"
                            id="full_name"
                            className="form-control"
                            value={formik.values.full_name}
                            onChange={formik.handleChange}
                            placeholder=" Nhập họ tên"
                          />
                          {formik.errors.full_name && (
                            <p className="errorMsg">
                              {" "}
                              {formik.errors.full_name}{" "}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            style={{
                              backgroundColor: "#E8F0FE",
                              color: "black",
                            }}
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder=" Nhập email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                          />
                          {formik.errors.email && (
                            <p className="errorMsg"> {formik.errors.email} </p>
                          )}
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-mobile fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            style={{
                              backgroundColor: "#E8F0FE",
                              color: "black",
                            }}
                            type="number"
                            id="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            placeholder=" Số điện thoại"
                            className="form-control"
                          />
                          {formik.errors.phone && (
                            <p className="errorMsg"> {formik.errors.phone} </p>
                          )}
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user-cog fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            style={{
                              backgroundColor: "#E8F0FE",
                              color: "black",
                            }}
                            type="text"
                            id="username"
                            className="form-control"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            placeholder=" Nhập tài khoản"
                          />
                          {formik.errors.username && (
                            <p className="errorMsg">
                              {" "}
                              {formik.errors.username}{" "}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            style={{
                              backgroundColor: "#E8F0FE",
                              color: "black",
                            }}
                            type="password"
                            id="password"
                            value={formik.values.password}
                            placeholder=" Nhập mật khẩu"
                            onChange={formik.handleChange}
                            className="form-control"
                          />
                          {formik.errors.password && (
                            <p className="errorMsg">
                              {" "}
                              {formik.errors.password}{" "}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            style={{
                              backgroundColor: "#E8F0FE",
                              color: "black",
                            }}
                            type="password"
                            id="confirmedPassword"
                            value={formik.values.confirmedPassword}
                            onChange={formik.handleChange}
                            placeholder=" Xác nhận mật khẩu"
                            className="form-control"
                          />
                          {formik.errors.confirmedPassword && (
                            <p className="errorMsg">
                              {" "}
                              {formik.errors.confirmedPassword}{" "}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Đăng ký
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-6 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/000/103/328/original/barber-tools-pattern-vector.jpg"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
