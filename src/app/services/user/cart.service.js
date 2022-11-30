import api from "../../axios/api";
export const CheckoutCod = async (data) => {
  try {
    const res = await api.post("order", data);
    return res;
  } catch (err) {
    throw new Error(err);
  }
};
