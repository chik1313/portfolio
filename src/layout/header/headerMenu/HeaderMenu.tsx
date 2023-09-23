import React from 'react';
import styled from "styled-components";

type MenuItemsType = {
    menuItems: string[]
}
export const HeaderMenu = (props: MenuItemsType) => {
    return (
        <StyleHeaderMenu>
            <ul>
                {props.menuItems.map((item,index) => {
                    return <ListItem key={index}>
                        <Link href="">
                            {item}
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                            <Mask>
                            <span>{item}</span>
                        </Mask>

                        </Link></ListItem>
                })}
            </ul>
        </StyleHeaderMenu>
    );
};
const StyleHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`
const ListItem = styled.li`
`
const Link = styled.a`
  color: #7572D5;
  text-align: center;
  font-family: "Josefin Sans",sans-serif;
  font-size: 30px;
  font-weight: 400;
`
