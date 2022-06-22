import axios from "axios";

class PostApi {
  static async getAllPosts(limit = 10, page = 1) {
    const response = await axios.get(
      // ?_limit=10/page=2 bolaklarga bolib beradi
      "https://jsonplaceholder.typicode.com/posts",
      {
        // jsondan ozimizga keraklicha malumotni ovolish uchun ishlatamiz
        // getAllPosts(ichidagilarni bular limitni oziga tenglashtirb quyish uchun ishlatiladi)
        params: {
          _limit: limit,
          page: page
        }
      }
    );
    return response;
  }
}
export default PostApi;
