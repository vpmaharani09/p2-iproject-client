import axios from "axios";

export default axios.create({
  baseURL: `https://rani-todos-app.herokuapp.com`,
});
