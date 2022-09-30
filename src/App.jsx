import logo from './logo.svg';
import './App.css';

function App() {
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
  const allAvailableTime = ['07:00', '08:00', '09:00', '10:00', '11:00','15:00','16:00','17:00']
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
      return 'Thời gian đặt không hợp lệ'
    }
    const allAvailableEmployee = getAvailableEmployee(bookDate, timeIndex)
    const employeeIndex = allAvailableEmployee.indexOf(employee)
    if(employeeIndex < 0 || employeeIndex >= allAvailableEmployee.length) {
      return 'Nhân viên không hợp lệ'
    }
    const booking = new Booking(customer, employee)
    console.log(booking)
    arrBookedData[bookDate][timeIndex] = [...arrBookedData[bookDate][timeIndex], booking]
    return 'Đặt phòng thành công'
  }
  // createBook(getCurrentDate(), '7:00', new Customer('KH01', 'Nguyễn Văn C'), arrEmployee[0])
  console.log(getCurrentDate())
  let listTime = [];
  allAvailableTime.forEach((item, index) => {
    const currentTime = new Date().toLocaleTimeString('vi-VN')
    // console.log(currentTime)
    if (currentTime < item) {
      listTime.push(
        <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        <label className="form-check-label" htmlFor="flexRadioDefault1">{item}</label>
        </div>
        );
    }else{
      listTime.push(
        <div className="form-check">
        <input className="form-check-input" disabled type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        <label className="form-check-label" htmlFor="flexRadioDefault1">{item}</label>
        </div>
        );

    }




  });
  let listEmployee = [];
  arrEmployee.forEach((item, index) => {
    listEmployee.push(
      <option key={index} defaultValue={item.employeeID}>{item.employeeName}</option>
      );
    });

    
    return (
    <div className="container">
    <input className="form-control" type="date" placeholder="Readonly input here…" />
    
    <div className="form-floating">
    <select className="form-select" id="floatingSelect" aria-label="Chọn nhân viên">
    {
      listEmployee
    }
    </select>
    <label htmlFor="floatingSelect">Chọn nhân viên</label>
    </div>
    {listTime}
    <button className="btn btn-info">Lưu</button>

    </div>
    );
  }

  export default App;
