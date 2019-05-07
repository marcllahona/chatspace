import * as jwt from 'jsonwebtoken';

const TOKEN_KEY = 'openspace_token';
const USER_INFO = 'openspace_userInfo';

const auth = {
  /**
   * Remove an item from the used storage
   * @param  {String} key [description]
   */
  clear(key) {
    if (localStorage && localStorage.getItem(key)) {
      return localStorage.removeItem(key);
    }

    if (sessionStorage && sessionStorage.getItem(key)) {
      return sessionStorage.removeItem(key);
    }

    return null;
  },

  /**
   * Clear all app storage
   */
  clearAppStorage() {
    if (localStorage) {
      localStorage.clear();
    }

    if (sessionStorage) {
      sessionStorage.clear();
    }
  },

  clearToken(tokenKey = TOKEN_KEY) {
    return auth.clear(tokenKey);
  },

  clearUserInfo(userInfo = USER_INFO) {
    return auth.clear(userInfo);
  },

  /**
   * Returns data from storage
   * @param  {String} key Item to get from the storage
   * @return {String|Object}     Data from the storage
   */
  get(key) {
    if (localStorage && localStorage.getItem(key)) {
      return localStorage.getItem(key) || null;
    }

    if (sessionStorage && sessionStorage.getItem(key)) {
      return sessionStorage.getItem(key) || null;
    }

    return null;
  },

  getToken(tokenKey = TOKEN_KEY) {
    return auth.get(tokenKey);
  },

  getUserInfo(userInfo = USER_INFO) {
    return auth.get(userInfo);
  },

  /**
   * Set data in storage
   * @param {String|Object}  value    The data to store
   * @param {String}  key
   * @param {Boolean} isLocalStorage  Defines if we need to store in localStorage or sessionStorage
   */
  set(value, key, isLocalStorage) {
    if (value === '') {
      return null;
    }

    if (isLocalStorage && localStorage) {
      return localStorage.setItem(key, value);
    }

    if (sessionStorage) {
      return sessionStorage.setItem(key, value);
    }

    return null;
  },

  setToken(value = '', isLocalStorage = true, tokenKey = TOKEN_KEY) {
    return auth.set(value, tokenKey, isLocalStorage);
  },

  setUserInfo(value = '', isLocalStorage = true, userInfo = USER_INFO) {
    return auth.set(value, userInfo, isLocalStorage);
  },

  async verifyToken() {
    const token = auth.getToken();
    if (token) {
      return await jwt.verify(token, process.env.REACT_APP_TOKEN_SECRET);
    }
    return null;
  }
};

export default auth;
