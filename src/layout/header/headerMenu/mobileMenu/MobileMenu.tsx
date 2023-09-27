import React, {useState} from 'react';
import {S} from "../HeaderMenu_Styles"
import {Menu} from "../menu/Menu";

type MenuItemsType = {
    menuItems: string[]
}
export const MobileMenu:React.FC<{menuItems: string[]}> = (props: MenuItemsType) => {
    const [menuIsOpen , setMenuIsOpen] = useState<boolean>(true)
    const onBurgerBtnClick = () => setMenuIsOpen(!menuIsOpen)
    return (
        <S.StyledMobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={ onBurgerBtnClick }>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={ () => setMenuIsOpen(false)}>
                <Menu  menuItems={props.menuItems}/>
            </S.MobileMenuPopup>
        </S.StyledMobileMenu>
    );
};
