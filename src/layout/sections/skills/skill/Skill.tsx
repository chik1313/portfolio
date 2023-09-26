import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";


type SkillsPropsType = {
    title: string,
    text: string
    icon: string
}
export const Skill = ({title, text, icon}: SkillsPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper align={"center"} direction={"column"}>
                <IconWrapper>
                    <Icon iconId={icon}/>
                </IconWrapper>

                <SkillTitle>{title}</SkillTitle>
                <SkillText>{text}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: 330px;
  padding: 62px 20px 40px;
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
export const IconWrapper = styled.div`
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

