import { Component } from 'react';
import { setIdToken, setAccessToken } from '../utils/AuthService';

class Callback extends Component {

  componentDidMount() { //вызывается сразу после монтирования (то есть, вставки компонента в DOM).
    setAccessToken(); // получаем и сохраняем токен в локальном хранилище.
    setIdToken(); // получаем и сохраняем id токена в локальном хранилище.
    window.location.href = "/";
  }

  render() {
    return null;
  }
}

export default Callback;