import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400&display=swap');
  display: flex;
  max-width: 900px;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  .divisaosenha {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

    h1 {
      box-shadow: 2px 2px #605e6f;
      padding: 10px;
      text-align: center;
      border-style: double solid double;
      border-color: #605e6f;
      margin-top: 10px;
      margin-bottom: 10px;
      width: 100px;
      height: 40px;
      font: 16px 'Kanit', sans-serif;
      font-weight: bold;
      color: #cdcdcd;
      text-transform: uppercase;
    }

    input {
      background-color: #999999;
      width: 100%;
      height: 40px;
      font: 14px 'Kanit', sans-serif;
      padding: 10px;
      outline: none;
      color: #373545;
      border: none;

      &::placeholder {
        color: #373545;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      width: 300px;
      align-items: center;
      justify-content: center;

      input {
        margin-bottom: 10px;
        background-color: #999999;
        width: 100%;
        height: 40px;
        font: 14px 'Kanit', sans-serif;
        padding: 10px;
        outline: none;
        color: #373545;
        border: none;

        &::placeholder {
          color: #373545;
        }
      }

      span {
        color: #ffff;
        align-self: flex-start;
        margin: 0 0 10px;
      }

      button {
        margin: 10px 0 10px;
        width: 150px;
        height: 44px;
        font: 16px 'Kanit', sans-serif;
        font-weight: bold;
        color: #373545;
        background: #cdcdcd;
        border: 1px solid #ffff;
        border-radius: 6px;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.08, '#cdcdcd')};
        }
      }
    }
  }

  .back {
    margin-top: 10px;
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;
    justify-content: center;
    a {
      background: transparent;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }

      img {
        width: 50px;
        height: 50px;
      }
    }
  }
`;
