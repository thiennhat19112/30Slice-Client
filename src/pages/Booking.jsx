import { useState, useRef, useEffect } from 'react';
import Notiflix from 'notiflix';


import { useNavigate } from 'react-router-dom';

function Booking(props) {
    const navi = useNavigate();
    const [BookedTime, setBookedTime] = useState('');
    const [EmployeeId, setEmployeeId] = useState(0);
    const [ServiceId, setServiceId] = useState(0);
    const [CustomerInfo, setCustomerInfo] = useState({})
    const [arrEmployee, setArrEmployee] = useState([]);
    const [arrService, setArrService] = useState([]);
    const [listTime, setListTime] = useState([]);
    const allAvailableTime = ['07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00']
    const arrDate = []
    // khỏi tạo 7 ngày tiếp theo
    for (var i = 0; i <= 6; i++) {
        var date = new Date();
        date.setDate(date.getDate() + i);
        arrDate.push({
            dateVn: date.toLocaleDateString('vi-VN', {
                year: "2-digit",
                month: "2-digit",
                day: "2-digit",
                weekday: 'long'
            }),
            dateEn: date.toLocaleDateString('en', {
                year: "2-digit",
                month: "2-digit",
                day: "2-digit"
            })
        })
    }

    const refDate = useRef(arrDate[0].dateEn);
    // hàm get stylist theo ngày
    const fetchArrEmployee = async () => {
        Notiflix.Loading.standard('Loading...');
        const res = await fetch(process.env.REACT_APP_API_ENDPOINT + 'stylelist/getAvailableEmployee?bookedDate=' + refDate.current.value);
        const data = await res.json();
        if (data) {
            Notiflix.Loading.remove();
        }
        setArrEmployee(data);
    };
    // hàm get dịch vụ
    const fetchArrService = async () => {
        Notiflix.Loading.standard('Loading...');
        const res = await fetch(process.env.REACT_APP_API_ENDPOINT + 'service/getAllServices');
        const data = await res.json();
        if (data) {
            Notiflix.Loading.remove();
        }
        setArrService(data);
    };
    // hàm đăng nhập khách hàng 
    const LoginCustomer = async (phone) => {
        Notiflix.Loading.standard('Loading...');
        const res = await fetch(process.env.REACT_APP_API_ENDPOINT + 'user/login/customer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "phone": phone,
            })
        });
        const data = await res.json();
        console.log(data);
        if (data.status_code == 404) {
            Notiflix.Loading.remove();
            let full_name = prompt("Nhập họ tên của bạn", "");
            let Info = {
                "phone": phone,
                "full_name": full_name
            }
            RegisterCustomer(Info);
            console.log("Chưa có tài khoản");
            // Notiflix.Confirm.prompt(
            //     'Hello',
            //     'How are you feeling?',
            //     'Awesome!',
            //     'Answer',
            //     'Cancel',
            //     (clientAnswer) => {
            //         alert('Client answer is: ' + clientAnswer);
            //     },
            //     (clientAnswer) => {
            //         alert('Client answer was: ' + clientAnswer);
            //     }
            // );

        } else {
            Notiflix.Loading.remove();
            setCustomerInfo(data);
        }
    };
    // hàm khỏi tạo khách hàng
    const RegisterCustomer = async (Info) => {
        const res = await fetch(process.env.REACT_APP_API_ENDPOINT + 'user/register/customer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Info)
        });
        const data = await res.json();
        setCustomerInfo(data);
    };
    // hàm đặt lịch
    const Booking = async (Info) => {
        const res = await fetch(process.env.REACT_APP_API_ENDPOINT + 'booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Info)
        });
        const data = await res.json();
        if (res.status == 200) {
            Notiflix.Notify.success('Đặt lịch thành công!');
            navi('/booking-history');
        } else {
            Notiflix.Notify.failure('Có lỗi xảy ra vui lòng thử lại!');
        }


    };


    useEffect(() => {
        Notiflix.Confirm.prompt(
            'Đặt lịch cắt tóc',
            'Nhập số điện thoại của bạn',
            '',
            'Đặt ngay',
            'Trở Lại',
            (phoneNumber) => {
                if (phoneNumber.charAt(0) == 0) {
                    phoneNumber = `+84${phoneNumber.slice(1)}`
                    console.log(phoneNumber)
                } else {
                    phoneNumber = `+84${phoneNumber}`;
                    console.log(phoneNumber)
                }
                const isValidPhoneNumber = (phoneNumber) => {
                    return /^\+84[3|5|7|8|9][0-9]{8}$/.test(phoneNumber);
                }
                if (isValidPhoneNumber(phoneNumber)) {
                    LoginCustomer(phoneNumber);
                } else {
                    Notiflix.Notify.failure('Số điện thoại không hợp lệ!');
                    navi('/');
                }

            },
            (phoneNumber) => {
                navi('/');

            },
            {
            },
        );
    }, []);
    useEffect(() => {
        fetchArrEmployee();
        fetchArrService();

    }, []);

    useEffect(() => {
        reloadListTime()
    }, [BookedTime, EmployeeId, arrEmployee, CustomerInfo])


    // hàm get thời gian theo stylist
    function getAvailableTime(bookedDate, employeeId) {
        let arrAvailableTime = []
        if (employeeId == 0) {
            arrAvailableTime = [...new Set(arrEmployee.flatMap(num => num.Info.Shifts))]
        } else {
            arrAvailableTime = arrEmployee.find(ele => ele._id == employeeId).Info.Shifts
        }
        return arrAvailableTime.filter((time, index) => {
            return new Date(`${bookedDate} ${time}`).getTime() > new Date().getTime()
        })
    }
    // hàm load lại danh sách thời gian
    const reloadListTime = () => {
        const arrAvailableTime = getAvailableTime(refDate.current.value, EmployeeId);
        setListTime(allAvailableTime.map((ele, index) => {
            const isAvailable = arrAvailableTime.includes(ele)

            return (
                <div key={index} className="form-check col-1 mb-2 mx-3">
                    <input className="btn-check" type="radio" name="flexRadioDefault" onChange={() => setBookedTime(ele)} disabled={!isAvailable} id={ele} />
                    <label className={`form-check-label btn px-4 border border-warning ${BookedTime == ele && isAvailable ? 'btn-warning border-warning' : ''}`} htmlFor={ele}>{ele}</label>
                </div>
            )
        }))
    }
    // hàm đặt lịch 
    const bookingSave = () => {
        const data = {
            "BookedDate": refDate.current.value,
            "BookedTime": BookedTime,
            "Id_Style_List": EmployeeId,
            "Id_Service": ServiceId,
            "Id_Customer": CustomerInfo.Id_User
        }
        Booking(data);

    }



    return (

        <div className="container ">
            <h1>Chào anh {CustomerInfo && CustomerInfo.Full_Name}</h1>
            <div className="form-floating m-3">
                <select className="form-select" id="date" aria-label="Chọn ngày" ref={refDate} onChange={() => { reloadListTime(); fetchArrEmployee() }}>
                    {arrDate && arrDate.map((item, index) => (<option key={index} value={item.dateEn}>{item.dateVn}</option>))}
                </select>
                <label htmlFor="date">Chọn ngày</label>
            </div>
            <div className="row m-3">
                <h6>Chọn Dịch Vụ</h6>
                {
                    arrService && arrService.map((item, index) => {
                        return (
                            <div className="col-4 mb-3" key={index}>
                                <div className="card">
                                    <img src={item.Images} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.Name}</h5>
                                        <p className="card-text text-danger">Giá: {item.Price.toLocaleString('vi-Vn')} vnđ</p>
                                        <input type="radio" className="btn-check" name="option-outlined" id={item._id} onChange={() => setServiceId(item._id)} />
                                        <label className="btn btn-outline-warning " htmlFor={item._id}>Chọn Dịch Vụ</label>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )

                }
            </div>
            <div className="row m-3">
                <div className="col">
                    <div className="row">
                        <label>Chọn nhân viên</label>
                        <div className='col'>
                            <input type="radio" className="btn-check" name="options-outlined" id='randomEmployee' onChange={() => setEmployeeId(0)} onClick={() => reloadListTime()} defaultChecked />
                            <label className="btn btn-outline-warning rounded-5" htmlFor='randomEmployee'>Ngẫu nhiên</label>
                        </div>
                        {arrEmployee.map((item, index) => {
                            if (item.Info.Status == 'active' && item.Info.Status_Code == 0) {
                                return (
                                    <div key={index} className='col'>
                                        <input type="radio" className="btn-check" name="options-outlined" id={item._id} onChange={() => setEmployeeId(item._id)} onClick={() => reloadListTime()} />
                                        <label className="btn btn-outline-warning  rounded-5" htmlFor={item._id}>{item.Full_Name}</label>
                                    </div>
                                )
                            }


                        })}
                    </div>
                </div>
            </div>
            <div className="row my-3">
                {listTime}
            </div>
            <button className="btn btn-info m-3" onClick={bookingSave}>Lưu</button>
        </div>
    );
}

export default Booking;