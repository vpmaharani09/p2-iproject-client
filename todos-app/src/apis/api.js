import axios from "axios";

export default axios.create({
  // baseURL: `https://rani-todos-app.herokuapp.com`,
  baseURL: `http://localhost:3000`,
});
