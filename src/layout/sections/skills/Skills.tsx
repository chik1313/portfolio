import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/menu/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/menu/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle> My skills </SectionTitle>
            <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                <Skill title={'react'}
                       text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}
                       icon={'react'}
                />
                <Skill
                    text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}
                    title={'redux'}
                    icon={'redux'}/>
                <Skill title={'css'}
                       text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}
                       icon={'css'}/>
                <Skill
                    title={'html5'}
                    text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}
                    icon={'codeSvg'}/>
                <Skill
                    title={"typescript"}
                    text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}
                    icon={"typescript"}/>
                <Skill
                    title={"styled-components"}
                    text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}
                    icon={"styled-components"}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: rosybrown;
  min-height: 100vh;
`
