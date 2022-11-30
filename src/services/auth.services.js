import http from "./http-common";

class AuthService {
  signUp(data) {
    http.post("/auth/signup", data);
  }

  signIn(data) {
    http.post("/auth/signin", data);
  }
}

export default new AuthService();
