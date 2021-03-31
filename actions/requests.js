const { default: api } = require("@/services/api");

api.interceptors.request.use(
  function (config) {
    let user = JSON.parse(window?.localStorage.getItem("user-data"));
    config.headers = {
      ...config.headers,
    };
    config.headers.Accept = "application/json";
    config.headers["Content-Type"] = "application/json";
    if (user) {
      config.headers.Authorization = `Bearer ${user.accessToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export async function MAKE_BOOKING(data, callback, onError) {
  try {
    let booking = await api.post(`/booking`, data);
    if (booking.data) {
      callback && callback(booking.data);
    } else {
      throw booking;
    }

    return booking;
  } catch (err) {
    onError && onError(err);
  }
}
