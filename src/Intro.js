import { useState } from "react";
import { Helmet } from "react-helmet"
import styled, { keyframes } from "styled-components";
import { useHistory } from "react-router-dom";
import logo from "./logo.svg";

const Intro = () => {
  const [isAni, setIsAni] = useState(true);
  const [trans, setTrans] = useState(false);
  const history = useHistory();
  const pageTransition = () => {
    setIsAni(false);
    setTimeout(() => {
        setTrans(true)
        setTimeout(() => {
            history.push('/StarLightBreaker')
        }, 2000)
    }, 100)
  };
  return (
    <>
      <Helmet title="Portfolio. 별빛 (StarLight)" />
      <Style onClick={pageTransition}>
        <Img
          src={logo}
          alt=""
          time={2}
          trans={trans}
          className={`${isAni ? "ani" : ""}`}
        />
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
const Style = styled.div`
  background: #282c34;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  a {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
  &:hover img {
    opacity: 1;
  }
`;
const Img = styled.img`
  width: 70%;
  height: auto;
  opacity: 0.4;
  transform: scale(${(props) => (props.trans ? 0 : 1)});
  transition: opacity .3s, transform 2s;

  &.ani {
    animation: ${rotate} ${(props) => props.time}s 0s infinite linear forwards;
  }
`;
export default Intro;
