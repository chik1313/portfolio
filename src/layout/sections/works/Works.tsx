import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {Work} from "./work/Work";
import socialImg from "../../../assets/images/project3.jpeg"
import todolistImg from "../../../assets/images/project2.jpeg"
import rickmorthyImg from "../../../assets/images/project4.jpg"
import cardsImg from "../../../assets/images/project1.jpeg"
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from "./Works_Styles"

const menuItems = ["All", "Landing Page", "REACT", "SPA"]
const WorksData = [
    {
        src: todolistImg,
        title: "Task manager" ,
        text: "React, Redux Toolkit, TypeScript, Formik, MUI, Axios, Redux-thunk, Unit-Tests, Storybook, React-Router-dom, Yup."
    },
    {
        src: cardsImg,
        title: "Study cards",
        text: "React, Redux, TypeScript, Formik, Axios, Redux-thunk, React-Router-dom, Yup, MUI, Sass."
    },
    {
        src: rickmorthyImg,
        title: "Rick & Morty",
        text: "NextJS , React-Query, Axios , React-Router-dom, Sass."
    },
    {
        src: socialImg,
        title: "Communication platform",
        text:"React, Redux, TypeScript, Axios, Redux-thunk,  React-Router-dom."
    },
]
export const Works:React.FC = () => {
    return (
        <S.StyledWorks>
            <Container>
                <SectionTitle> My Works </SectionTitle>
                <TabMenu menuItems={menuItems}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={'wrap'}>
                    {WorksData.map((work,index) => {
                        return <Work title={work.title} text={work.text} src={work.src} key={index}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.StyledWorks>
    );
};


