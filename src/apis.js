export const url_randomuser_api = "https://randomuser.me/api/";

export const url_world_time_api =
  "https://world-time-by-based-api.p.rapidapi.com/v1/worldtime/?location=";
export const options_world_time_api = {
  method: "GET",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_WORLD_TIME_API_KEY,
    "x-rapidapi-host": "world-time-by-based-api.p.rapidapi.com",
  },
};
