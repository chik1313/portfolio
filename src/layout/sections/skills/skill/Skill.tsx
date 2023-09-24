import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/menu/FlexWrapper";


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
  width: 380px;
  padding: 62px 20px 40px;
`
const SkillTitle = styled.h2`
  margin: 70px 0 15px;

  font-family: "Josefin Sans", sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
`
const SkillText = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
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

