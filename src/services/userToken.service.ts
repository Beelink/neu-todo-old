const localStorageService = {
  getUserToken() {
    const token = localStorage.getItem(__config.api.userAccessTokenName);
    if (token) {
      return token;
    }
    return null;
  },
  saveUserToken(token: string | undefined) {
    if (token) {
      localStorage.setItem(__config.api.userAccessTokenName, token);
    }
  },
  clearUserToken() {
    localStorage.removeItem(__config.api.userAccessTokenName);
  },
};

export default localStorageService;
