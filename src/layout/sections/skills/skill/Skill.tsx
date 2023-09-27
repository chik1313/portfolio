import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from "../Skills_Styles"
import Typewriter from 'typewriter-effect';


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
                <S.SkillTitle>
                    {title}
                </S.SkillTitle>
                <S.SkillText>
                    <Typewriter
                        options={{
                            strings: [text],
                            autoStart: true,
                            loop: true,
                            delay:40,
                            deleteSpeed:9999999

                        }}
                    />
                </S.SkillText>
            </FlexWrapper>
        </S.StyledSkill>
    );
};



