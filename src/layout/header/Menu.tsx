import React from 'react';
import styled from "styled-components";

type MenuItemsType = {
    menuItems: string[]
}
export const Menu = (props: MenuItemsType) => {
    return (
        <StyleMenu>
            <ul>
                {props.menuItems.map((item,index) => {
                    return <li key={index}><a href="">{item}</a></li>
                })}
            </ul>
        </StyleMenu>
    );
};
const StyleMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`
