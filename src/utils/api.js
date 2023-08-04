class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }
  /*Проверка ответа */
  _checkErrors(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }
  /*Загрузка информации о пользователе с сервера */
  getInitialInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    }).then(this._checkErrors);
  }
  /*Загрузка карточек с сервера */
  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkErrors);
  }
  /*Редактирование профиля */
  addUserInfo(dateInputProfile) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: dateInputProfile.name,
        about: dateInputProfile.job,
      }),
    }).then(this._checkErrors);
  }
  /*Обновление аватара пользователя */
  addNewAvatar(dataAvatar) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: dataAvatar.avatar,
      }),
    }).then(this._checkErrors);
  }
  /*Добавление новой карточки */
  addNewCards(name, link) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, link }),
    }).then(this._checkErrors);
  }
  /*Постановка лайка *//*
  setLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._checkErrors);
  }*/
  /*Снятие лайка *//*
  deleteLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkErrors);
  }*/
  /*проверка статуса лайка*/
  changeLikeCardStatus(cardId, isLiked) {
    const method = isLiked ? 'PUT' : 'DELETE';
     return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: method,
      headers: this._headers,
    }).then(this._checkErrors);
  }
  /*Удаление карточки */
  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkErrors);
  }
}

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-68",
  headers: {
    authorization: "3212e562-199c-4acd-ac86-0318a7669948",
    "Content-Type": "application/json",
  },
});

export default api;
