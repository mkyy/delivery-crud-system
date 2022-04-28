import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  position: relative;

  #clients {
    width: 15vw;
    height: 100%;
    -webkit-appearance: none;
    background-color: transparent;
    border-bottom-left-radius: 15px;
    font-size: 1rem;
    option:hover {
      cursor: pointer;
      background-color: #eee;
      font-size: 1.2rem;
    }
  }

  .stats {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 17vw;
    top: 5vh;
    width: 61vw;
    height: calc(100% - 10vh);
    border: 1px solid #000;
    padding: 15px;

    .info-box {
      margin-left: 5vw;
      margin-top: 20px;
    }

    img {
      width: 170px;
      height: 170px;
      border-radius: 50%;
      align-self: center;
    }
  }

  .buttons {
    position: absolute;
    bottom: 0;
    right: 0;
    button {
      margin: 30px;
      padding: 15px;
      border-radius: 10px;
      background: #66a6dd;
      border: none;

      &:hover {
        cursor: pointer;
        background: #00a6ff;
      }
    }
    .modify {
      background-color: red;
      &:hover {
        background: red;
      }
    }
  }

  #update-input {
    background-color: transparent;
  }
  .active {
    visibility: visible;
  }
`;
