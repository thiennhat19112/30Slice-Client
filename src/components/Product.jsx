import { NavLink } from 'react-router-dom'

function Product(props) {
   return (
      <figure className="item-card">
         <div className="img-wrapper">
            <img
               src="/assets/img/product-1.jpg"
               height={165}
               width={220}
               alt=""
            />
         </div>
         <div className="item-card-description">
            <NavLink to="/products/id">
               <h3>
                  <span className="catalog-category"> Tên sản phẩm </span>
                  <span className="catalog-item-title">
                     «Tag nếu có»
                  </span>
               </h3>
            </NavLink>
            <div className="price">
               <p className="price-text">900 ₴</p>
               <button className="price-btn" >
                  Thêm vào giỏ hàng
               </button>
            </div>
         </div>
      </figure>
   )
}
export default Product