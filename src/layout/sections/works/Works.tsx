import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/menu/SectionTitle";
import {Menu} from "../../header/Menu";
import {FlexWrapper} from "../../../components/menu/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "../../../assets/images/project1.jpg"
import todolistImg from "../../../assets/images/project2.jpg"
import rickmorthyImg from "../../../assets/images/project3.jpg"
import cardsImg from "../../../assets/images/project4.jpg"

const menuItems = ["All" , "Landing Page" , "REACT" , "SPA" ]
export const Works = () => {
    return (
        <StyledWorks>
<SectionTitle> My Works </SectionTitle>
            <Menu menuItems={menuItems}/>
            <FlexWrapper justify={'space-around'} wrap={'wrap'}>
                <Work src={todolistImg} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."} title={"Todolist"}/>
                <Work src={cardsImg} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."} title={"Cards"}/>
                <Work src={rickmorthyImg} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."} title={"Ricky&Morthy"}/>
                <Work src={socialImg} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."} title={"SocialNetwork"}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  background-color: rgba(96, 111, 195, 0.51);
  min-height: 100vh;
`
