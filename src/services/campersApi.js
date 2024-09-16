import axios from 'axios';

const api = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getCampers = async () => {
  try {
    const response = await api.get('/campers');
    return response.data;
  } catch (error) {
    console.error('Error fetching campers:', error);
    throw error;
  }
};

export const getCamperDetails = async (id) => {
  try {
    const response = await api.get(`/campers/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching camper details for ID ${id}:`, error);
    throw error;
  }
};

