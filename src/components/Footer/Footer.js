import styled from "styled-components";
import IconButton from "../IconButton/IconButton";
import { useNavigate } from "react-router-dom";
import {
  footerBackgroundColor,
  iconBackPath,
  iconHomePath,
  iconAddPath,
} from "../../variables";

const Box = styled.div`
  width: 100%;
  background-color: ${footerBackgroundColor};
  min-height: 10vh;
  border: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
`;

const Footer = () => {
  const navigate = useNavigate();
  const actionOnClickBack = () => {
    navigate("/home");
  };
  const actionOnClickHome = () => {
    navigate("/home");
  };
  const actionOnClickAdd = () => {
    navigate("/home");
  };

  return (
    <>
      <Box>
        <IconButton
          src={iconBackPath}
          actionOnClick={actionOnClickBack}
        ></IconButton>
        <IconButton
          src={iconHomePath}
          actionOnClick={actionOnClickHome}
        ></IconButton>
        <IconButton
          src={iconAddPath}
          actionOnClick={actionOnClickAdd}
        ></IconButton>
      </Box>
    </>
  );
};

export default Footer;
