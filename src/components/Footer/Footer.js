import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  background-color: #e5e5e5;
  min-height: 10vh;
  border: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const Image = styled.img`
  color: red;
  height: 30px;
  width: 30px;
  padding: 5px;
`;

const TitleText = styled.p`
  color: black;
  padding: 0;
  background-color: transparent;
  text-align: center;
  font-size: 22px;
  margin: 10px;
`;

const Footer = () => {
  return (
    <>
      <Box>
        <Image src={"img/back.svg"}></Image>
        <Image src={"img/home.svg"}></Image>
        <Image src={"img/adding-button.svg"}></Image>
      </Box>
    </>
  );
};

export default Footer;
