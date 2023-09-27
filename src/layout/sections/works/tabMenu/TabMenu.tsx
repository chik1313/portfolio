import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";


type PropsType = {
    tabsItems:  Array<{status: "all" | "next" | "react"  , title: string}>,
    changeFilterStatus: (value: "all" | "next" | "react" ) => void
    currentFilterStatus:"all" | "next" | "react"
}

export const TabMenu = (props: PropsType) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.tabsItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link active={ props.currentFilterStatus === item.status }  as={"button"}
                              onClick={() => {props.changeFilterStatus(item.status)}}>
                            {item.title}
                        </Link>
                    </ListItem>
                })}
            </ul>
        </StyledTabMenu>
    );
};
const StyledTabMenu = styled.nav`
  
  ul {
    display: flex;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    margin: 0 auto 40px;
  }
`
const ListItem = styled.li`
  
`

