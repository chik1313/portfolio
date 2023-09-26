import React from 'react';
import {Menu} from "../menu/Menu";
import {S} from "../HeaderMenu_Styles"

type MenuItemsType = {
    menuItems: string[]
}
export const DesktopMenu:React.FC<MenuItemsType> = (props: MenuItemsType) => {
    return (
        <S.StyledDesktopMenu>
            <Menu  menuItems={props.menuItems}/>
        </S.StyledDesktopMenu>
    );
};

