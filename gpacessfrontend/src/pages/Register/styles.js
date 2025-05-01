import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;
  background: #373545;
  display: flex;
  justify-content: center;
  align-center: center;
`;

export const Navigation = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400&display=swap');

  width: 100%;
  max-width: 315px;
  text-align: center;

  img {
    margin-top: 30px;
    height: 100px;
  }

  h1 {
    font-family: 'Kanit', sans-serif;
    font-size: 32px;
    color: #cdcdcd;
  }

  form {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    .input-container {
      display: -ms-flexbox; /* IE10 */
      display: flex;
      width: 100%;
      margin-bottom: 5px;
    }

    .icon {
      padding: 10px;
      background: #999999;
      color: #373545;
      height: 40px;
      text-align: center;
    }

    .input-field {
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
      margin: 0 0 10px;
      font: 12px 'Kanit', sans-serif;
    }

    button {
      margin: 10px 0 10px;
      width: 150px;
      height: 44px;
      font: 21px 'Kanit', sans-serif;
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

    a {
      color: #cdcdcd;
      margin-top: 10px;
      font: 14px 'Kanit', sans-serif;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }

  .rodape {
    display: flex;
    flex-direction: row;
    align-items: center;

    #img1 {
      margin: 10px 30px;
      height: 50px;
    }

    #img2 {
      margin: 10px;
      height: 80px;
    }
  }
`;
