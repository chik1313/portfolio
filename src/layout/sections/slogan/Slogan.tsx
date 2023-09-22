import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/menu/SectionTitle";
import {Button} from "../../../components/menu/Button";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <SectionTitle>I Am Available For Freelance</SectionTitle>
            <Button>Hire Me</Button>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
  min-height: 30vh;
  background-color: rgba(239, 232, 96, 0.71);
`