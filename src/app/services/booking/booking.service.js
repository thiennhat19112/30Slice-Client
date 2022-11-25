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
    if (response) {
      return response;
    }
  } catch (err) {
    throw new Error(err);
  }
};
export const RegisterCustomer = async (Info) => {
  try {
    const response = await api.post("user/register", {
      full_name: Info.name,
      phone: Info.phone,
    });
    if (response) {
      return response;
    }
  } catch (err) {
    throw new Error(err);
  }
};

export const Booking = async (Info) => {
  try {
    const response = await api.post("booking", {
      Id_Customer: Info.user_id,
      Id_Service: Info.service_id,
      Id_Style_List: Info.employee_id,
      BookedDate: Info.booked_date,
      BookedTime: Info.booked_time,
    });
    if (response) {
      return response;
    }
  } catch (err) {
    throw new Error(err);
  }
};
