import { useEffect, useState } from "react";
import Notiflix from "notiflix";
import { useParams } from "react-router-dom";


import Breadcrumb from "../components/Breakcumb";
import Product from "../components/Product";
import Filters from "../components/Filters";
import { useRef } from "react";

function Category(props) {

    const [dataProduct, setdataProduct] = useState({});
    const [listProduct, setListProduct] = useState([]);
    const _isMounted = useRef(false)
    const params = useParams()


    const fetchProduct = async () => {
      Notiflix.Loading.standard("Đang tải...");
      const res = await fetch(
        import.meta.env.REACT_APP_API_ENDPOINT + "product/getProductsByCategory/" + params.id
      );
      const data = await res.json();
      if (data) {
        Notiflix.Loading.remove();
      }

      _isMounted.current && setListProduct(data);
  
    };
    useEffect(()=>{
      _isMounted.current = true;
      return  () => {
        _isMounted.current = false
      }
    },[])
  
    useEffect(() => {
      fetchProduct();
    }, [params.id]);


  return (
    <div className="contents">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="shop-breadcrumb">
              <div className="breadcrumb-main">
                <h4 className="text-capitalize breadcrumb-title">
                 Sản phẩm theo loại
                </h4>
              </div>
              <Breadcrumb />
            </div>
          </div>
        </div>
      </div>
      <div className="products_page product_page--grid mb-30">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="columns-1 col-lg-4 col-md-5 col-sm-8 order-md-0 order-1">
             <Filters/>
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
export default Category;
