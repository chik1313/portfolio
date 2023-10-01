import React, {useState} from 'react';
import {S} from "../HeaderMenu_Styles"
import {Menu} from "../menu/Menu";

export const MobileMenu:React.FC = () => {
    const [menuIsOpen , setMenuIsOpen] = useState<boolean>(true)
    const onBurgerBtnClick = () => setMenuIsOpen(!menuIsOpen)
    return (
        <S.StyledMobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={ onBurgerBtnClick }>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={ () => setMenuIsOpen(false)}>
                <Menu />
            </S.MobileMenuPopup>
        </S.StyledMobileMenu>
    );
};
