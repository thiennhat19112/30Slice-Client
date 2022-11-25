import api from "../../axios/api";
export const getOneCategory = async (id) => {
  try {
    const response = await api.get("category/getOneCategory/" + id);
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    throw new Error(err);
  }
};
export const fetchArrEmployee = async (date) => {
  try {
    const response = await api.get(
      "stylelist/getAvailableEmployee?bookedDate=" + date
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    throw new Error(err);
  }
};
export const fetchArrService = async () => {
  try {
    const response = await api.get("service/getAllServices");
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    throw new Error(err);
  }
};
export const LoginCustomer = async (phone) => {
  try {
    const response = await api.post("user/booking", {
      phone: phone,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    throw new Error(err);
  }
};

//     const res = await fetch(
//       import.meta.env.REACT_APP_API_ENDPOINT + "user/booking",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           phone: phone,
//         }),
//       }
//     );
//     const data = await res.json();
//     console.log(data);
//     if (data.status_code == 404) {
//       Notiflix.Loading.remove();
//       let full_name = prompt("Nhập họ tên của bạn", "");
//       let Info = {
//         phone: phone,
//         full_name: full_name,
//       };
//       RegisterCustomer(Info);
//       console.log("Chưa có tài khoản");
//       Notiflix.Confirm.prompt(
//         "Hello",
//         "How are you feeling?",
//         "Awesome!",
//         "Answer",
//         "Cancel",
//         (clientAnswer) => {
//           alert("Client answer is: " + clientAnswer);
//         },
//         (clientAnswer) => {
//           alert("Client answer was: " + clientAnswer);
//         }
//       );
//     } else {
//       Notiflix.Loading.remove();
//       setCustomerInfo(data);
//     }
//   };
