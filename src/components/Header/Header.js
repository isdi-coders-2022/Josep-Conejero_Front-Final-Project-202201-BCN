import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  background-color: #e5e5e5;
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
  color: black;
  padding: 0;
  background-color: transparent;
  text-align: center;
  font-size: 22px;
  font-weight: 400;
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
