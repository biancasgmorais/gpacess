import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400&display=swap');

  display: flex;
  max-width: 900px;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  h1 {
    box-shadow: 2px 2px #605e6f;
    padding: 10px;
    text-align: center;
    border-style: double solid double;
    border-color: #605e6f;
    margin-top: 10px;
    text-align: center;
    width: 100px;
    height: 40px;
    font: 16px 'Kanit', sans-serif;
    font-weight: bold;
    color: #cdcdcd;
    text-transform: uppercase;
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

  .tabela {
    table {
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

        a {
          margin-right: 5px;
        }

        button {
          background: none;
          border: none;
          margin-right: 2px;
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
