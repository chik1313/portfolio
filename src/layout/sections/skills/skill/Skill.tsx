import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from "../Skills_Styles"


type SkillsPropsType = {
    title: string,
    text: string
    icon: string
}
export const Skill = ({title, text, icon}: SkillsPropsType) => {
    return (
        <S.StyledSkill>
            <FlexWrapper align={"center"} direction={"column"}>
                <S.IconWrapper>
                    <Icon iconId={icon}/>
                </S.IconWrapper>
                <S.SkillTitle>{title}</S.SkillTitle>
                <S.SkillText>{text}</S.SkillText>
            </FlexWrapper>
        </S.StyledSkill>
    );
};



