import { useState, useRef, useEffect } from "react";
import Notiflix from "notiflix";
import {
  toastSuccess,
  toastError,
} from "../../components/sharedComponents/toast";
import { useNavigate } from "react-router-dom";
import {
  fetchArrEmployee,
  fetchArrService,
  LoginCustomer,
  RegisterCustomer,
  CreateBooking,
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
  const [idStylist, setIdStylist] = useState(0);
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
    console.log(res);
    if (res.status === 200) {
      setCustomerInfo(res.data);
      refCustomerName.current.value = res.data.Full_Name;
      _isMounted.current && setLoading(false);
    } else {
      _isMounted.current && setLoading(false);
    }
  };
  const onBlurName = async () => {
    let name = refCustomerName.current.value;
    let phone = refPhone.current.value;
    if (phone.charAt(0) == 0) {
      phone = `+84${phone.slice(1)}`;
    } else {
      phone = `+84${phone}`;
    }
    _isMounted.current && setLoading(true);
    const res = await RegisterCustomer({ name, phone });
    console.log(res);
    if (res.status === 200) {
      setCustomerInfo(res.data);
      _isMounted.current && setLoading(false);
    }
  };
  const CreateBook = async () => {
    if (!CustomerInfo.Customer_Id) {
      onBlurName();
    }
    let idStylelist;
    if (refStyleList.current.value === "0") {
      idStylelist = idStylist;
    } else {
      idStylelist = refStyleList.current.value;
    }
    const data = {
      Id_Customer: CustomerInfo.Id_User,
      Id_Service: ServiceId,
      Id_Style_List: idStylelist,
      BookedTime: BookedTime,
      BookedDate: refDate.current.value,
      Phone: CustomerInfo.Phone,
    };
    console.log(data);
    _isMounted.current && setLoading(true);
    const res = await CreateBooking(data);
    console.log(res);
    if (res.status === 200) {
      toastSuccess("Đặt lịch thành công");
      _isMounted.current && setLoading(false);
      navigate("/");
    } else {
      toastError("Đặt lịch thất bại");
      _isMounted.current && setLoading(false);
    }
  };

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
  }, [BookedTime, arrEmployee]);

  // hàm get thời gian theo stylist
  function getAvailableTime(bookedDate) {
    let arrAvailableTime = {};
    allAvailableTime.forEach((time) => {
      arrAvailableTime[time] = {};
    });
    arrEmployee.forEach((employee) => {
      employee.Info.Shifts.filter((time) => {
        return (
          new Date(`${bookedDate} ${time}`).getTime() >= new Date().getTime()
        );
      }).forEach((shift) => {
        if (arrAvailableTime[shift]) {
          arrAvailableTime[shift][employee._id] = true;
        }
      });
    });
    console.log(arrAvailableTime);
    return arrAvailableTime;
  }
  // hàm load lại danh sách thời gian
  const reloadListTime = () => {
    const arrAvailableTime = getAvailableTime(refDate.current.value);
    setListTime(
      Object.entries(arrAvailableTime).map((ele, index) => {
        const isAvailable =
          Object.values(ele[1]).length === 0
            ? false
            : refStyleList.current.value !== "0"
            ? typeof ele[1][refStyleList.current.value] !== undefined &&
              ele[1][refStyleList.current.value] === true
            : true;
        // get idstylist value  == true
        const idStylist = Object.keys(ele[1]).filter(
          (key) => ele[1][key] === true
        );
        // console.log(idStylist[0]);

        return (
          <div key={index} className="form-check col-1 mb-2">
            <input
              className="btn-check "
              type="radio"
              name="flexRadioDefault"
              onChange={() => setBookedTime(ele[0])}
              disabled={!isAvailable}
              id={ele[0]}
              style={{ display: "none" }}
              onClick={() => setIdStylist(idStylist[0])}
            />
            <label
              className={`form-check-label btn px-4 border ${
                BookedTime == ele[0] && isAvailable
                  ? "btn-success"
                  : "border-success text-success"
              }${!isAvailable ? "btn-default border-light" : ""}`}
              htmlFor={ele[0]}
              style={{ opacity: !isAvailable ? "0.5" : "1" }}
            >
              {ele[0]}
            </label>
          </div>
        );
      })
    );
  };

  return (
    <div className="contents container   ">
      <h1>
        Chào mừng anh {CustomerInfo && CustomerInfo.Full_Name},đến với trang đặt
        lịch 30Slice
      </h1>
      <div className="form-floating m-3">
        <label htmlFor="phone">
          Nhập số điện thoại<sup className="text-danger">*</sup>
        </label>
        <input
          type="number"
          className="form-control form-control-lg"
          placeholder="Số điện thoại..."
          id="phone"
          ref={refPhone}
          onBlur={onBlurPhone}
          disabled={CustomerInfo && CustomerInfo.Phone}
          required
        />
      </div>
      <div className="form-floating m-3">
        <label htmlFor="name">
          Nhập họ và tên<sup className="text-danger">*</sup>
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Họ và tên."
          id="name"
          ref={refCustomerName}
          disabled={CustomerInfo && CustomerInfo.Full_Name}
          required
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
        <label htmlFor="">
          Chọn Dịch vụ<sup className="text-danger">*</sup>
        </label>
        <div className="row m-3">
          {arrService &&
            arrService.map((item) => {
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
      <label className="m-3">
        Chọn thời gian<sup className="text-danger">*</sup>
      </label>
      <div className="row my-3">{listTime}</div>
      <button
        className="btn btn-primary btn-lg btn-squared btn-block "
        onClick={CreateBook}
        type="submit"
      >
        Nút bự nha thầy
      </button>
    </div>
  );
}

export default Booking;
