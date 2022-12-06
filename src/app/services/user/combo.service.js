import api from '../../axios/api';

export const getCombo = async () => {
  try {
    const response = await api.get('combo/getCombos');
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    throw new Error(err);
  }
};