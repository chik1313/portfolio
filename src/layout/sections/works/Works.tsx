import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/menu/SectionTitle";

export const Works = () => {
    return (
        <StyledWorks>
<SectionTitle> My Works </SectionTitle>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  background-color: rgba(96, 111, 195, 0.51);
  min-height: 100vh;
`
