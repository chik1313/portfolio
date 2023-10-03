import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "../../../components/Link";
import {Button} from "../../../components/Button";
import {FlexWrapper} from "../../../components/FlexWrapper";

const StyledWork = styled.div`
  background-color: ${theme.colors.secondaryBg};
  /*flex: 1 1 45%;
  width: 330px;
  flex-grow: 1;*/

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }
  
`
const ImageWrapper = styled.div`
  position: relative;
  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -40%);
    transition: ${theme.animations.transaction};

    &::before {
      width: 100%;
      height: 100%;
    }
  }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(4px);
      opacity: 0;
      transition: ${theme.animations.transaction};
    }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }


@media ${theme.media.mobile} {
  &::before {
    opacity: 1;
  }

  ${Button} {
    opacity: 1;
  }
}

`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`
const Description = styled.div`
  padding: 25px 20px;
`
const Title = styled.h3`
`
const Text = styled.p`
  margin: 14px 0 10px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const StyledWorks = styled.section`
    ${FlexWrapper} {
      gap: 30px;
    }
`

export const S = {
    StyledWork,
    ImageWrapper,
    Image,
    Description,
    Title,
    Text,
    Grid,
    StyledWorks
}
