import styled from "styled-components";
import { headerBackgroundColor, mainTextColor } from "../../variables";

const Box = styled.div`
  width: 100%;
  background-color: ${headerBackgroundColor};
  min-height: 10vh;
  border: 0px;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const ImageBox = styled.div`
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const Image = styled.img`
  border: solid black 1px;
  background-color: ${(props) => props.inputColor};
  border-radius: 10px;
  height: 40px;
  width: 40px;
  padding: 5px;
`;

const TitleText = styled.p`
  color: ${mainTextColor};
  padding: 0;
  background-color: transparent;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  margin: 10px;
`;

const Header = ({ title, picture, backgroundColor, alternativeTextImage }) => {
  return (
    <>
      <Box>
        <ImageBox>
          <Image
            inputColor={backgroundColor}
            alt={alternativeTextImage}
            src={picture}
          ></Image>
        </ImageBox>
        <TitleText>{title}</TitleText>
        {/* <Logout></Logout> */}
      </Box>
    </>
  );
};

export default Header;
