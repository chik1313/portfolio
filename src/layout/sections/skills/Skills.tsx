import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {S} from "./Skills_Styles"


const skillData = [
    {
        title: 'react',
        icon: 'react',
        text: 'is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.'
    },
    {
        title: 'redux',
        icon: 'redux',
        text: 'is a library for managing and updating application state, using events called "actions". It serves as a centralized store for state that needs to be used across your entire application'
    },
    {
        title: "typescript",
        icon: "typescript",
        text: 'is a syntactic superset of JavaScript which adds static typing. This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.'
    },
    {
        title: "Rest API",
        icon: "restApi",
        text: 'is an application programming interface (API or web API) that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services'
    },
    {
        title: 'css3',
        icon: 'css',
        text: 'is the language for describing the presentation of Web pages, including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices'
    },
    {
        title: 'html5',
        icon: 'codeSvg',
        text: 'is the most basic building block of the Web. It defines the structure of web content. Other technologies besides are generally used to describe a web page appearance or functionality'
    }
]

export const Skills = () => {
    return (
        <S.StyledSkills id={"skills"}>
            <Container>
                <SectionTitle> My skills </SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    {skillData.map((skill,index)=> {
                        return <Skill
                        title={skill.title}
                        text={skill.text}
                        icon={skill.icon}
                        key={index}
                        />
                    })}
                </FlexWrapper>
            </Container>
        </S.StyledSkills>
    );
};

