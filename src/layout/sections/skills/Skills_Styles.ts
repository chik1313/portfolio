import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const StyledSkills = styled.section`

`
const StyledSkill = styled.div`
  width: 330px;
  padding: 42px 20px 52px;
  flex-grow: 1;
  
  @media ${theme.media.mobile} {
    padding: 62px 0 40px;
  }
`
const SkillTitle = styled.h3`
  margin: 70px 0 15px;
  text-transform: uppercase;
`
const SkillText = styled.p`
  text-align: center; 
`
const IconWrapper = styled.div`
    position: relative;
  &::before {
    content: "";
    display: inline-block;
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.10);
    transform: rotate(45deg) translate(-50%, -50%);
    
    position: absolute;
    left: 50%;
    top: 50%;
    transform-origin: top left;
  }
`

export const S = {
    StyledSkills,
    StyledSkill,
    SkillTitle,
    SkillText,
    IconWrapper

}
