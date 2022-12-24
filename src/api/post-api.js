import axios from "axios";

const BASIC_URL = " http://localhost:3100/posts";
console.log(BASIC_URL);

export class PostAPI {
  static async fetchAllPosts() {
    return (await axios.get(`${BASIC_URL}`)).data;
  }
}
