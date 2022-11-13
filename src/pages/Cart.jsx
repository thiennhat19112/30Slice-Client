const Cart = () => {
  return (
    <main className="main-content">
      <div className="contents">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="shop-breadcrumb">
                <div className="breadcrumb-main">
                  <h4 className="text-capitalize breadcrumb-title">
                    giỏ hàng
                  </h4>
               
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="cartPage  global-shadow border pr-sm-30 pl-sm-30  p-15 py-sm-30 bg-white radius-xl w-100 mb-30">
            <div className="row justify-content-center">
              <div className="cus-xl-9 col-12 ">
                <div className="product-cart mb-sm-0 mb-20">
                  <div className="table-responsive">
                    <table
                      id="cart"
                      className="table table-borderless table-hover"
                    >
                      <thead>
                        <tr className="product-cart__header">
                          <th scope="col">Product</th>
                          <th scope="col">Price</th>
                          <th scope="col">Quantity</th>
                          <th scope="col" className="text-center">
                            total
                          </th>
                          <th scope="col" className="" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="Product-cart-title">
                            <div className="media  align-items-center">
                              <img
                                className="mr-3 wh-80 align-self-center radius-xl bg-opacity-primary"
                                src="img/cart1.png"
                                alt="Generic placeholder image"
                              />
                              <div className="media-body">
                                <h5 className="mt-0">Fiber base chair</h5>
                                <div className="d-flex">
                                  <p>
                                    Size:<span>large</span>
                                  </p>
                                  <p>
                                    color:<span>brown</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="price">$248.66</td>
                          <td>
                            {/* Start: Product Quantity */}
                            <div className="quantity product-cart__quantity">
                              <input
                                type="button"
                                defaultValue="-"
                                className="qty-minus bttn bttn-left wh-36"
                              />
                              <input
                                type="number"
                                defaultValue={1}
                                className="qty qh-36 input"
                              />
                              <input
                                type="button"
                                defaultValue="+"
                                className="qty-plus bttn bttn-right wh-36"
                              />
                            </div>
                            {/* End: Product Quantity */}
                          </td>
                          <td className="text-center subtotal">$5.11</td>
                          <td className="actions">
                            <button
                              type="button"
                              className="action-btn float-right"
                            >
                              <i className="las la-trash-alt" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="Product-cart-title">
                            <div className="media  align-items-center">
                              <img
                                className="mr-3 wh-80 align-self-center radius-xl bg-opacity-primary"
                                src="img/cart2.png"
                                alt="Generic placeholder image"
                              />
                              <div className="media-body">
                                <h5 className="mt-0">Fiber base chair</h5>
                                <div className="d-flex">
                                  <p>
                                    Size:<span>large</span>
                                  </p>
                                  <p>
                                    color:<span>brown</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="price">$248.66</td>
                          <td>
                            {/* Start: Product Quantity */}
                            <div className="quantity product-cart__quantity">
                              <input
                                type="button"
                                defaultValue="-"
                                className="qty-minus bttn bttn-left wh-36"
                              />
                              <input
                                type="number"
                                defaultValue={1}
                                className="qty qh-36 input"
                              />
                              <input
                                type="button"
                                defaultValue="+"
                                className="qty-plus bttn bttn-right wh-36"
                              />
                            </div>
                            {/* End: Product Quantity */}
                          </td>
                          <td className="text-center subtotal">$5.11</td>
                          <td className="actions">
                            <button
                              type="button"
                              className="action-btn float-right"
                            >
                              <i className="las la-trash-alt" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="Product-cart-title">
                            <div className="media  align-items-center">
                              <img
                                className="mr-3 wh-80 align-self-center radius-xl bg-opacity-primary"
                                src="img/cart3.png"
                                alt="Generic placeholder image"
                              />
                              <div className="media-body">
                                <h5 className="mt-0">Fiber base chair</h5>
                                <div className="d-flex">
                                  <p>
                                    Size:<span>large</span>
                                  </p>
                                  <p>
                                    color:<span>brown</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="price">$248.66</td>
                          <td>
                            {/* Start: Product Quantity */}
                            <div className="quantity product-cart__quantity">
                              <input
                                type="button"
                                defaultValue="-"
                                className="qty-minus bttn bttn-left wh-36"
                              />
                              <input
                                type="number"
                                defaultValue={1}
                                className="qty qh-36 input"
                              />
                              <input
                                type="button"
                                defaultValue="+"
                                className="qty-plus bttn bttn-right wh-36"
                              />
                            </div>
                            {/* End: Product Quantity */}
                          </td>
                          <td className="text-center subtotal">$5.11</td>
                          <td className="actions">
                            <button
                              type="button"
                              className="action-btn float-right"
                            >
                              <i className="las la-trash-alt" />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan={2}>
                            <div className="product-cart__cupon">
                              <input
                                type="text"
                                className="form-control  col-xl-4 col-md-6 "
                                placeholder="Coupon code"
                              />
                              <a
                                href="#"
                                className="btn btn-primary col-xl-3 col-lg-4 space-nowrap"
                              >
                                Apply Coupon
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                    {/* End: table */}
                  </div>
                </div>
                {/* End: .product-cart*/}
              </div>
              {/* End: .cus-xl-9 */}
              <div className="cus-xl-3 col-md-8  ">
                <div className="card order-summery bg-normal p-sm-25 p-15 order-summery--width ">
                  <div className="card-header border-bottom-0 p-0 pb-25">
                    <h5 className="fw-500">Order Summary</h5>
                  </div>
                  <div className="card-body bg-white px-sm-25 px-20">
                    <div className="total">
                      <div className="subtotalTotal">
                        Subtotal:
                        <span>$1,690.26</span>
                      </div>
                      <div className="taxes">
                        discount:
                        <span>-$126.30</span>
                      </div>
                      <div className="shipping">
                        Shipping charge:
                        <span>$46.30</span>
                      </div>
                    </div>
                    <div className="select-cupon position-relative">
                      <span className="percent">
                        <img
                          src="img/svg/coupon.svg"
                          alt="svg"
                          className="svg"
                        />
                      </span>
                      <select
                        className="js-example-basic-single js-states form-control"
                        id="cupon"
                      >
                        <option value={1}>HROJSF</option>
                        <option value={2}>RYZZWK</option>
                        <option value={3}>CLMVBG</option>
                        <option value={4}>RQAEAD</option>
                        <option value={5}>DFINSX</option>
                      </select>
                    </div>
                    <div className="promo-code">
                      <form>
                        <label htmlFor="exampleInputEmail1">promo code</label>
                        <div className="d-flex align-items-center">
                          <input
                            id="exampleInputEmail1"
                            type="text"
                            className="form-control"
                          />
                          <a href="#" className="btn">
                            apply
                          </a>
                        </div>
                      </form>
                    </div>
                    <div className="total-money d-flex justify-content-between">
                      <h6>Total :</h6>
                      <h5>$1738.60</h5>
                    </div>
                    <a
                      href="checkout.html"
                      className="checkout btn-secondary content-center w-100 btn-lg mt-20"
                    >
                      {" "}
                      procdces to checkout
                      <i className="las la-arrow-right" />
                    </a>
                  </div>
                </div>
                {/* End: .order-summery*/}
              </div>
              {/* End: .cus-xl-9 */}
            </div>
          </div>
          {/* End: .global-shadow */}
        </div>
      </div>
      <footer className="footer-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="footer-copyright">
                <p>
                  2020 @<a href="#">Aazztech</a>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-menu text-right">
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
              {/* ends: .Footer Menu */}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};
export default Cart;
