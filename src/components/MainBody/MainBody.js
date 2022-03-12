import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  /* background-color: #ddd; */
  background-color: #fff;
  min-height: 80vh;
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
  margin: 10px;
`;

const MainBody = () => {
  return (
    <>
      <Box>
        {/*         <ImageBox>
          <Image
            inputColor={backgroundColor}
            alt={alternativeTextImage}
            src={picture}
          ></Image>
        </ImageBox>
 */}
      </Box>
    </>
  );
};

export default MainBody;
