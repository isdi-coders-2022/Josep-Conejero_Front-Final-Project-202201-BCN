import styled from "styled-components";
import propTypes from "prop-types";

const ButtonImg = styled.button`
  background-color: #d715c3;
  border-radius: 10px;
  margin: 10px;
  border: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 220px;
  height: 70px;
  cursor: pointer;
`;

const TitleText = styled.p`
  color: white;
  margin: 0;
  padding: 0;
  background-color: transparent;
  text-align: right;
  font-size: 20px;
  padding-right: 10px;
`;

const ImageBox = styled.div`
  border-radius: 10px;
  position: relative;
  left: -15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  border: solid black 1px;
  background-color: ${(props) => props.inputColor};
  border-radius: 10px;
  height: 40px;
  width: 40px;
  padding: 5px;
`;

const ButtonImage = ({
  favClass,
  imageAlt,
  image,
  actionOnClick,
  title,
  inputColor,
}) => {
  return (
    <ButtonImg
      className={favClass}
      type="button"
      onClick={actionOnClick}
      title={title}
    >
      <ImageBox>
        <Image inputColor={inputColor} alt={imageAlt} src={image}></Image>
      </ImageBox>
      <TitleText>{title}</TitleText>
    </ButtonImg>
  );
};

ButtonImage.propTypes = {
  image: propTypes.string,
  imageAlt: propTypes.string,
  onclick: propTypes.func,
};

export default ButtonImage;
