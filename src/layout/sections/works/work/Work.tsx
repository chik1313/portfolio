import React from 'react';
import styled from "styled-components";

type WorkPropsType = {
    title: string
    text: string
    src: string
}
export const Work = ({title, text, src}: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={src} alt='project-name'/>
            <Title>{title}</Title>
            <Text>{text}</Text>
            <Link href={""}>demo</Link>
            <Link href={""}>code</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  background-color: rgba(251, 193, 39, 0.63);
  max-width: 540px;
  width: 100%;
 margin: 20px;
`
const Image = styled.img`
    width: 100%;
  height: 260px;
  object-fit: cover;
`
const Link = styled.a`
`
const Title = styled.h3`
`
const Text = styled.p`
`
