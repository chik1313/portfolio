import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/menu/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
                <Name>Vladyslav</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={"instagram"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={"telegram"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={"linkedin"}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2023 Vladyslav Ochkurov, All Rights Reserved.</Copyright>
            </FlexWrapper>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: #a2ebff;
  min-height: 20vh;
`
const Name = styled.span`
`
const SocialList = styled.ul`
    display: flex;
  gap: 30px;
`
const SocialItem = styled.li`
`
const SocialLink = styled.a`
`
const Copyright = styled.small`
`
