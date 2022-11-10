import { NavLink } from 'react-router-dom'

function Product(props) {
   return (
      <div className="cus-xl-3 col-lg-6 col-md-11 col-12 mb-30 px-10">
      <div className="card product product--grid">
        <div className="h-100">
          <div className="product-item">
            <div className="product-item__image">
              <span className="like-icon">
                <button type="button" className="content-center">
                  <i className="lar la-heart icon" />
                </button>
              </span>
              <NavLink to={/products/ + props.prod._id} >
                <img
                  className="card-img-top img-fluid"
                  src={props.prod.Images[0]}
                  alt="digital-chair"
                />
              </NavLink>
            </div>
            <div className="card-body px-20 pb-25 pt-20">
              <div className="product-item__body text-capitalize">
                <NavLink to={/products/ + props.prod._id}>
                  <h6 className="card-title">{props.prod.Name.substring(0,40)}...</h6>
                </NavLink>
                <div className="d-flex align-items-center mb-10 flex-wrap">
                  <span className="product-desc-price">
                   {(props.prod.Price - (props.prod.Price * props.prod.Saled/100)).toLocaleString('vi-VN')} VND
                  </span>
                  <span className="product-price">{props.prod.Price.toLocaleString('vi-VN')} VND</span>
                  <span className="product-discount">{props.prod.Saled}% Off</span>
                </div>
              </div>
              <div className="product-item__footer">
                <div className="stars-rating d-flex align-items-center flex-wrap">
                  <span className="star-icon las la-star active" />
                  <span className="star-icon las la-star active" />
                  <span className="star-icon las la-star active" />
                  <span className="star-icon las la-star active" />
                  <span className="star-icon las la-star-half-alt active" />
                  <span className="stars-rating__point">4.9</span>
                  <span className="stars-rating__review">
                    <span>778</span> Reviews
                  </span>
                </div>
              </div>
              <div className="product-item__button d-flex mt-20 flex-wrap">
                <button className="btn btn-default btn-squared btn-outline-light px-15 ">
                  <span data-feather="shopping-bag" />
                  Thêm vào giỏ hàng
                </button>
                <button className="btn btn-primary btn-default btn-squared border-0 ">
                 Mua đê
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   )
}
export default Product