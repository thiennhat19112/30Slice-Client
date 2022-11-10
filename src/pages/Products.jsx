import { useEffect, useState } from "react";
import Notiflix from "notiflix";

import Breadcrumb from "../components/Breakcumb";
import Product from "../components/Product";
import { useRef } from "react";

function Products(props) {
  const [listCate, setCate] = useState([]);
  const [dataProduct, setdataProduct] = useState({});
  const [listProduct, setListProduct] = useState([]);
  const _isMounted = useRef(false)

  const fetchCate = async () => {
    Notiflix.Loading.standard("Đang tải...");
    const res = await fetch(
      process.env.REACT_APP_API_ENDPOINT + "category/getAllCategories"
    );
    const data = await res.json();
    if (data) {
      Notiflix.Loading.remove();
    }
    _isMounted.current && setCate(data);
  };
  const fetchProduct = async () => {
    Notiflix.Loading.standard("Đang tải...");
    const res = await fetch(
      process.env.REACT_APP_API_ENDPOINT + "product/getProducts?page=1&limit=12"
    );
    const data = await res.json();
    if (data) {
      Notiflix.Loading.remove();
    }
    _isMounted.current && setdataProduct(data);
    _isMounted.current && setListProduct(data.products);

  };
  useEffect(()=>{
    _isMounted.current = true;
    return  () => {
      _isMounted.current = false
    }
  },[])

  useEffect(() => {
    fetchCate();
    fetchProduct();
  }, []);


  return (
    <div className="contents">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="shop-breadcrumb">
              <div className="breadcrumb-main">
                <h4 className="text-capitalize breadcrumb-title">
                  Tất cả sản phẩm
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="products_page product_page--grid mb-30">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="columns-1 col-lg-4 col-md-5 col-sm-8 order-md-0 order-1">
              <div className="widget">
                <div className="widget-header-title px-20 py-15 border-bottom">
                  <h6 className="d-flex align-content-center fw-500">
                    <span data-feather="sliders" /> Filters
                  </h6>
                </div>
                <div className="category_sidebar">
                  {/* Start: Aside */}
                  <aside className="product-sidebar-widget mb-30">
                    {/* Title */}
                    <div className="widget_title mb-20">
                      <h6>Price Range</h6>
                    </div>
                    {/* Title */}
                    {/* Body */}
                    <div className="card border-0">
                      <div className="product-price-ranges">
                        <div id="price-range">
                          <div className="section price">
                            <div className="price-slider" />
                            <p className="price-value" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Body */}
                  </aside>
                  {/* End: Aside */}

                  {/* Start: Aside */}
                  <aside className="product-sidebar-widget mb-30">
                    {/* Title */}
                    <div className="widget_title mb-20">
                      <h6>Loại sản phẩm (số bên phải lấy tạm ordinal)</h6>
                    </div>
                    {/* Title */}
                    {/* Body */}
                    <div className="card border-0">
                      <div className="product-brands">
                        <ul>
                          {listCate.map((item, index) => (
                            <li key={index}>
                              <div className="checkbox-theme-default custom-checkbox ">
                                <input
                                  className="checkbox"
                                  type="checkbox"
                                  id={`check-${item._id}`}
                                />
                                <label htmlFor={`check-${item._id}`}>
                                  <span className="checkbox-text">
                                    {item.Name}
                                    <span className="item-numbers">
                                      {item.Ordinal}
                                    </span>
                                  </span>
                                </label>
                              </div>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-2">
                          <a href="#" className=" fs-13 fw-500 text-capitalize">
                            Xem thêm
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Body */}
                  </aside>
                  {/* End: Aside */}

                  {/* Start: Aside */}
                  <aside className="product-sidebar-widget mb-30">
                    {/* Title */}
                    <div className="widget_title mb-20">
                      <h6>Category</h6>
                    </div>
                    {/* Title */}
                    {/* Body */}
                    <div className="card border-0">
                      <div className="product-category">
                        <ul>
                          <li>
                            <div className="w-100">
                              <span className="fs-14 color-gray">
                                Accessories
                                <span className="item-numbers">25</span>
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="w-100">
                              <span className="fs-14 color-gray">
                                Appliances
                                <span className="item-numbers">54</span>
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="w-100">
                              <span className="fs-14 color-gray">
                                Bags<span className="item-numbers">78</span>
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="w-100">
                              <span className="fs-14 color-gray">
                                Electronic
                                <span className="item-numbers">42</span>
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="w-100">
                              <span className="fs-14 color-gray">
                                Entertainment
                                <span className="item-numbers">35</span>
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="w-100">
                              <span className="fs-14 color-gray">
                                Induction
                                <span className="item-numbers">64</span>
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="w-100">
                              <span className="fs-14 color-gray">
                                Mobile phone
                                <span className="item-numbers">92</span>
                              </span>
                            </div>
                          </li>
                        </ul>
                        <div className="mt-2">
                          <a href="#" className=" fs-13 fw-500 text-capitalize">
                            see more
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Body */}
                  </aside>
                  {/* End: Aside */}
                  {/* Start: Aside */}
                  <aside className="product-sidebar-widget mb-30">
                    {/* Title */}
                    <div className="widget_title mb-20">
                      <h6>Brands</h6>
                    </div>
                    {/* Title */}
                    {/* Body */}
                    <div className="card border-0">
                      <div className="product-brands">
                        <ul>
                          <li>
                            <div className="checkbox-theme-default custom-checkbox ">
                              <input
                                className="checkbox"
                                type="checkbox"
                                id="check-1"
                              />
                              <label htmlFor="check-1">
                                <span className="checkbox-text">
                                  Appliances
                                  <span className="item-numbers">25</span>
                                </span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="checkbox-theme-default custom-checkbox ">
                              <input
                                className="checkbox"
                                type="checkbox"
                                id="check-2"
                              />
                              <label htmlFor="check-2">
                                <span className="checkbox-text">
                                  Bags
                                  <span className="item-numbers">54</span>
                                </span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="checkbox-theme-default custom-checkbox ">
                              <input
                                className="checkbox"
                                type="checkbox"
                                id="check-3"
                              />
                              <label htmlFor="check-3">
                                <span className="checkbox-text">
                                  Electronic
                                  <span className="item-numbers">78</span>
                                </span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="checkbox-theme-default custom-checkbox ">
                              <input
                                className="checkbox"
                                type="checkbox"
                                id="check-4"
                              />
                              <label htmlFor="check-4">
                                <span className="checkbox-text">
                                  Entertainment
                                  <span className="item-numbers">42</span>
                                </span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="checkbox-theme-default custom-checkbox ">
                              <input
                                className="checkbox"
                                type="checkbox"
                                id="check-5"
                              />
                              <label htmlFor="check-5">
                                <span className="checkbox-text">
                                  Induction
                                  <span className="item-numbers">35</span>
                                </span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="checkbox-theme-default custom-checkbox ">
                              <input
                                className="checkbox"
                                type="checkbox"
                                id="check-6"
                              />
                              <label htmlFor="check-6">
                                <span className="checkbox-text">
                                  Laptops
                                  <span className="item-numbers">64</span>
                                </span>
                              </label>
                            </div>
                          </li>
                        </ul>
                        <div className="mt-2">
                          <a href="#" className=" fs-13 fw-500 text-capitalize">
                            see more
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Body */}
                  </aside>
                  {/* End: Aside */}
                  {/* Start: Aside */}
                  <aside className="product-sidebar-widget mb-30">
                    {/* Title */}
                    <div className="widget_title mb-20">
                      <h6>Đánh giá</h6>
                    </div>
                    {/* Title */}
                    {/* Body */}
                    <div className="card border-0">
                      <div className="product-ratings">
                        <ul>
                          <li>
                            <div className="checkbox-theme-default custom-checkbox ">
                              <input
                                className="checkbox"
                                type="checkbox"
                                id="rating-1"
                              />
                              <label htmlFor="rating-1">
                                <span className="stars-rating d-flex align-items-center">
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="checkbox-text">
                                    and up
                                    <span className="item-numbers">42</span>
                                  </span>
                                </span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="checkbox-theme-default custom-checkbox ">
                              <input
                                className="checkbox"
                                type="checkbox"
                                id="rating-3"
                              />
                              <label htmlFor="rating-3">
                                <span className="stars-rating d-flex align-items-center">
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star inactive" />
                                  <span className="checkbox-text">
                                    and up
                                    <span className="item-numbers">54</span>
                                  </span>
                                </span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="checkbox-theme-default custom-checkbox ">
                              <input
                                className="checkbox"
                                type="checkbox"
                                id="rating-4"
                              />
                              <label htmlFor="rating-4">
                                <span className="stars-rating d-flex align-items-center">
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star inactive" />
                                  <span className="star-icon las la-star inactive" />
                                  <span className="checkbox-text">
                                    and up
                                    <span className="item-numbers">78</span>
                                  </span>
                                </span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="checkbox-theme-default custom-checkbox ">
                              <input
                                className="checkbox"
                                type="checkbox"
                                id="rating-5"
                              />
                              <label htmlFor="rating-5">
                                <span className="stars-rating d-flex align-items-center">
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star inactive" />
                                  <span className="star-icon las la-star inactive" />
                                  <span className="star-icon las la-star inactive" />
                                  <span className="checkbox-text">
                                    and up
                                    <span className="item-numbers">42</span>
                                  </span>
                                </span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="checkbox-theme-default custom-checkbox ">
                              <input
                                className="checkbox"
                                type="checkbox"
                                id="rating-6"
                              />
                              <label htmlFor="rating-6">
                                <span className="stars-rating d-flex align-items-center">
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star inactive" />
                                  <span className="star-icon las la-star inactive" />
                                  <span className="star-icon las la-star inactive" />
                                  <span className="star-icon las la-star inactive" />
                                  <span className="checkbox-text">
                                    and up
                                    <span className="item-numbers">35</span>
                                  </span>
                                </span>
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Body */}
                  </aside>
                  {/* End: Aside */}
                </div>
              </div>
              {/* End: .widget */}
            </div>
            {/* End: .columns-1 */}
            <div className="columns-2 col-lg-8 col-md-7 col-sm-8 order-md-1 order-0">
              {/* Start: Top Bar */}
              <div className="shop_products_top_filter">
                <div className="project-top-wrapper d-flex flex-wrap align-items-center">
                  <div className="project-top-left d-flex flex-wrap align-items-center">
                    <div className="project-search shop-search  global-shadow ">
                      <form
                        action="/"
                        className="d-flex align-items-center user-member__form"
                      >
                        <span data-feather="search" />
                        <input
                          className="form-control mr-sm-2 border-0 box-shadow-none"
                          type="search"
                          placeholder="Tìm kiếm"
                          aria-label="Search"
                        />
                      </form>
                    </div>
                    <span className="project-result-showing fs-14 color-gray ml-xl-25 mr-xl-0 text-center mt-lg-0 mt-20">
                      Hiển thị
                      <span>1–8</span> trong <span>86</span>
                      kết quả
                    </span>
                  </div>
                  <div className="project-top-right d-flex flex-wrap align-items-center">
                    <div className="project-category flex-wrap d-flex align-items-center">
                      <p className="fs-14 color-gray text-capitalize">
                        Xếp theo:
                      </p>
                      <div className="project-tap b-light">
                        <ul className="nav px-1 " id="ap-tab" role="tablist">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              id="ap-overview-tab"
                              data-toggle="pill"
                              href="#ap-overview"
                              role="tab"
                              aria-controls="ap-overview"
                              aria-selected="true"
                            >
                              Đánh giá
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="timeline-tab"
                              data-toggle="pill"
                              href="#timeline"
                              role="tab"
                              aria-controls="timeline"
                              aria-selected="false"
                            >
                              Phổ biến
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="activity-tab"
                              data-toggle="pill"
                              href="#activity"
                              role="tab"
                              aria-controls="activity"
                              aria-selected="false"
                            >
                              Mới nhất
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="draft-tab"
                              data-toggle="pill"
                              href="#draft"
                              role="tab"
                              aria-controls="draft"
                              aria-selected="false"
                            >
                              Giá
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="project-icon-selected content-center mt-lg-0 mt-25">
                      <div className="listing-social-link pb-lg-0 pb-xs-2">
                        <div className="icon-list-social d-flex">
                          <a
                            className="icon-list-social__link rounded-circle icon-list-social__style justify-content-center active ml-xl-20 mr-20"
                            href="#"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-grid"
                            >
                              <rect x={3} y={3} width={7} height={7} />
                              <rect x={14} y={3} width={7} height={7} />
                              <rect x={14} y={14} width={7} height={7} />
                              <rect x={3} y={14} width={7} height={7} />
                            </svg>
                          </a>
                          <a
                            className="icon-list-social__link rounded-circle icon-list-social__style justify-content-center  "
                            href="product-list.html"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-list"
                            >
                              <line x1={8} y1={6} x2={21} y2={6} />
                              <line x1={8} y1={12} x2={21} y2={12} />
                              <line x1={8} y1={18} x2={21} y2={18} />
                              <line x1={3} y1={6} x2="3.01" y2={6} />
                              <line x1={3} y1={12} x2="3.01" y2={12} />
                              <line x1={3} y1={18} x2="3.01" y2={18} />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End: Top Bar */}
              {/* Start: .product-list */}
              <div className="tab-content mt-25" id="ap-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="ap-overview"
                  role="tabpanel"
                  aria-labelledby="ap-overview-tab"
                >
                  {/* Start: Shop Item */}
                  <div className="row product-page-list justify-content-center">
                    {listProduct && listProduct.map((item, index) => {
                      return <Product prod={item} key={index} />;
                    })}
                  </div>
                  {/* End: Shop Item */}
                </div>
                <div
                  className="tab-pane fade"
                  id="timeline"
                  role="tabpanel"
                  aria-labelledby="timeline-tab"
                >
                  <div className="row product-page-list">
                    <div className="cus-xl-3 col-lg-6 col-md-11 col-12 mb-30 px-10">
                      <div className="card product product--grid">
                        <div className="h-100">
                          <div className="product-item">
                            <div className="product-item__image">
                              <span className="like-icon">
                                <button
                                  type="button"
                                  className="content-center"
                                >
                                  <i className="lar la-heart icon" />
                                </button>
                              </span>
                              <a href="#">
                                <img
                                  className="card-img-top img-fluid"
                                  src="img/boss-chair.png"
                                  alt="digital-chair"
                                />
                              </a>
                            </div>
                            <div className="card-body px-20 pb-25 pt-20">
                              <div className="product-item__body text-capitalize">
                                <a href="product-details.html">
                                  <h6 className="card-title">
                                    Montes scelerisque
                                  </h6>
                                </a>
                                <div className="d-flex align-items-center mb-10 flex-wrap">
                                  <span className="product-desc-price">
                                    $200.00
                                  </span>
                                  <span className="product-price">$100.00</span>
                                  <span className="product-discount">
                                    50% Off
                                  </span>
                                </div>
                              </div>
                              <div className="product-item__footer">
                                <div className="stars-rating d-flex align-items-center flex-wrap">
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star-half-alt active" />
                                  <span className="stars-rating__point">
                                    4.9
                                  </span>
                                  <span className="stars-rating__review">
                                    <span>778</span> Reviews
                                  </span>
                                </div>
                              </div>
                              <div className="product-item__button d-flex mt-20 flex-wrap">
                                <button className="btn btn-default btn-squared btn-outline-light px-15 ">
                                  <span data-feather="shopping-bag" />
                                  Add To Cart
                                </button>
                                <button className="btn btn-primary btn-default btn-squared border-0 ">
                                  buy now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cus-xl-3 col-lg-6 col-md-11 col-12 mb-30 px-10">
                      <div className="card product product--grid">
                        <div className="h-100">
                          <div className="product-item">
                            <div className="product-item__image">
                              <span className="like-icon">
                                <button
                                  type="button"
                                  className="content-center"
                                >
                                  <i className="lar la-heart icon" />
                                </button>
                              </span>
                              <a href="#">
                                <img
                                  className="card-img-top img-fluid"
                                  src="img/only-juss.png"
                                  alt="digital-chair"
                                />
                              </a>
                            </div>
                            <div className="card-body px-20 pb-25 pt-20">
                              <div className="product-item__body text-capitalize">
                                <a href="product-details.html">
                                  <h6 className="card-title">
                                    Leo sodales varius
                                  </h6>
                                </a>
                                <div className="d-flex align-items-center mb-10 flex-wrap">
                                  <span className="product-desc-price">
                                    $200.00
                                  </span>
                                  <span className="product-price">$100.00</span>
                                  <span className="product-discount">
                                    50% Off
                                  </span>
                                </div>
                              </div>
                              <div className="product-item__footer">
                                <div className="stars-rating d-flex align-items-center flex-wrap">
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star-half-alt active" />
                                  <span className="stars-rating__point">
                                    4.9
                                  </span>
                                  <span className="stars-rating__review">
                                    <span>778</span> Reviews
                                  </span>
                                </div>
                              </div>
                              <div className="product-item__button d-flex mt-20 flex-wrap">
                                <button className="btn btn-default btn-squared btn-outline-light px-15 ">
                                  <span data-feather="shopping-bag" />
                                  Add To Cart
                                </button>
                                <button className="btn btn-primary btn-default btn-squared border-0 ">
                                  buy now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cus-xl-3 col-lg-6 col-md-11 col-12 mb-30 px-10">
                      <div className="card product product--grid">
                        <div className="h-100">
                          <div className="product-item">
                            <div className="product-item__image">
                              <span className="like-icon">
                                <button
                                  type="button"
                                  className="content-center"
                                >
                                  <i className="lar la-heart icon" />
                                </button>
                              </span>
                              <a href="#">
                                <img
                                  className="card-img-top img-fluid"
                                  src="img/flip-chair.png"
                                  alt="digital-chair"
                                />
                              </a>
                            </div>
                            <div className="card-body px-20 pb-25 pt-20">
                              <div className="product-item__body text-capitalize">
                                <a href="product-details.html">
                                  <h6 className="card-title">
                                    Hanging lamp berlingo
                                  </h6>
                                </a>
                                <div className="d-flex align-items-center mb-10 flex-wrap">
                                  <span className="product-desc-price">
                                    $200.00
                                  </span>
                                  <span className="product-price">$100.00</span>
                                  <span className="product-discount">
                                    50% Off
                                  </span>
                                </div>
                              </div>
                              <div className="product-item__footer">
                                <div className="stars-rating d-flex align-items-center flex-wrap">
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star-half-alt active" />
                                  <span className="stars-rating__point">
                                    4.9
                                  </span>
                                  <span className="stars-rating__review">
                                    <span>778</span> Reviews
                                  </span>
                                </div>
                              </div>
                              <div className="product-item__button d-flex mt-20 flex-wrap">
                                <button className="btn btn-default btn-squared btn-outline-light px-15 ">
                                  <span data-feather="shopping-bag" />
                                  Add To Cart
                                </button>
                                <button className="btn btn-primary btn-default btn-squared border-0 ">
                                  buy now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cus-xl-3 col-lg-6 col-md-11 col-12 mb-30 px-10">
                      <div className="card product product--grid">
                        <div className="h-100">
                          <div className="product-item">
                            <div className="product-item__image">
                              <span className="like-icon">
                                <button
                                  type="button"
                                  className="content-center"
                                >
                                  <i className="lar la-heart icon" />
                                </button>
                              </span>
                              <a href="#">
                                <img
                                  className="card-img-top img-fluid"
                                  src="img/chair.png"
                                  alt="digital-chair"
                                />
                              </a>
                            </div>
                            <div className="card-body px-20 pb-25 pt-20">
                              <div className="product-item__body text-capitalize">
                                <a href="product-details.html">
                                  <h6 className="card-title">
                                    commodo adipiscing
                                  </h6>
                                </a>
                                <div className="d-flex align-items-center mb-10 flex-wrap">
                                  <span className="product-desc-price">
                                    $200.00
                                  </span>
                                  <span className="product-price">$100.00</span>
                                  <span className="product-discount">
                                    50% Off
                                  </span>
                                </div>
                              </div>
                              <div className="product-item__footer">
                                <div className="stars-rating d-flex align-items-center flex-wrap">
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star-half-alt active" />
                                  <span className="stars-rating__point">
                                    4.9
                                  </span>
                                  <span className="stars-rating__review">
                                    <span>778</span> Reviews
                                  </span>
                                </div>
                              </div>
                              <div className="product-item__button d-flex mt-20 flex-wrap">
                                <button className="btn btn-default btn-squared btn-outline-light px-15 ">
                                  <span data-feather="shopping-bag" />
                                  Add To Cart
                                </button>
                                <button className="btn btn-primary btn-default btn-squared border-0 ">
                                  buy now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="activity"
                  role="tabpanel"
                  aria-labelledby="activity-tab"
                >
                  <div className="row product-page-list">
                    <div className="cus-xl-3 col-lg-6 col-md-11 col-12 mb-30 px-10">
                      <div className="card product product--grid">
                        <div className="h-100">
                          <div className="product-item">
                            <div className="product-item__image">
                              <span className="like-icon">
                                <button
                                  type="button"
                                  className="content-center"
                                >
                                  <i className="lar la-heart icon" />
                                </button>
                              </span>
                              <a href="#">
                                <img
                                  className="card-img-top img-fluid"
                                  src="img/plate.png"
                                  alt="digital-chair"
                                />
                              </a>
                            </div>
                            <div className="card-body px-20 pb-25 pt-20">
                              <div className="product-item__body text-capitalize">
                                <a href="product-details.html">
                                  <h6 className="card-title">
                                    Leo sodales varius
                                  </h6>
                                </a>
                                <div className="d-flex align-items-center mb-10 flex-wrap">
                                  <span className="product-desc-price">
                                    $200.00
                                  </span>
                                  <span className="product-price">$100.00</span>
                                  <span className="product-discount">
                                    50% Off
                                  </span>
                                </div>
                              </div>
                              <div className="product-item__footer">
                                <div className="stars-rating d-flex align-items-center flex-wrap">
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star-half-alt active" />
                                  <span className="stars-rating__point">
                                    4.9
                                  </span>
                                  <span className="stars-rating__review">
                                    <span>778</span> Reviews
                                  </span>
                                </div>
                              </div>
                              <div className="product-item__button d-flex mt-20 flex-wrap">
                                <button className="btn btn-default btn-squared btn-outline-light px-15 ">
                                  <span data-feather="shopping-bag" />
                                  Add To Cart
                                </button>
                                <button className="btn btn-primary btn-default btn-squared border-0 ">
                                  buy now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cus-xl-3 col-lg-6 col-md-11 col-12 mb-30 px-10">
                      <div className="card product product--grid">
                        <div className="h-100">
                          <div className="product-item">
                            <div className="product-item__image">
                              <span className="like-icon">
                                <button
                                  type="button"
                                  className="content-center"
                                >
                                  <i className="lar la-heart icon" />
                                </button>
                              </span>
                              <a href="#">
                                <img
                                  className="card-img-top img-fluid"
                                  src="img/chair3.png"
                                  alt="digital-chair"
                                />
                              </a>
                            </div>
                            <div className="card-body px-20 pb-25 pt-20">
                              <div className="product-item__body text-capitalize">
                                <a href="product-details.html">
                                  <h6 className="card-title">
                                    Hanging lamp berlingo
                                  </h6>
                                </a>
                                <div className="d-flex align-items-center mb-10 flex-wrap">
                                  <span className="product-desc-price">
                                    $200.00
                                  </span>
                                  <span className="product-price">$100.00</span>
                                  <span className="product-discount">
                                    50% Off
                                  </span>
                                </div>
                              </div>
                              <div className="product-item__footer">
                                <div className="stars-rating d-flex align-items-center flex-wrap">
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star-half-alt active" />
                                  <span className="stars-rating__point">
                                    4.9
                                  </span>
                                  <span className="stars-rating__review">
                                    <span>778</span> Reviews
                                  </span>
                                </div>
                              </div>
                              <div className="product-item__button d-flex mt-20 flex-wrap">
                                <button className="btn btn-default btn-squared btn-outline-light px-15 ">
                                  <span data-feather="shopping-bag" />
                                  Add To Cart
                                </button>
                                <button className="btn btn-primary btn-default btn-squared border-0 ">
                                  buy now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cus-xl-3 col-lg-6 col-md-11 col-12 mb-30 px-10">
                      <div className="card product product--grid">
                        <div className="h-100">
                          <div className="product-item">
                            <div className="product-item__image">
                              <span className="like-icon">
                                <button
                                  type="button"
                                  className="content-center"
                                >
                                  <i className="lar la-heart icon" />
                                </button>
                              </span>
                              <a href="#">
                                <img
                                  className="card-img-top img-fluid"
                                  src="img/juse.png"
                                  alt="digital-chair"
                                />
                              </a>
                            </div>
                            <div className="card-body px-20 pb-25 pt-20">
                              <div className="product-item__body text-capitalize">
                                <a href="product-details.html">
                                  <h6 className="card-title">
                                    commodo adipiscing
                                  </h6>
                                </a>
                                <div className="d-flex align-items-center mb-10 flex-wrap">
                                  <span className="product-desc-price">
                                    $200.00
                                  </span>
                                  <span className="product-price">$100.00</span>
                                  <span className="product-discount">
                                    50% Off
                                  </span>
                                </div>
                              </div>
                              <div className="product-item__footer">
                                <div className="stars-rating d-flex align-items-center flex-wrap">
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star-half-alt active" />
                                  <span className="stars-rating__point">
                                    4.9
                                  </span>
                                  <span className="stars-rating__review">
                                    <span>778</span> Reviews
                                  </span>
                                </div>
                              </div>
                              <div className="product-item__button d-flex mt-20 flex-wrap">
                                <button className="btn btn-default btn-squared btn-outline-light px-15 ">
                                  <span data-feather="shopping-bag" />
                                  Add To Cart
                                </button>
                                <button className="btn btn-primary btn-default btn-squared border-0 ">
                                  buy now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cus-xl-3 col-lg-6 col-md-11 col-12 mb-30 px-10">
                      <div className="card product product--grid">
                        <div className="h-100">
                          <div className="product-item">
                            <div className="product-item__image">
                              <span className="like-icon">
                                <button
                                  type="button"
                                  className="content-center"
                                >
                                  <i className="lar la-heart icon" />
                                </button>
                              </span>
                              <a href="#">
                                <img
                                  className="card-img-top img-fluid"
                                  src="img/coffe-glass.png"
                                  alt="digital-chair"
                                />
                              </a>
                            </div>
                            <div className="card-body px-20 pb-25 pt-20">
                              <div className="product-item__body text-capitalize">
                                <a href="product-details.html">
                                  <h6 className="card-title">
                                    Leo sodales varius
                                  </h6>
                                </a>
                                <div className="d-flex align-items-center mb-10 flex-wrap">
                                  <span className="product-desc-price">
                                    $200.00
                                  </span>
                                  <span className="product-price">$100.00</span>
                                  <span className="product-discount">
                                    50% Off
                                  </span>
                                </div>
                              </div>
                              <div className="product-item__footer">
                                <div className="stars-rating d-flex align-items-center flex-wrap">
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star-half-alt active" />
                                  <span className="stars-rating__point">
                                    4.9
                                  </span>
                                  <span className="stars-rating__review">
                                    <span>778</span> Reviews
                                  </span>
                                </div>
                              </div>
                              <div className="product-item__button d-flex mt-20 flex-wrap">
                                <button className="btn btn-default btn-squared btn-outline-light px-15 ">
                                  <span data-feather="shopping-bag" />
                                  Add To Cart
                                </button>
                                <button className="btn btn-primary btn-default btn-squared border-0 ">
                                  buy now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="draft"
                  role="tabpanel"
                  aria-labelledby="draft-tab"
                >
                  <div className="row product-page-list">
                    <div className="cus-xl-3 col-lg-6 col-md-11 col-12 mb-30 px-10">
                      <div className="card product product--grid">
                        <div className="h-100">
                          <div className="product-item">
                            <div className="product-item__image">
                              <span className="like-icon">
                                <button
                                  type="button"
                                  className="content-center"
                                >
                                  <i className="lar la-heart icon" />
                                </button>
                              </span>
                              <a href="#">
                                <img
                                  className="card-img-top img-fluid"
                                  src="img/plate.png"
                                  alt="digital-chair"
                                />
                              </a>
                            </div>
                            <div className="card-body px-20 pb-25 pt-20">
                              <div className="product-item__body text-capitalize">
                                <a href="product-details.html">
                                  <h6 className="card-title">
                                    Leo sodales varius
                                  </h6>
                                </a>
                                <div className="d-flex align-items-center mb-10 flex-wrap">
                                  <span className="product-desc-price">
                                    $200.00
                                  </span>
                                  <span className="product-price">$100.00</span>
                                  <span className="product-discount">
                                    50% Off
                                  </span>
                                </div>
                              </div>
                              <div className="product-item__footer">
                                <div className="stars-rating d-flex align-items-center flex-wrap">
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star-half-alt active" />
                                  <span className="stars-rating__point">
                                    4.9
                                  </span>
                                  <span className="stars-rating__review">
                                    <span>778</span> Reviews
                                  </span>
                                </div>
                              </div>
                              <div className="product-item__button d-flex mt-20 flex-wrap">
                                <button className="btn btn-default btn-squared btn-outline-light px-15 ">
                                  <span data-feather="shopping-bag" />
                                  Add To Cart
                                </button>
                                <button className="btn btn-primary btn-default btn-squared border-0 ">
                                  buy now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cus-xl-3 col-lg-6 col-md-11 col-12 mb-30 px-10">
                      <div className="card product product--grid">
                        <div className="h-100">
                          <div className="product-item">
                            <div className="product-item__image">
                              <span className="like-icon">
                                <button
                                  type="button"
                                  className="content-center"
                                >
                                  <i className="lar la-heart icon" />
                                </button>
                              </span>
                              <a href="#">
                                <img
                                  className="card-img-top img-fluid"
                                  src="img/chair3.png"
                                  alt="digital-chair"
                                />
                              </a>
                            </div>
                            <div className="card-body px-20 pb-25 pt-20">
                              <div className="product-item__body text-capitalize">
                                <a href="product-details.html">
                                  <h6 className="card-title">
                                    Hanging lamp berlingo
                                  </h6>
                                </a>
                                <div className="d-flex align-items-center mb-10 flex-wrap">
                                  <span className="product-desc-price">
                                    $200.00
                                  </span>
                                  <span className="product-price">$100.00</span>
                                  <span className="product-discount">
                                    50% Off
                                  </span>
                                </div>
                              </div>
                              <div className="product-item__footer">
                                <div className="stars-rating d-flex align-items-center flex-wrap">
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star-half-alt active" />
                                  <span className="stars-rating__point">
                                    4.9
                                  </span>
                                  <span className="stars-rating__review">
                                    <span>778</span> Reviews
                                  </span>
                                </div>
                              </div>
                              <div className="product-item__button d-flex mt-20 flex-wrap">
                                <button className="btn btn-default btn-squared btn-outline-light px-15 ">
                                  <span data-feather="shopping-bag" />
                                  Add To Cart
                                </button>
                                <button className="btn btn-primary btn-default btn-squared border-0 ">
                                  buy now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cus-xl-3 col-lg-6 col-md-11 col-12 mb-30 px-10">
                      <div className="card product product--grid">
                        <div className="h-100">
                          <div className="product-item">
                            <div className="product-item__image">
                              <span className="like-icon">
                                <button
                                  type="button"
                                  className="content-center"
                                >
                                  <i className="lar la-heart icon" />
                                </button>
                              </span>
                              <a href="#">
                                <img
                                  className="card-img-top img-fluid"
                                  src="img/juse.png"
                                  alt="digital-chair"
                                />
                              </a>
                            </div>
                            <div className="card-body px-20 pb-25 pt-20">
                              <div className="product-item__body text-capitalize">
                                <a href="product-details.html">
                                  <h6 className="card-title">
                                    commodo adipiscing
                                  </h6>
                                </a>
                                <div className="d-flex align-items-center mb-10 flex-wrap">
                                  <span className="product-desc-price">
                                    $200.00
                                  </span>
                                  <span className="product-price">$100.00</span>
                                  <span className="product-discount">
                                    50% Off
                                  </span>
                                </div>
                              </div>
                              <div className="product-item__footer">
                                <div className="stars-rating d-flex align-items-center flex-wrap">
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star-half-alt active" />
                                  <span className="stars-rating__point">
                                    4.9
                                  </span>
                                  <span className="stars-rating__review">
                                    <span>778</span> Reviews
                                  </span>
                                </div>
                              </div>
                              <div className="product-item__button d-flex mt-20 flex-wrap">
                                <button className="btn btn-default btn-squared btn-outline-light px-15 ">
                                  <span data-feather="shopping-bag" />
                                  Add To Cart
                                </button>
                                <button className="btn btn-primary btn-default btn-squared border-0 ">
                                  buy now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cus-xl-3 col-lg-6 col-md-11 col-12 mb-30 px-10">
                      <div className="card product product--grid">
                        <div className="h-100">
                          <div className="product-item">
                            <div className="product-item__image">
                              <span className="like-icon">
                                <button
                                  type="button"
                                  className="content-center"
                                >
                                  <i className="lar la-heart icon" />
                                </button>
                              </span>
                              <a href="#">
                                <img
                                  className="card-img-top img-fluid"
                                  src="img/coffe-glass.png"
                                  alt="digital-chair"
                                />
                              </a>
                            </div>
                            <div className="card-body px-20 pb-25 pt-20">
                              <div className="product-item__body text-capitalize">
                                <a href="product-details.html">
                                  <h6 className="card-title">
                                    Leo sodales varius
                                  </h6>
                                </a>
                                <div className="d-flex align-items-center mb-10 flex-wrap">
                                  <span className="product-desc-price">
                                    $200.00
                                  </span>
                                  <span className="product-price">$100.00</span>
                                  <span className="product-discount">
                                    50% Off
                                  </span>
                                </div>
                              </div>
                              <div className="product-item__footer">
                                <div className="stars-rating d-flex align-items-center flex-wrap">
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star active" />
                                  <span className="star-icon las la-star-half-alt active" />
                                  <span className="stars-rating__point">
                                    4.9
                                  </span>
                                  <span className="stars-rating__review">
                                    <span>778</span> Reviews
                                  </span>
                                </div>
                              </div>
                              <div className="product-item__button d-flex mt-20 flex-wrap">
                                <button className="btn btn-default btn-squared btn-outline-light px-15 ">
                                  <span data-feather="shopping-bag" />
                                  Add To Cart
                                </button>
                                <button className="btn btn-primary btn-default btn-squared border-0 ">
                                  buy now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End: .product-list */}
            </div>
            {/* End: .columns-2 */}
          </div>
        </div>
      </div>
      {/* End: .products */}
    </div>
  );
}
export default Products;
