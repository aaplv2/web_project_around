class Api {
  constructor(baseUrl, headers) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  handleRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: {
        authorization: this._headers,
        "Content-Type": "application/json",
      },
    }).then(this.handleRes);
  }
  getUserInfo() {
    return fetch(`${this._baseUrl}/users`, {
      method: "GET",
      headers: {
        authorization: this._headers,
        "Content-Type": "application/json",
      },
    }).then(this.handleRes);
  }
  updateUserInfo(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        about,
      }),
    }).then(this.handleRes);
  }
  addCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: {
        authorization: this._headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        link,
      }),
    }).then(this.handleRes);
  }
  likeCounter(id) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: {
        authorization: this._headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    }).then(this.handleRes);
  }
}

const api = new Api(
  // `https://664e5457fafad45dfadfcd68.mockapi.io/`,
  `https://around.nomoreparties.co/v1/web_es_10`,
  "bf26d6eb-e32a-4dfe-be0d-af6eb19b0a81"
);

export default api;
