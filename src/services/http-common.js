import axios from "axios";

export default axios.create({
  baseURL: "https://nodejs-backend-372003.ey.r.appspot.com/api",
  headers: {
    "Content-type": "application/json",
  },
});
