import { useDispatch, useSelector } from "react-redux";
import Breakcumb from "../components/Breakcumb";
import { Link } from "react-router-dom";
import OrderSummary from "../components/OrderSummary";
const Checkout = () => {
  const dataCart = useSelector((state) => state.cart);
  console.log(dataCart);
  const subTotal = dataCart.reduce((total, item) => {
    return total + item.Price * item.Quantity;
  }, 0);
  const shippingFree = 30000;
  return (
    <div className="contents">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="shop-breadcrumb">
              <div className="breadcrumb-main">
                <h4 className="text-capitalize breadcrumb-title">checkout</h4>
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
                  <div className="step " id={1}>
                    <span>
                      {" "}
                      <img className="svg" src="/assets/img/svg/user.svg" alt="" />{" "}
                    </span>
                    <span>Đăng nhập</span>
                  </div>
                  <div className="current">
                    <img src="/assets/img/svg/checkout.svg" alt="img" className="svg" />
                  </div>
                  <div className="step" id={2}>
                    <span>
                      <img className="svg" src="/assets/img/svg/address.svg" alt="" />
                    </span>
                    <span>Địa chỉ nhận hàng</span>
                  </div>
                  <div className="current">
                    <img src="/assets/img/svg/checkout.svg" alt="img" className="svg" />
                  </div>
                  <div className="step" id={3}>
                    <span>
                      <img
                        className="svg"
                        src="/assets/img/svg/155-credit-card.svg"
                        alt=""
                      />
                    </span>
                    <span>Phương thức thanh toán</span>
                  </div>
                  <div className="current">
                    <img src="/assets/img/svg/checkout.svg" alt="img" className="svg" />
                  </div>
                  <div className="step" id={4}>
                    <span>
                      <img className="svg" src="/assets/img/svg/024-like.svg" alt="" />
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
                      <h4 className="fw-500">
                        1. Đăng nhập vào tài khoản của bạn
                      </h4>
                    </div>
                    <div className="card-body">
                      <div className="edit-profile__body">
                        <form>
                          <div className="form-group">
                            <label htmlFor="name1">Tên đăng nhập</label>
                            <input
                              type="text"
                              className="form-control"
                              id="name1"
                              placeholder="Usename"
                            />
                          </div>
                          <div className="form-group create-passord">
                            <label htmlFor="phoneNumber">Mật khẩu</label>
                            <input
                              type="password"
                              className="form-control"
                              id="phoneNumber"
                              placeholder="Password"
                              defaultValue={121445}
                            />
                            <span className="create-passord-warn">
                              Enter a valid password. Min 6 characters long
                            </span>
                          </div>
                          <div className="button-group d-flex pt-20 mb-20 justify-content-md-end justify-content-center">
                            <Link
                              to="/signup"
                              className="btn btn-info btn-default btn-squared text-capitalize text-white mx-3"
                            >
                              Đăng ký
                              <i className="ml-10 mr-0 las la-arrow-right" />
                            </Link>
                            <a
                              href="checkout2.html"
                              className="btn btn-primary btn-default btn-squared text-capitalize text-white"
                            >
                              Đăng nhập
                              <i className="ml-10 mr-0 las la-arrow-right" />
                            </a>
                          </div>
                        </form>
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
    </div>
  );
};
export default Checkout;
