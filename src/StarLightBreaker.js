import styled, { keyframes } from "styled-components";
import { Helmet } from "react-helmet"
import logo from "./logo.svg";
import Mp3 from "./mp3";

const Home = () => {
  const imgArr = Array(63).fill('')

  return (
    <>
      <Helmet title="별빛이 내린다 (StarLight Breaker)" />
      <Style>
        <Mp3 />
        <div className="expansion">
          {imgArr.map(v => <Img src={logo} alt="" time={Math.random() * 1.1} />)}
        </div>
      </Style>
    </>
  );
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const view = keyframes`
  0% {
    transform: scale(0) rotate(0deg);
  }
  20% {
    transform: scale(0.02) rotate(720deg);
  }
  100% {
    transform: scale(1) rotate(1440deg);
  }
`;
const Style = styled.div`
  background: #282c34;
  height: 100vh;
  display: flex;
  overflow: hidden;

  .expansion {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    transform: scale(0);
    animation: ${view} .9s 0s 1 cubic-bezier(1, 0.07, 0.2, 0.05) forwards;
  }
`;
const Img = styled.img`
  width: 14%;
  height: auto;
  animation: ${rotate} ${(props) => props.time}s 0s infinite linear forwards;
`;

export default Home;
