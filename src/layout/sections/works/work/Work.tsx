import React from 'react';
import {Link} from "../../../../components/Link";
import {Button} from "../../../../components/Button";
import {S} from "../Works_Styles"

type WorkPropsType = {
    title: string
    text: string
    src: string
    display?: string

}
export const Work = ({title, text, src,display}: WorkPropsType) => {
    return (
        <S.StyledWork>
            <S.ImageWrapper>
                <S.Image src={src} alt='project-name'/>
                <Button>View Project</Button>
            </S.ImageWrapper>
            <S.Description>
                <S.Title>{title}</S.Title>
                <S.Text>{text}</S.Text>
                <Link href={""}>demo</Link>
                <Link href={""}>code</Link>
            </S.Description>
        </S.StyledWork>
    );
};


