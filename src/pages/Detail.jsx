import { useParams } from "react-router-dom";
import Breadcrumb from "../components/Breakcumb";
import Notiflix from "notiflix";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import { addProduct } from '../app/redux/slices/user/CartSlice'
import { toastSuccess } from "../components/sharedComponents/toast";

function Detail(props) {
  const dispatch = useDispatch()

  const params = useParams();
  const [product, setProduct] = useState({});
  const fetchDetail = async () => {
    Notiflix.Loading.standard("Đang tải...");
    const res = await fetch(
      import.meta.env.REACT_APP_API_ENDPOINT + "product/getOneProduct/" + params.id
    );
    const data = await res.json();
    if (data) {
      Notiflix.Loading.remove();
    }
    setProduct(data);
  };
  const addToCart = (item) => {
    const product = {
      _id: item._id,
      Name: item.Name,
      Price: (item.Price * (100 - item.Discount)) / 100,
      Images: item.Images,
      Quantity: 1
    };
    toastSuccess("Thêm vào giỏ hàng thành công!");
    dispatch(addProduct(product));


  }
  let Rating = [];
  for (let i = 1; i <= 5; i++) {
    if(i <= product.Rating  ){
      Rating.push(<span key={i} className="star-icon las la-star active" />)
    }else {
      Rating.push(<span key={i} className="star-icon las la-star" />)
    }
  }
  useEffect(() => {
    fetchDetail();
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="shop-breadcrumb">
              <div className="breadcrumb-main">
                <h4 className="text-capitalize breadcrumb-title">
                  Chi tiết sản phẩm
                </h4>
              </div>
              <Breadcrumb />
            </div>
          </div>
        </div>
      </div>
      <div className="products mb-30">
        <div className="container-fluid">
          {/* Start: Card */}
          <div className="card product-details h-100">
            <div className="product-item d-flex p-sm-40 p-20">
              <div className="row">
                <div className="col-lg-5">
                  {/* Start: Product Slider */}
                  <div className="product-item__image">
                    <div className="wrap-gallery-article">
                      <div
                        id="myCarouselArticle"
                        className="carousel slide carousel-fade"
                        data-ride="carousel"
                      >
                        <ol className="carousel-indicators">
                          <li
                            data-target="#myCarouselArticle"
                            data-slide-to={0}
                            className="active"
                          />
                          <li
                            data-target="#myCarouselArticle"
                            data-slide-to={1}
                          />
                          <li
                            data-target="#myCarouselArticle"
                            data-slide-to={2}
                          />
                          <li
                            data-target="#myCarouselArticle"
                            data-slide-to={3}
                          />
                          <li
                            data-target="#myCarouselArticle"
                            data-slide-to={4}
                          />
                          <li
                            data-target="#myCarouselArticle"
                            data-slide-to={5}
                          />
                          <li
                            data-target="#myCarouselArticle"
                            data-slide-to={6}
                          />
                        </ol>
                        <div className="carousel-inner" role="listbox">
                          {product.Images &&
                            product.Images.map((item, index) => {
                              return (
                                <div
                                  className={`carousel-item ${index === 0 ? "active" : ""
                                    }`}
                                  key={index}
                                >
                                  <img
                                    className="img-fluid d-flex bg-opacity-primary "
                                    src={item}
                                    alt="First slide"
                                  />
                                </div>
                              );
                            })}
                        </div>
                      </div>
                      <div className="overflow-hidden " id="slider-thumbs">
                        {/* Bottom switcher of slider */}
                        <ul className="reset-ul d-flex flex-wrap list-thumb-gallery">
                          {product.Images &&
                            product.Images.map((item, index) => {
                              return (
                                <li key={index}>
                                  <a
                                    href="#"
                                    className="thumbnail"
                                    data-target="#myCarouselArticle"
                                    data-slide-to={index}
                                  >
                                    <img
                                      className="d-flex bg-opacity-primary"
                                      src={item}
                                      alt="First slide"
                                    />
                                  </a>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End: Product Slider */}
                </div>
                <div className=" col-lg-7">
                  {/* Start: Product Details */}
                  <div className=" border-bottom mb-25 pb-sm-30 pb-15 mt-lg-0 mt-15">
                    <div className="product-item__body">
                      {/* Start: Product Title */}
                      <div className="product-item__title">
                        <h2 className="card-title fw-500">
                          <p>{product.Name}</p>
                        </h2>
                      </div>
                      {/* End: Product Title */}
                      <div className="product-item__content text-capitalize">
                        {/* Start: Product Ratings */}
                        <div className="stars-rating d-flex align-items-center">
                          {
                            Rating
                          }
                          <span className="stars-rating__point">{product.Rating}</span>
                          <span className="stars-rating__review">
                            <span>{product.Views}</span> Lượt xem
                          </span>
                        </div>
                        {/* End: Product Ratings */}
                        {/* Start: Product Brand */}
                        <span className="product-details-brandName">
                          Brand:<span>Louis Poulsen</span>
                        </span>
                        <span className="product-desc-price">
                          {product && (product.Price * (1 - product.Discount / 100)).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                        </span>
                        {product.Discount > 0 && (
                          <div className="d-flex align-items-center mb-2">
                            <span className="product-price">{product.Price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                            <span className="product-discount">Giảm {product.Discount}%</span>
                          </div>
                        )}
                        {/* End: Product Brand */}
                        {/* Start: Product Description */}
                        <p className=" product-deatils-pera">
                          {product.Details}
                        </p>
                        {/* End: Product Description */}
                        {/* Start: Product Stock */}
                        <div className="product-details__availability">
                          <div className="title">
                            <p>Tình trạng:</p>
                            <span className="stock"> Còn hàng </span>
                          </div>
                          <div className="title">
                            <p>Phí vận chuyển:</p>
                            <span className="free"> Miễn phí</span>
                          </div>
                        </div>
                        {/* End: Product Stock */}
                        {/* Start: Product Quantity */}
                        <div className="quantity product-quantity flex-wrap">
                          <div className="mr-15 d-flex align-items-center flex-wrap">
                            <p className="fs-14 fw-500 color-dark"> Số lượng: </p>
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
                          <span className="fs-13 fw-400 color-light my-sm-0 my-10">
                            Còn lại {product.InStock} sản phẩm
                          </span>
                        </div>
                        {/* End: Product Quantity */}
                        {/* Start: Product Selections */}
                        <div className="product-item__button mt-lg-30 mt-sm-25 mt-20 d-flex flex-wrap">
                          <div className=" d-flex flex-wrap product-item__action align-items-center">
                            <button onClick={()=>addToCart(product)}  className="btn btn-primary btn-default btn-squared border-0 mr-10 my-sm-0 my-2">
                              Mua ngay
                            </button>
                            <button onClick={()=>addToCart(product)}  className="btn btn-secondary btn-default btn-squared border-0 px-25 my-sm-0 my-2 mr-2">
                              <span data-feather="shopping-bag" />
                              Thêm vào giỏ
                            </button>
                            <div className="like-icon">
                              <button type="button">
                                <i className="lar la-heart icon" />
                              </button>
                            </div>
                            <div className="like-icon mr-10 my-sm-0 my-3 ">
                              <button type="button">
                                <span data-feather="share-2" />
                              </button>
                            </div>
                          </div>
                          <div className="product-deatils__social my-xl-0 my-10 d-flex align-items-center">
                            <ul className="d-flex">
                              <li>
                                <a href="#">
                                  <i className="lab la-facebook-f" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="lab la-twitter" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="lab la-pinterest" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="lab la-linkedin-in" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="lab la-telegram" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* End: Product Selections */}
                      </div>
                    </div>
                  </div>
                  {/* Start: Product Availability */}
                  <div className="product-details__availability">
                    <div className="title">
                      <p>Đã bán:</p>
                      <span className="free"> <strong>{product.Saled}</strong> sản phẩm </span>
                    </div>
                    <div className="title">
                      <p>Danh mục:</p>
                      <span className="free"> {product.Id_Categories} </span>
                    </div>
                  </div>
                  {/* End: Product Availability */}
                  {/* End: Product Details */}
                </div>
              </div>
            </div>
          </div>
          {/* End: Card */}
        </div>
      </div>
    </>
  );
}
export default Detail;
