import { useState, useRef, useEffect } from 'react';


function Booking(props) {

    const [activeId, setActiveId] = useState('');
    const [EmployeeId, setEmployeeId] = useState(0);
    const [listTime, setListTime] = useState();
    const [arrEmployee, setArrEmployee] = useState([]);
    const [arrService, setArrService] = useState([]);
    const [ServiceId, setServiceId] = useState(0);
    const getCurrentDate = () => {
        return new Date().toLocaleDateString('en', {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit"
        })
    }
    const refDate = useRef(getCurrentDate());

    const allAvailableTime = ['07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00']
    const arrBookedData = {}
    const arrDate = []
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
        }

        )
    }
    useEffect(() => {
        fetch(process.env.REACT_APP_API_ENDPOINT + 'stylelist/gettAllStyleList')
            .then(res => res.json())
            .then(data => {
                setArrEmployee(data);
            })
    }, []);
    useEffect(() => {
        fetch(process.env.REACT_APP_API_ENDPOINT + 'services')
            .then(res => res.json())
            .then(data => {
                setArrService(data);
            })
    }, []);


    useEffect(() => {
        reloadListTime()
    }, [activeId, EmployeeId])




    function getAvailableTime(bookedDate, employeeId) {
        // if (!arrBookedData[bookedDate]) {
        //     arrBookedData[bookedDate] = new Array(allAvailableTime.length).fill(new Array())
        // }
        console.log(employeeId);
        let arrAvailableTime = []
        if (employeeId == 0) {
            arrAvailableTime = [...new Set(arrEmployee.flatMap(num => num.Info.Shifts))]
            console.log(arrEmployee)
        } else {
            arrAvailableTime = arrEmployee.find(ele => ele._id == employeeId).Info.Shifts
        }
        return arrAvailableTime.filter((time, index) => {
            // return arrBookedTime[index].length <= 1 && new Date(`${bookedDate} ${time}`).getTime() > new Date().getTime()
            return new Date(`${bookedDate} ${time}`).getTime() > new Date().getTime()
        })
    }


    // const getAvailableEmployee = (bookedDate, bookedTime) => {
    //   if(!arrBookedData[bookedDate]) {
    //     arrBookedData[bookedDate] = new Array(allAvailableTime.length).fill([])
    //   }
    //   const arrBookedEmployee = arrBookedData[bookedDate][bookedTime]
    //   return arrEmployee.filter(employee => {
    //     return arrBookedEmployee.findIndex(booking => {
    //       return booking.employee.employeeID === employee.employeeID
    //     }) === -1
    //   })
    // }

    // const createBook = (bookDate, bookTime, customer, employee) => {
    //   const currentDate = getCurrentDate()
    //   if(new Date(bookDate) < currentDate) {
    //     return 'Ngày đặt phải lớn hơn ngày hiện tại'
    //   }
    //   const allAvailableTime = getAvailableTime(bookDate)
    //   const timeIndex = allAvailableTime.indexOf(bookTime)
    //   if(timeIndex < 0 || timeIndex >= allAvailableTime.length) {
    //     console.log('Thời gian đặt không hợp lệ')
    //   }
    //   const allAvailableEmployee = getAvailableEmployee(bookDate, timeIndex)
    //   const employeeIndex = allAvailableEmployee.indexOf(employee)
    //   if(employeeIndex < 0 || employeeIndex >= allAvailableEmployee.length) {
    //     console.log('Nhân viên không hợp lệ')
    //   }
    //   const booking = new Booking(customer, employee)
    //   console.log(bookTime)
    //   arrBookedData[bookDate][bookTime] = [...arrBookedData[bookDate][timeIndex], booking]
    //   console.log(arrBookedData)

    //   return 'Đặt phòng thành công'
    // }


    const reloadListTime = () => {
        const arrAvailableTime = getAvailableTime(refDate.current.value, EmployeeId);
        setListTime(allAvailableTime.map((ele, index) => {
            const isAvailable = arrAvailableTime.includes(ele)

            return (
                <div key={index} className="form-check col-1 mb-2 mx-3">
                    <input className="btn-check" type="radio" name="flexRadioDefault" onChange={() => setActiveId(ele)} disabled={!isAvailable} id={ele} />
                    <label className={`form-check-label btn px-4 border border-warning ${activeId == ele && isAvailable ? 'btn-warning border-warning' : ''}`} htmlFor={ele}>{ele}</label>
                </div>
            )
        }))
    }
    const bookingSave = () => {
        console.log(activeId)
        console.log(refDate.current.value)
        console.log(EmployeeId)
        console.log(ServiceId)
    }



    return (

        <div className="container ">
            <div className="form-floating m-3">
                <select className="form-select" id="date" aria-label="Chọn ngày" ref={refDate} onChange={() => reloadListTime()}>
                    {arrDate && arrDate.map((item, index) => (<option key={index} value={item.dateEn}>{item.dateVn}</option>))}
                </select>
                <label htmlFor="date">Chọn ngày</label>
            </div>

            {/* <div className="form-floating m-3">
                <select className="form-select" id="floatingSelect" aria-label="Chọn nhân viên" ref={refEmployee} onChange={() => reloadListTime()}>
                    <option value="0">Ngẫu Nhiên</option>
                    {arrEmployee && arrEmployee.map((item, index) => {
                        if (item.status == 'active' && item.statusCode == 1) {
                            return (<option key={index} value={item.id}>{item.name}</option>)
                        }
                    }
                    )}
                </select>
                <label htmlFor="floatingSelect">Chọn nhân viên</label>
            </div> */}
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