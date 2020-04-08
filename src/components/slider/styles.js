import styled, { css } from "styled-components";

export const SliderContainer = styled.div`
  position: relative;
  background: linear-gradient(to right, #c6ffdd, #fbd786, #f7797d);
  overflow-x: hidden;
  width: 100%;
  height: ${props => props.height || "100vh"};
`;

export const SliderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: stretch;
`;

export const SliderItem = styled.div`
  &.active .intro {
    transform: scale(1);
  }
  .intro {
    position: relative;
    height: 100vh;
    width: 100vw;
    background-image: url(${props => props.background});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    width: ${props => props.width + "px" || "100%"};
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(0.95, 0.9);
    transition: all 0.2s ease-in;
    &:before {
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content:'';
      background: rgba(0, 0, 0, 0.6);
      user-select: none;
    }
    .intro-content {
      margin-bottom: 100px;
      padding: 0 20px;
      text-align: center;
    }
    .title {
      margin-bottom: 10px;
      font-size: 120px;
      font-weight: 900;
      text-transform: uppercase;
      line-height: 120px;
      letter-spacing: 20px;
      @media screen and (max-width: 869px) {
        font-size: 80px;
        line-height: 80px;
        letter-spacing: 15px;
      }
      @media screen and (max-width: 569px) {
        font-size: 40px;
        line-height: 40px;
      }
    }
    .subtitle {
      font-size: 20px;
      font-weight: 500;
      text-transform: uppercase;
      line-height: 42px;
      letter-spacing: 25px;
      @media screen and (max-width: 869px) {
        letter-spacing: 18px;
        line-height: 36px
      }
      @media screen and (max-width: 569px) {
        letter-spacing: 10px;
        font-size: 14px;
        line-height: 28px;
      }
    }
    .info-scroll {
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 12px;
      font-weight: 300;
      letter-spacing: 5px;
      &:after {
        content: '';
        display: block;
        margin: 20px auto 0;
        width: 1px;
        height: 60px;
        background: #fff;
      }
    }
  }
`;

export const SlideContent = styled.div`
  padding: 80px 0;
  height: calc(100% - 100vh);
  background: #020202;
  .wrapper {
    margin: 0 auto;
    max-width: 1110px;
    @media screen and (max-width: 1270px) {
        padding: 0 80px;
        max-width: none;
    }
    @media screen and (max-width: 850px) {
        padding: 0px 40px;
    }
    @media screen and (max-width: 480px) {
        padding: 0px 24px;
    }
  }
  .info-content {
    margin-bottom: 80px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @media screen and (max-width: 600px) {
      margin-bottom: 60px;
    }
    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 15px;
      p {
        margin-right: 5px;
      }
    }
  }
  .video-content {
    margin: 80px 0;
    @media screen and (max-width: 600px) {
      margin: 60px 0;
    }
    .video {
      display: flex;
      justify-content: center;
      align-items: center;
      iframe,
      video {
        @media screen and (min-width: 601px) {
          width: 560px;
          height: 315px;
        }
      }
    }
  }
  .text-content {
    p {
      margin: 0 auto;
      max-width: 600px;
      font-size: 16px;
      line-height: 26px;
      font-weight: 300;
      text-align: center;
    }
  }
  .image-content {
    margin: 80px 0;
    @media screen and (max-width: 600px) {
      margin: 60px 0;
    }
    .image {
      margin: 0 auto 80px;
      max-width: 600px;
    }
  }
`

export const Navigation = styled.ul`
  position: absolute;
  bottom: 24px;
  left: 24px;
  display: flex;
`;

export const NavigationItem = styled.li`
  font-size: 15px;
  font-weight: 900;
  color: #828282;
  transition: color 0.3s ease-in-out;
  user-select: none;
  cursor: pointer;

  ${props =>
    props.active &&
    css`
      color: #fff;
    `};

    &:not(:last-child) {
      margin-right: 20px;
    }

    &:hover {
      color: #fff;
    }
`;

export const Control = styled.div`
  position: absolute;
  width: 96px;
  height: 44px;
  display: flex;
  align-items: center;
  background: #323335;
  font-size: 20px;
  font-family: 500;
  user-select: none;
  cursor: pointer;

  span {
    padding-top: 3px;
    display: block;
    transform: scaleX(3);
    font-size: 12px;
    transition: all 0.3s ease-in-out;
  }
`;

export const ControlLeft = styled(Control)`
  justify-content: flex-end;
  bottom: 16.67%;
  left: 10.36%;
  &:hover {
    span {
      margin-right: 32px;
    }
  }

  p {
    margin-right: -15px;
  }

  span {
    margin-right: 25px;
  }
`;

export const ControlRight = styled(Control)`
  justify-content: flex-start;
  top: 14.44%;
  right: 10.36%;
  &:hover {
    span {
      margin-left: 32px;
    }
  }

  p {
    margin-left: -16px;
  }

  span {
    margin-left: 25px;
  }
`;