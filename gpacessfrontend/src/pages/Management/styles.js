import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400&display=swap');
  background: #373545;
  display: flex;
  max-width: 900px;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  .gerenciamento {
    display: flex;
    flex-direction: row;
    margin-top: 20px;

    h1 {
      width: 500px;
      height: 25px;
      font: 16px 'Kanit', sans-serif;
      color: #ffffff;
    }

    #link1 {
      margin: 0px 30px 10px 0;
      color: #cdcdcd;
      font: 16px 'Roboto', sans-serif;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }

    #link2 {
      color: #cdcdcd;
      font: 16px 'Roboto', sans-serif;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }

  .nv {
    display: flex;
    flex-direction: row;
    margin-top: 10px;

    .icon {
      padding: 10px;
      background: #999999;
      color: #373545;
      height: 40px;
      text-align: center;
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
  }

  .tabela table {
    margin-top: 10px;
    align-items: center;
    justify-content: center;
    width: 800px;
    display: block;
    position: relative;
    overflow-y: auto;
    height: 300px;
    border-collapse: collapse;

    ::-webkit-scrollbar {
      width: 12px;
    }

    ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    }

    th {
      width: 800px;
      height: 30px;
      font: 14px 'Kanit', sans-serif;
      font-weight: bold;
      color: #373555;
      background-color: #cdcdcd;
      border: 2px transparent;
      border-bottom: 1px solid #373555;
    }

    td {
      width: 800px;
      height: 30px;
      text-align: center;
      align-items: center;
      font: 14px 'Kanit', sans-serif;
      color: #373555;
      background-color: #cdcdcd;
      border-bottom: 1px solid #373555;
      padding: 5px 5px;
    }
  }

  button {
    margin-top: 10px;
    height: 50px;
    width: 200px;
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

  img {
    margin-top: 20px;
    height: 50px;
  }
`;
