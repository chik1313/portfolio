import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";


type SkillsPropsType = {
    title: string,
    text: string
    icon: string
}
export const Skill = ({title, text, icon}: SkillsPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={icon}/>
            <SkillTitle>{title}</SkillTitle>
            <SkillText>{text}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: 30%;
  background-color: rgba(232, 238, 162, 0.45);
  margin: 10px;
`
const SkillTitle = styled.h2`

`
const SkillText = styled.p`

`
