import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from "./Footer_Styled"

const socialItemData = [
    {iconId: "instagram"},
    {iconId: "telegram"},
    {iconId: "linkedin"},
]
export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.Name>Vladyslav</S.Name>
                <S.SocialList>
                    {socialItemData.map((s, index) => {
                        return <S.SocialItem>
                            <S.SocialLink>
                                <Icon height={'21'} width={'21'} viewBox={'0 0 21 21'} iconId={s.iconId}/>
                            </S.SocialLink>
                        </S.SocialItem>
                    })}
                </S.SocialList>
                <S.Copyright>© 2023 Vladyslav Ochkurov, All Rights Reserved.</S.Copyright>
            </FlexWrapper>

        </S.Footer>
    );
};

