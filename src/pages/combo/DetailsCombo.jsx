import { Link, useLocation } from "react-router-dom";
import Breadcrumb from "../../components/Breakcumb";
import { getComboById } from "../../app/services/user/combo.service";
import { useEffect, useState } from "react";
import './combo.css';

export default function DetailsCombo() {
  const location = useLocation();
  const [combo, setCombo] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchCombo = async () => {
    // setLoading(true);
    const res = await getComboById(location.state.id);
    console.log(res.data)
    if (res.status === 200) {
      setCombo(res.data);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchCombo();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="shop-breadcrumb">
              <div className="breadcrumb-main">
                <h4 className="text-capitalize breadcrumb-title">
                  Chi tiết Combo
                </h4>
              </div>
              <Breadcrumb BreadName={combo?.Name} />
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="card-body">
          <div className="spin-container text-center">
            <div className="atbd-spin-dots spin-lg">
              <span className="spin-dot badge-dot dot-primary"></span>
              <span className="spin-dot badge-dot dot-primary"></span>
              <span className="spin-dot badge-dot dot-primary"></span>
              <span className="spin-dot badge-dot dot-primary"></span>
            </div>
          </div>
        </div>
      ) : (
        <div className="products mb-20">
          <div className="container-fluid w-80">
            <div className="card product-details h-100">
              {/* <div className="product-item d-flex p-sm-40 p-20"> */}
                <div className="card-body">
                  <img
                    className="img-combo-detail"
                    src={combo?.Image} 
                  /> 
                  <div className="detail-combo">
                    <h1 className="card-title">
                      {combo?.Name}
                    </h1>

                    <div className="combo-item__content text-capitalize">

                      {/* Start: combo Ratings */}
                      <div className="stars-rating d-flex align-items-center">
                        <span className="stars-rating__review">
                          <span>{combo.Views}</span> Lượt xem
                        </span>
                      </div>
                      {/* End: combo Ratings */}

                      {/* Start: combo Brand */}
                      {combo.Discount > 0 && (
                        <div className="d-flex align-items-center mb-2">
                          <b className="combo-price">
                            {combo.Price.toLocaleString("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            })}
                          </b>
                          <span className="combo-discount">
                            Giảm {combo.Discount}%
                          </span>
                        </div>
                      )}
                      {/* End: combo Brand */}

                      {/* Start: combo Description */}
                      <p className=" combo-deatils-pera">
                        Mô tả : <b> {combo?.Details}</b>
                      </p>
                      {/* End: combo Description */}

                      {/* Start: combo Stock */}
                      <div className="combo-details__availability">
                        <div className="title">
                          <p>Tình trạng: <b className="stock"> Còn hàng </b></p>
                        </div>
                        <div className="title">
                          <p>Phí vận chuyển: <b className="free"> Miễn phí</b></p>                          
                        </div>
                      </div>
                      {/* End: combo Stock */}   

                      {/* Start: combo Quantity */}
                        <div className="quantity product-quantity flex-wrap">
                          <div className="mr-15 d-flex align-items-center flex-wrap">
                            <p className="fs-14 fw-500 color-dark">
                              {" "}
                              Số lượng:{" "}
                            </p>
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
                            Còn lại {combo?.InStock} sản phẩm
                          </span>
                        </div>
                      {/* End: combo Quantity */}    

                      {/* Start: Combo Selections */}
                        <div className="product-item__button mt-lg-30 mt-sm-25 mt-20 d-flex flex-wrap">
                          <div className=" d-flex flex-wrap product-item__action align-items-center">
                            <button
                              className="btn btn-primary btn-default btn-squared border-0 mr-10 my-sm-0 my-2"
                            >
                              Mua ngay
                            </button>
                            <button
                              className="btn btn-secondary btn-default btn-squared border-0 px-25 my-sm-0 my-2 mr-2"
                            >
                              Thêm vào giỏ
                            </button>
                            <div className="like-icon">
                              <button type="button">
                                <i className="lar la-heart icon" />
                              </button>
                            </div>
                          </div>
                        </div>
                      {/* End: Combo Selections */}    
                      
                    </div>
                  </div>
                  {/* <p className="card-text" dangerouslySetInnerHTML={{ __html: combo?.Details }}></p> */}
                </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
