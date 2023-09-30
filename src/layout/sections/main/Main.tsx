import React from 'react';
import photo from '../../../assets/images/photo.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "./Main_Styles"
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';




export const Main:React.FC = () => {
    return (
        <S.StyledMain>
            <Container>
            <FlexWrapper align={"center"} justify={"space-around"} wrap={'wrap'}>
                <div>
                    <S.SmallText>Hi There</S.SmallText>
                    <S.Name>I am <span>Vladyslav Ochkurov </span></S.Name>
                    <S.MainTitle>
                        <Typewriter
                            options={{
                                strings: ['A Web Developer.'],
                                autoStart: true,
                            }}
                        />
                    </S.MainTitle>
                </div>
                <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px">
                <S.PhotoWrapper><S.Photo src={photo} alt=""/></S.PhotoWrapper>
                </Tilt>
            </FlexWrapper>
            </Container>
        </S.StyledMain>
    );
};


