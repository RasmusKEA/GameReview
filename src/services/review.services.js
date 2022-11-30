import http from "./http-common";
import authHeader from "./auth-header";

class ReviewService {
  getAll() {
    return http.get("/review");
  }

  getFeatured() {
    return http.get("/review/featured");
  }

  get(id) {
    return http.get(`/review/${id}`);
  }

  create(data) {
    return http.post("/review", data, { headers: authHeader() });
  }

  update(id, data) {
    return http.put(`/review/${id}`, data, { headers: authHeader() });
  }

  delete(id) {
    return http.delete(`/review/${id}`, { headers: authHeader() });
  }
}

export default new ReviewService();
