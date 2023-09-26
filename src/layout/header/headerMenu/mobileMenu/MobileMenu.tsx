import React from 'react';
import {S} from "../HeaderMenu_Styles"
import {Menu} from "../menu/Menu";

type MenuItemsType = {
    menuItems: string[]
}
export const MobileMenu:React.FC<{menuItems: string[]}> = (props: MenuItemsType) => {
    return (
        <S.StyledMobileMenu>
            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={false}>
                <Menu  menuItems={props.menuItems}/>
            </S.MobileMenuPopup>
        </S.StyledMobileMenu>
    );
};
