class Api{
  constructor(options){
    this.url = options.url;
  }

  //обработка ответа от сервера
  _handleResponse(res){
    if(!res.ok) Promise.reject(`Ошибка: ${res.status}`);
    return res.json();
  }

  //импорт из файла
  importCardInfo(){
    return fetch(`${this.url}/import`, {
      method: 'GET',
    })
      .then(this._handleResponse);
  }

  //экспорт в файл
  exportCardInfo(data){
    return fetch(`${this.url}/export`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(this._handleResponse);
  }
}


const api = new Api({
  url: 'http://localhost:3100'
});

export default api;