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

const MainBody = () => {
  return (
    <>
      <Box>
        <p>MAIN PAGE</p>
      </Box>
    </>
  );
};

export default MainBody;
