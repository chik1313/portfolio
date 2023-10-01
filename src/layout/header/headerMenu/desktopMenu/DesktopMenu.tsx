import React from 'react';
import {Menu} from "../menu/Menu";
import {S} from "../HeaderMenu_Styles"

export const DesktopMenu:React.FC = () => {
    return (
        <S.StyledDesktopMenu>
            <Menu/>
        </S.StyledDesktopMenu>
    );
};

