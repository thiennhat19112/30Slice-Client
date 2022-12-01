import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  toastSuccess,
  toastError,
} from "../../components/sharedComponents/toast";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import OrderSummary from "../../components/OrderSummary";
import { Truck } from "react-feather";
import { CheckoutCod } from "../../app/services/user/cart.service";
const Checkout4 = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="shop-breadcrumb">
              <div className="breadcrumb-main">
                <h4 className="text-capitalize breadcrumb-title">
                  hoàn thành đơn hàng
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className=" checkout wizard1 global-shadow border px-sm-50 px-20 pt-sm-50 py-30 mb-30 bg-white radius-xl w-100">
          <div className="row">
            <div className="col-xl-12">
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
                    <span>Thông tin người nhận</span>
                  </div>
                  <div className="current">
                    <img
                      src="/assets/img/svg/green.svg"
                      alt="img"
                      className="svg"
                    />
                  </div>
                  <div className="step" id={3}>
                    <span>
                      <img
                        className="svg"
                        src="/assets/img/svg/155-credit-card-success.svg"
                        alt=""
                      />
                    </span>
                    <span>Phương thức thanh toán</span>
                  </div>
                  <div className="current">
                    <img
                      src="/assets/img/svg/green.svg"
                      alt="img"
                      className="svg"
                    />
                  </div>
                  <div className="step" id={4}>
                    <span>
                      <img
                        className="svg"
                        src="/assets/img/svg/024-like-success.svg"
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
                  <div className="card payment-status bg-normal p-sm-30 p-15">
                    <div className="card-body bg-white bg-shadow radius-xl px-sm-30 pt-sm-25 m-0 p-0">
                      <div className="payment-status__area  py-sm-25 py-20 text-center">
                        <div className="content-center">
                          <span className="wh-34 bg-success rounded-circle content-center">
                            <span className="las la-check fs-16 color-white" />
                          </span>
                        </div>
                        <h4 className="fw-500 mt-20 mb-10">
                          Đặt hàng thành công
                        </h4>
                        <span className="fs-15 color-gray">
                          Cảm ơn bạn đã đặt hàng ! Chúng tôi sẽ xác nhận đơn và
                          gửi cho bạn trong thời gian sớm nhất!
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ends: card */}
                </div>
                {/* ends: col */}
              </div>
            </div>
            {/* ends: col */}
            {/* ends: col */}
          </div>
        </div>
        {/* End: .global-shadow*/}
      </div>
    </>
  );
};
export default Checkout4;
