import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3ca377f8b913416480755a9ecd7cd4aa",
  },
});
