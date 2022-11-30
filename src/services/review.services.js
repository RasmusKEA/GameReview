import http from "./http-common";

class ReviewService {
  getAll() {
    return http.get("/review");
  }

  get(id) {
    return http.get(`/review/${id}`);
  }

  create(data) {
    return http.post("/review", data);
  }

  update(id, data) {
    return http.put(`/review/${id}`, data);
  }

  delete(id) {
    return http.delete(`/review/${id}`);
  }
}

export default new ReviewService();
