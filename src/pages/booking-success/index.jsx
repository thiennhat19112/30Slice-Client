import { Link } from "react-router-dom";
export default function BookingSuccess() {
  return (
    <div className="container mt-5">
      <div className="card text-center  mb-5">
        <h1 className="mt-5">Đặt lịch thành công</h1>
        <hr className="m-1 p-2" />
        <div className="card-body">
            <h5 className="card-title">Cảm ơn bạn đã đặt lịch</h5>
            <p className="card-text">Thông tin Salon</p>
            <p>Địa chỉ Salon : <b>123 Hai Bà Trưng, Phường 10, Quận 1,TP. HCM</b></p>
            <p>Số điện thoại Salon : <b>0987.654.321</b></p>
            <p className="card-text">Thông tin đặt lịch của bạn</p>
            <p>Thời gian đặt lịch : <b className="text-success">13:00 giờ ngày 21/06/2022</b></p>
            <p>Dịch vụ đã đặt : <b className="text-success">Cắt tiêu chuẩn</b><b> giá 80.000 vnđ</b></p>
            <p>Số điện thoại người đặt : <b className="text-success">037.5168.482</b></p>
            <p>Tên người đặt : <b className="text-success">Trần Quang Khiêm</b></p>
            <p>Thợ cắt tóc đã chọn : <b>Nguyễn Thiên Nhật</b></p>
            <p>Ghi chú : Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus commodi, eveniet natus hic dolore ex enim, ab pariatur vitae magni excepturi obcaecati, libero ipsa officia doloremque suscipit animi aperiam molestias!</p>
            <Link to="/" className="btn btn-primary m-auto">Trở về trang chủ</Link>









        </div>
      </div>
    </div>
  );
}
