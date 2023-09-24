import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {Work} from "./work/Work";
import socialImg from "../../../assets/images/project3.jpeg"
import todolistImg from "../../../assets/images/project2.jpeg"
import rickmorthyImg from "../../../assets/images/project4.jpg"
import cardsImg from "../../../assets/images/project1.jpeg"
import {Container} from "../../../components/Container";

const menuItems = ["All", "Landing Page", "REACT", "SPA"]
export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle> My Works </SectionTitle>
                <TabMenu menuItems={menuItems}/>
                <Grid>
                    <Work src={todolistImg}
                          text={"React, Redux, TypeScript, Formik, MUI, Axios,Redux-thunk, React-Router-dom. Yup."}
                          title={"Task manager"}/>
                    <Work src={cardsImg}
                          text={"React, Redux, TypeScript, Formik, Axios, Redux-thunk, React-Router-dom, Yup, MUI, Sass."}
                          title={"Study cards"}/>
                    <Work src={rickmorthyImg} text={"NextJS , React-Query, Axios , React-Router-dom, Sass."}
                          title={"Rick & Morty"}/>
                    <Work src={socialImg} text={"React, Redux, TypeScript, Axios, Redux-thunk, React-Router-dom."}
                          title={"Communication platform"}/>
                </Grid>
            </Container>
        </StyledWorks>
    );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const StyledWorks = styled.section`
`
