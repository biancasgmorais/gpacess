import styled from 'styled-components';

export const Content = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400&display=swap');

  background: #cdcdcd;
  height: 50px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      height: 50px;
      padding: 5px;
    }

    a {
      font: 20px 'Kanit', sans-serif;
      font-weight: bold;
      color: #373545;
      margin-right: 10px;
      padding-right: 10px;
    }

    button {
      margin-top: 5px;
      background: none;
      border: none;
    }
  }
`;
