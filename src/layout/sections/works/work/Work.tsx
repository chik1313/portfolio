import React from 'react';
import {Link} from "../../../../components/Link";
import {Button} from "../../../../components/Button";
import {S} from "../Works_Styles"

type WorkPropsType = {
    title: string
    text: string
    src: string
    demo: string
    code: string
    display?: string


}
export const Work = ({title, text, src,display,demo,code}: WorkPropsType) => {
    return (
        <S.StyledWork>
            <S.ImageWrapper>
                <S.Image src={src} alt='project-name'/>
                <Button>View Project</Button>
            </S.ImageWrapper>
            <S.Description>
                <S.Title>{title}</S.Title>
                <S.Text>{text}</S.Text>
                <Link active href={demo}>demo</Link>
                <Link href={code}>code</Link>
            </S.Description>
        </S.StyledWork>
    );
};


