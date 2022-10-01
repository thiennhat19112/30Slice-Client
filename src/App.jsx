import logo from './logo.svg';
import './App.css';
import { useState,useRef } from 'react';

function App() {
  const [activeId, setActiveId] = useState();
  const [listTimeState, setListTime] = useState();

  const refDate = useRef('');
  class Employee {
    constructor(id, name) {
      this.employeeID = id
      this.employeeName = name
    }
  }
  class Customer {
    constructor(id, name) {
      this.customerID = id
      this.customerName = name
    }
  }
  class Booking {
    constructor(customer, employee) {
      this.customer = customer
      this.employee = employee
    }
  }
  const allAvailableTime = ['07:00','07:30', '08:00','08:30', '09:00','09:30', '10:00','10:30', '11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00']
  const arrBookedData = {}
  const arrEmployee = [new Employee('NV01', 'Nguyễn Văn A'), new Employee('NV02', 'Nguyễn Văn B')] 
  const getCurrentDate = () => {
    return new Date().toLocaleDateString('en', {year:"2-digit", month:"2-digit", day:"2-digit"})
  }
  const getAvailableTime = (bookedDate) => {
    if(!arrBookedData[bookedDate]) {
      arrBookedData[bookedDate] = new Array(allAvailableTime.length).fill(new Array())
    }
    let arrBookedTime = arrBookedData[bookedDate]
    return allAvailableTime.filter((time, index) => {
      return arrBookedTime[index].length <= 1
    })
  }

  const getAvailableEmployee = (bookedDate, bookedTime) => {
    if(!arrBookedData[bookedDate]) {
      arrBookedData[bookedDate] = new Array(allAvailableTime.length).fill([])
    }
    const arrBookedEmployee = arrBookedData[bookedDate][bookedTime]
    return arrEmployee.filter(employee => {
      return arrBookedEmployee.findIndex(booking => {
        return booking.employee.employeeID === employee.employeeID
      }) === -1
    })
  }

  const createBook = (bookDate, bookTime, customer, employee) => {
    const currentDate = getCurrentDate()
    if(new Date(bookDate) < currentDate) {
      return 'Ngày đặt phải lớn hơn ngày hiện tại'
    }
    const allAvailableTime = getAvailableTime(bookDate)
    const timeIndex = allAvailableTime.indexOf(bookTime)
    if(timeIndex < 0 || timeIndex >= allAvailableTime.length) {
      console.log('Thời gian đặt không hợp lệ')
    }
    const allAvailableEmployee = getAvailableEmployee(bookDate, timeIndex)
    const employeeIndex = allAvailableEmployee.indexOf(employee)
    if(employeeIndex < 0 || employeeIndex >= allAvailableEmployee.length) {
      console.log('Nhân viên không hợp lệ')
    }
    const booking = new Booking(customer, employee)
    console.log(bookTime)
    arrBookedData[bookDate][bookTime] = [...arrBookedData[bookDate][timeIndex], booking]
    console.log(arrBookedData)

    return 'Đặt phòng thành công'
  }
  let arrDate = []
  for (var i = 0; i <= 6; i++) {
    var date = new Date();
    date.setDate(date.getDate() + i);
    arrDate.push(
    {
      dateVn : date.toLocaleDateString('vi-VN',{year:"2-digit", month:"2-digit", day:"2-digit",weekday: 'long'}),
      dateEn : date.toLocaleDateString('en',{year:"2-digit", month:"2-digit", day:"2-digit"})
    }

    )
  }
  console.log(arrDate)
  const bookingSave = ()=>{
    console.log(refDate.current.value)
    console.log(activeId)

  }
  let listDate = []
  arrDate.forEach((item, index) => {
    listDate.push(
      <option key={index} value={item.dateEn}>{item.dateVn}</option>);
  });
  const pickDate = () =>{
    let listTime = []

    allAvailableTime.forEach((item, index) => {
      const currentTime = new Date().toLocaleTimeString('vi-VN');
      if ( refDate.current.value == getCurrentDate()) {
        if (currentTime < item) {
          listTime.push(
            <div key={index} className="form-check col-1 mb-2">
            <input  defaultValue={item} className="form-check-input d-none" type="radio" name="flexRadioDefault" id={item} onClick={() => setActiveId(item)}/>
            <label className={"form-check-label  btn px-4 border  "+ ( activeId == item ? "btn-warning border-warning" : "btn-light border-dark")} htmlFor={item}>{item}</label>
            </div>
            );
        }else{
          listTime.push(
            <div key={index} className="form-check col-1 mb-2">
            <input className="form-check-input d-none" disabled type="radio" name="flexRadioDefault" id={item}/>
            <label className="form-check-label btn px-4 btn-muted border" htmlFor={item}>{item}</label>
            </div>
            );
        }
      }else{
        listTime.push(
          <div key={index} className="form-check col-1 mb-2">
          <input  defaultValue={item} className="form-check-input d-none" type="radio" name="flexRadioDefault" id={item} onClick={() => setActiveId(item)}/>
          <label className={"form-check-label  btn px-4 border  "+ ( activeId == item ? "btn-warning border-warning" : "btn-light border-dark")} htmlFor={item}>{item}</label>
          </div>
          );
      }
    });
    setListTime(listTime)
  }
  
  let listEmployee = []
  arrEmployee.forEach((item, index) => {
    listEmployee.push(
      <option key={index} defaultValue={item.employeeID}>{item.employeeName}</option>
      );
  });


  return (
    <div className="container">
    <div className="form-floating m-3">
    <select className="form-select" id="date" aria-label="Chọn ngày" ref={refDate} onChange={pickDate}>
      <option >Chọn ngày</option>
    
    {
      listDate
    }
    </select>
    <label htmlFor="date">Chọn ngày</label>
    </div>


    <div className="form-floating m-3">
    <select className="form-select" id="floatingSelect" aria-label="Chọn nhân viên">

    {
      listEmployee
    }
    </select>
    <label htmlFor="floatingSelect">Chọn nhân viên</label>
    </div>
    <div className="row my-3">
    {listTimeState}

    </div>
    <button className="btn btn-info m-3" onClick={bookingSave}>Lưu</button>

    </div>
    );
}

export default App;
