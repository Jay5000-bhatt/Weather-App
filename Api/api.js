"use strict";

const api_key = "81da11788dd21a9859c03637d5020e72";

export const fetchData = function (URL, callback) {
  fetch(URL + `&appid=${api_key}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((data) => {
      console.log("API Response Data:", data);
      if (data) {
        callback(null, data);
      } else {
        callback(new Error("No data received"), null);
      }
    })
    .catch((err) => {
      console.error("Fetch error:", err);
      callback(err, null);
    });
};

export const url = {
  currentWeather(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`;
  },
  forecast(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`;
  },
  airPollution(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`;
  },
  reverseGeo(lat, lon) {
    return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`;
  },
  geo(query) {
    return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
  },
};
