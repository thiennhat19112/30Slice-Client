import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const OrderSummary = () => {
  const dataCart = useSelector((state) => state.cart);
  const subTotal = dataCart.reduce((total, item) => {
    return total + item.Price * item.Quantity;
  }, 0);
  const shippingFree = 30000;
  return (
    <>
      <div className="total">
        <div className="subtotalTotal">
          Tổng cộng:
          <span>{subTotal.toLocaleString("vi-VN")}</span>
        </div>
        <div className="shipping">
          Phí vận chuyển:
          <span>{shippingFree.toLocaleString("vi-VN")}</span>
        </div>
      </div>
      <div className="total-money d-flex justify-content-between">
        <h6>Tổng cộng :</h6>
        <h5>{(shippingFree + subTotal).toLocaleString("vi-VN")}đ</h5>
      </div>
    </>
  );
};
export default OrderSummary;