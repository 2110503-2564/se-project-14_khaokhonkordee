// API base URL configuration
// export const API_BASE_URL = 'https://cozy-hotel-se-be.vercel.app/';
export const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://cozy-hotel-se-be.vercel.app";

// API endpoints
export const API_ENDPOINTS = {
  // Auth
  AUTH: {
    LOGIN: `${API_BASE_URL}/api/v1/auth/login`,
    REGISTER: `${API_BASE_URL}/api/v1/auth/register`,
    ME: `${API_BASE_URL}/api/v1/auth/me`,
  },

  //Hotel
  HOTELS: {
    BASE: `${API_BASE_URL}/api/v1/hotels`,
    BY_ID: (id: string) => `${API_BASE_URL}/api/v1/hotels/${id}`,
    WITH_PAGE: (page: string, limit: string) => `${API_BASE_URL}/api/v1/hotels?page=${page}&limit=${limit}`,
  },

  //ROOMTYPE
  ROOMTYPE: {
    BASE: `${API_BASE_URL}/api/v1/roomtypes/`,
    BY_ID: (id: string) => `${API_BASE_URL}/api/v1/roomtypes/${id}`,
    BY_HOTEL : (hotelId:string)=> `${API_BASE_URL}/roomtypes/hotel/${hotelId}`,
    BY_HOTEL_WITH_PAGE: (hotelId : string, page: string, limit: string) => `${API_BASE_URL}/api/v1/roomtypes/hotel/${hotelId}?page=${page}&limit=${limit}`
  },

  // Accounts
  ACCOUNTS: {
    BASE: `${API_BASE_URL}/api/v1/accounts`,
    BY_ID: (userId: string) => `${API_BASE_URL}/api/v1/accounts/${userId}`,
  },

  // Bookings
  BOOKINGS: {
    BASE: `${API_BASE_URL}/api/v1/bookings`,
    BY_HOTEL: (hotelId: string) =>
      `${API_BASE_URL}/api/v1/hotels/${hotelId}/bookings`,
    BY_ID: (bookingId: string) =>
      `${API_BASE_URL}/api/v1/bookings/${bookingId}`,
  },
};
