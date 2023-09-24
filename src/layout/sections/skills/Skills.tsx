import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/menu/FlexWrapper";
import {SectionTitle} from "../../../components/menu/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/menu/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
            <SectionTitle> My skills </SectionTitle>
            <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                <Skill title={'react'}
                       text={'is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.'}
                       icon={'react'}
                />
                <Skill
                    text={'is a library for managing and updating application state, using events called "actions". It serves as a centralized store for state that needs to be used across your entire application'}
                    title={'redux'}
                    icon={'redux'}/>
                <Skill
                    title={"typescript"}
                    text={'is a syntactic superset of JavaScript which adds static typing. This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.'}
                    icon={"typescript"}/>
                <Skill
                    title={"Rest API"}
                    text={'is an application programming interface (API or web API) that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services'}
                    icon={"restApi"}
                />
                <Skill title={'css3'}
                       text={'is the language for describing the presentation of Web pages, including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices'}
                       icon={'css'}/>
                <Skill
                    title={'html5'}
                    text={'is the most basic building block of the Web. It defines the structure of web content. Other technologies besides are generally used to describe a web page appearance or functionality'}
                    icon={'codeSvg'}/>
            </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
 
`
