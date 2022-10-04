import logo from './logo.svg';
import './App.css';
import { useState, useRef, useEffect } from 'react';


function App(props) {
    const [activeId, setActiveId] = useState('');

    const [listTime, setListTime] = useState();
    const getCurrentDate = () => {
        return new Date().toLocaleDateString('en', {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit"
        })
    }
    const refDate = useRef(getCurrentDate());
    const refEmployee = useRef(0);
    useEffect(() => {
        reloadListTime();
    }, [activeId]);


    class Employee {
        constructor(id, name) {
            this.employeeID = id
            this.employeeName = name
        }
    }
    // class Customer {
    //     constructor(id, name) {
    //         this.customerID = id
    //         this.customerName = name
    //     }
    // }
    class Booking {
        constructor(customer, employee) {
            this.customer = customer
            this.employee = employee
        }
    }
    const allAvailableTime = ['07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00']
    const arrBookedData = {}
    // const arrEmployee = [new Employee('NV01', 'Nguyễn Văn A'), new Employee('NV02', 'Nguyễn Văn B')]

    const arrEmployee = [
        {
            id: 1,
            name: 'Nguyễn Văn A',
            shifts: ['07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00'],
            status: 'active',
            statusCode: 1
        },
        {
            id: 2,
            name: 'Nguyễn Văn B',
            shifts: ['07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00'],
            status: 'active',
            statusCode: 1
        },
        {
            id: 3,
            name: 'Nguyễn Văn C',
            shifts: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00'],
            status: 'active',
            statusCode: 1
        },
        {
            id: 4,
            name: 'Nguyễn Văn D',
            shifts: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00'],
            status: 'active',
            statusCode: 1
        },

    ]

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
    const getAvailableTime = (bookedDate) => {
        if (!arrBookedData[bookedDate]) {
            arrBookedData[bookedDate] = new Array(allAvailableTime.length).fill(new Array())
        }
        let arrBookedTime = arrBookedData[bookedDate]
        return allAvailableTime.filter((time, index) => {
            return arrBookedTime[index].length <= 1 && new Date(`${bookedDate} ${time}`).getTime() > new Date().getTime()
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
        const arrAvailableTime = getAvailableTime(refDate.current.value);
        setListTime(allAvailableTime.map((ele, index) => {
            const isAvailable = arrAvailableTime.includes(ele)

            return (
                <div key={index} className="form-check col-1 mb-2">
                    <input className="form-check-input d-none" type="radio" name="flexRadioDefault" onChange={() => setActiveId(ele)} disabled={!isAvailable} id={ele} />
                    <label className={`form-check-label btn px-4 border ${activeId == ele && isAvailable ? 'btn-warning border-warning' : ''}`} htmlFor={ele}>{ele}</label>
                </div>
            )
        }))
    }
    const bookingSave = () => {
        console.log(activeId)
        console.log(refDate.current.value)
        console.log(refEmployee.current.value)
    }



    return (

        <div className="container">
            <div className="form-floating m-3">
                <select className="form-select" id="date" aria-label="Chọn ngày" ref={refDate} onChange={() => reloadListTime()}>
                    {arrDate && arrDate.map((item, index) => (<option key={index} value={item.dateEn}>{item.dateVn}</option>))}
                </select>
                <label htmlFor="date">Chọn ngày</label>
            </div>
            <div className="form-floating m-3">
                <select className="form-select" id="floatingSelect" aria-label="Chọn nhân viên" ref={refEmployee} onChange={() => reloadListTime()}>
                    <option value="0">Chọn ngẫu nhiên nhân viên</option>
                    {arrEmployee && arrEmployee.map((item, index) => (<option key={index} value={item.id}>{item.name}</option>))}
                </select>
                <label htmlFor="floatingSelect">Chọn nhân viên</label>
            </div>
            <div className="row my-3">
                {listTime}
            </div>
            <button className="btn btn-info m-3" onClick={bookingSave}>Lưu</button>
        </div>
    );
}

export default App;