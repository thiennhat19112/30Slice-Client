import { useDispatch, useSelector } from "react-redux";
import { useRef, useEffect } from "react";

import Select from "react-select";
import { Link } from "react-router-dom";
import OrderSummary from "../../components/OrderSummary";
import { Truck } from "react-feather";
const Checkout3 = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="shop-breadcrumb">
              <div className="breadcrumb-main">
                <h4 className="text-capitalize breadcrumb-title">
                  Phương thức thanh toán
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className=" checkout wizard1 global-shadow border px-sm-50 px-20 pt-sm-50 py-30 mb-30 bg-white radius-xl w-100">
          <div className="row">
            <div className="col-xl-8">
              <div className="checkout-progress-indicator content-center">
                <div className="checkout-progress">
                  <div className="step" id={1}>
                    <span>
                      {" "}
                      <img
                        className="svg"
                        src="/assets/img/svg/user-success.svg"
                        alt=""
                      />{" "}
                    </span>
                    <span>Đăng nhập</span>
                  </div>
                  <div className="current">
                    <img
                      src="/assets/img/svg/green.svg"
                      alt="img"
                      className="svg"
                    />
                  </div>
                  <div className="step active" id={2}>
                    <span>
                      <img
                        className="svg"
                        src="/assets/img/svg/address-success.svg"
                        alt=""
                      />
                    </span>
                    <span>Địa chỉ nhận hàng</span>
                  </div>
                  <div className="current">
                    <img
                      src="/assets/img/svg/checkoutin.svg"
                      alt="img"
                      className="svg"
                    />
                  </div>
                  <div className="step" id={3}>
                    <span>
                      <img
                        className="svg"
                        src="/assets/img/svg/155-credit-card-active.svg"
                        alt=""
                      />
                    </span>
                    <span>Phương thức thanh toán</span>
                  </div>
                  <div className="current">
                    <img
                      src="/assets/img/svg/checkout.svg"
                      alt="img"
                      className="svg"
                    />
                  </div>
                  <div className="step" id={4}>
                    <span>
                      <img
                        className="svg"
                        src="/assets/img/svg/024-like.svg"
                        alt=""
                      />
                    </span>
                    <span>Hoàn thành đơn hàng</span>
                  </div>
                </div>
              </div>

              {/* checkout */}
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8 col-sm-10">
                  <div className="card checkout-shipping-form border-0">
                    <div className="card-header border-bottom-0 align-content-start pb-sm-0 pb-1">
                      <h4 className="fw-500">3. Chọn phương thức thanh toán</h4>
                    </div>
                    <div className="card-body">
                      <div className="payment-method-paypal">
                        <div className="d-flex align-items-center mb-20">
                          <div className="radio-theme-default custom-radio  d-flex mr-2">
                            <input
                              className="radio"
                              type="radio"
                              name="radio-vertical"
                              defaultValue={0}
                              id="radio-vl6"
                            />
                            <label htmlFor="radio-vl6">
                              <span className="radio-text" />
                            </label>
                          </div>
                          <button
                            type="button"
                            className=" form-control d-flex align-items-center justify-content-between"
                          >
                            Thanh toán bằng VNPAY
                            <img
                              src="/assets/images/vnpay.svg"
                              alt="paypal"
                              className="d-lg-block d-none"
                            />
                          </button>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="radio-theme-default custom-radio  d-flex mr-2">
                            <input
                              className="radio"
                              type="radio"
                              name="radio-vertical"
                              defaultValue={0}
                              id="radio-vl7"
                            />
                            <label htmlFor="radio-vl7">
                              <span className="radio-text" />
                            </label>
                          </div>
                          <button
                            type="button"
                            className=" form-control d-flex align-items-center justify-content-between"
                            id="payment3"
                          >
                            Thanh toán khi nhận hàng (COD)
                            <Truck className="d-lg-block d-none m-4" />
                          </button>
                        </div>
                      </div>

                      <div className="col-md-12 mt-5 form-group">
                        <button className="btn btn-primary btn-default btn-squared ">
                          Tiếp tục
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* ends: card */}
                </div>
                {/* ends: col */}
              </div>
            </div>
            {/* ends: col */}
            <div className="col-xl-4 col-md-8 col-sm-10 mx-auto">
              <div className="card order-summery order-summery--width  bg-normal p-sm-25 p-15">
                <div className="card-header border-bottom-0 p-0 pb-25">
                  <h5 className="fw-500">Tổng đơn hàng</h5>
                </div>
                <div className="card-body bg-white">
                  <OrderSummary />
                </div>
              </div>
              {/* ends: card */}
            </div>
            {/* ends: col */}
          </div>
        </div>
        {/* End: .global-shadow*/}
      </div>
    </>
  );
};
export default Checkout3;
