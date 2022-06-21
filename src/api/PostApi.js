import axios from "axios";

class PostApi {
  static async getAllPosts() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  }
}
export default PostApi;
