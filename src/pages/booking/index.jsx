import { useState, useRef, useEffect } from "react";
import Notiflix from "notiflix";

import { useNavigate } from "react-router-dom";
import {
  fetchArrEmployee,
  fetchArrService,
  LoginCustomer,
} from "../../app/services/booking/booking.service";
import { create7Date, allAvailableTime } from "./func";
function Booking(props) {
  const navigate = useNavigate();
  const [BookedTime, setBookedTime] = useState("");
  const [ServiceId, setServiceId] = useState(0);
  const [CustomerInfo, setCustomerInfo] = useState({});
  const [arrEmployee, setArrEmployee] = useState([]);
  const [arrService, setArrService] = useState([]);
  const [listTime, setListTime] = useState([]);
  const [loading, setLoading] = useState(false);
  const [arrDate, setArrDate] = useState(create7Date());
  const _isMounted = useRef(false);
  const refDate = useRef(arrDate[0].dateEn);
  const refStyleList = useRef(0);
  const refPhone = useRef("");
  const refCustomerName = useRef("");

  // hàm get stylist theo ngày
  const loadArrStyleList = async () => {
    _isMounted.current && setLoading(true);
    const data = await fetchArrEmployee(refDate.current.value);
    if (data) {
      _isMounted.current && setArrEmployee(data);
      _isMounted.current && setLoading(false);
    }
  };
  // hàm get dịch vụ
  const loadArrService = async () => {
    _isMounted.current && setLoading(true);
    const data = await fetchArrService();
    if (data) {
      _isMounted.current && setArrService(data);
      _isMounted.current && setLoading(false);
    }
  };

  // hàm đăng nhập khách hàng
  const onBlurPhone = async () => {
    let phone = refPhone.current.value;
    if (phone.charAt(0) == 0) {
      phone = `+84${phone.slice(1)}`;
    } else {
      phone = `+84${phone}`;
    }
    // /^\+84[3|5|7|8|9][0-9]{8}$/.test(phone);
    // console.log(phone);
    _isMounted.current && setLoading(true);
    const res = await LoginCustomer(phone);
    console.log(res)
    if (res.status === 200) {
      setCustomerInfo(res.data);
      refCustomerName.current.value = res.data.Full_Name;
      _isMounted.current && setLoading(false);
    }else{
      _isMounted.current && setLoading(false);
    }
  };

  // hàm khỏi tạo khách hàng
  const RegisterCustomer = async (Info) => {
    const res = await fetch(
      import.meta.env.REACT_APP_API_ENDPOINT + "user/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Info),
      }
    );
    const data = await res.json();
    setCustomerInfo(data);
  };
  // hàm đặt lịch
  const Booking = async (Info) => {
    const res = await fetch(
      import.meta.env.REACT_APP_API_ENDPOINT + "booking",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Info),
      }
    );
    const data = await res.json();
    if (res.status == 200) {
      Notiflix.Notify.success("Đặt lịch thành công!");
      navigate("/booking-history");
    } else {
      Notiflix.Notify.failure("Có lỗi xảy ra vui lòng thử lại!");
    }
  };
  // hàm check số điện thoại valid

  // loading bingchilling...
  if (loading) {
    Notiflix.Loading.standard("Loading...");
  } else {
    Notiflix.Loading.remove();
  }

  useEffect(() => {
    _isMounted.current = true;

    return () => {
      _isMounted.current = false;
    };
  });
  useEffect(() => {
    loadArrService();
  }, []);
  useEffect(() => {
    loadArrStyleList();
  }, [refDate.current.value]);

  useEffect(() => {
    reloadListTime();
  }, [BookedTime, refStyleList.current.value, arrEmployee, CustomerInfo]);

  // hàm get thời gian theo stylist
  function getAvailableTime(bookedDate, employeeId) {
    let arrAvailableTime = [];
    if (employeeId == 0) {
      arrAvailableTime = [
        ...new Set(arrEmployee.flatMap((num) => num.Info.Shifts)),
      ];
    } else {
      arrAvailableTime = arrEmployee.find((ele) => ele._id == employeeId).Info
        .Shifts;
    }
    return arrAvailableTime.filter((time, index) => {
      return new Date(`${bookedDate} ${time}`).getTime() > new Date().getTime();
    });
  }
  // hàm load lại danh sách thời gian
  const reloadListTime = () => {
    const arrAvailableTime = getAvailableTime(
      refDate.current.value,
      refStyleList.current.value
    );
    setListTime(
      allAvailableTime.map((ele, index) => {
        const isAvailable = arrAvailableTime.includes(ele);

        return (
          <div key={index} className="form-check col-1 mb-2">
            <input
              className="btn-check "
              type="radio"
              name="flexRadioDefault"
              onChange={() => setBookedTime(ele)}
              disabled={!isAvailable}
              id={ele}
              style={{ display: "none" }}
            />
            <label
              className={`form-check-label btn px-4 border ${
                BookedTime == ele && isAvailable
                  ? "btn-success"
                  : "border-success text-success"
              }${!isAvailable ? "btn-default border-light" : ""}`}
              htmlFor={ele}
              style={{ opacity: !isAvailable ? "0.5" : "1" }}
            >
              {ele}
            </label>
          </div>
        );
      })
    );
  };
  // hàm đặt lịch
  const bookingSave = () => {
    const data = {
      BookedDate: refDate.current.value,
      BookedTime: BookedTime,
      Id_Style_List: refStyleList.current.value,
      Id_Service: ServiceId,
      Id_Customer: CustomerInfo.Id_User,
    };
    Booking(data);
  };

  return (
    <div className="contents container   ">
      <h1>Chào anh {CustomerInfo && CustomerInfo.Full_Name}</h1>

      <div className="form-floating m-3">
        <label htmlFor="phone">Nhập số điện thoại:</label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Số điện thoại..."
          id="phone"
          ref={refPhone}
          onBlur={onBlurPhone}
        />
      </div>
      <div className="form-floating m-3">
        <label htmlFor="name">Nhập họ và tên:</label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Họ và tên."
          id="name"
          ref={refCustomerName}
          disabled={CustomerInfo && CustomerInfo.Full_Name}
        />
      </div>

      <div className="form-floating m-3">
        <label htmlFor="date">Chọn ngày</label>

        <select
          className="form-control  form-control-lg"
          id="date"
          aria-label="Chọn ngày"
          ref={refDate}
          onChange={() => {
            reloadListTime();
          }}
        >
          {arrDate &&
            arrDate.map((item, index) => (
              <option key={index} value={item.dateEn}>
                {item.dateVn}
              </option>
            ))}
        </select>
      </div>
      <div className="form-floating m-3">
        <label htmlFor="">Chọn Dịch vụ</label>
        <div className="row m-3">
          {arrService &&
            arrService.map((item, index) => {
              return (
                <div key={item._id} className="card">
                  <div className="card-body text-center pt-30 px-25 pb-0">
                    <div className="account-profile-cards  ">
                      <div className="ap-nameAddress">
                        <h6 className="ap-nameAddress__title">{item.Name}</h6>
                        <p className="ap-nameAddress__subTitle  fs-14 pt-1 m-0 ">
                          {item.Price.toLocaleString("vi-VN")} vnđ
                        </p>
                      </div>
                      <div className="ap-button account-profile-cards__button button-group d-flex justify-content-center flex-wrap pt-20 mb-2">
                        <input
                          type="radio"
                          className="btn-check"
                          name="option-outlined"
                          id={item._id}
                          onChange={() => setServiceId(item._id)}
                          style={{ display: "none" }}
                        />
                        <label
                          className="btn btn-default btn-squared btn-outline-primary  "
                          htmlFor={item._id}
                        >
                          Chọn Dịch Vụ
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="form-floating m-3">
        <label htmlFor="stylelist">Chọn nhân viên</label>

        <select
          className="form-control  form-control-lg"
          id="stylelist"
          aria-label="Chọn nhân viên"
          ref={refStyleList}
          onChange={() => {
            reloadListTime();
          }}
        >
          <option value="0">Ngẫu nhiên</option>
          {arrEmployee &&
            arrEmployee.map((item) => (
              <option key={item._id} value={item._id}>
                {item.Full_Name}
              </option>
            ))}
        </select>
      </div>
      <label className="m-3">Chọn thời gian</label>
      <div className="row my-3">{listTime}</div>
      <button
        className="btn btn-primary btn-lg btn-squared btn-block "
        onClick={bookingSave}
      >
        Nút bự nha thầy
      </button>
    </div>
  );
}

export default Booking;
