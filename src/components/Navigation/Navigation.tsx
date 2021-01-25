import React, { ReactNode } from 'react';

import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import MobileMenu from './MobileMenu/MobileMenu';
import ScreenMenu from './ScreenMenu/ScreenMenu';

import { MobileMenuContainer, ScreenMenuContainer } from './Navigation.styles';

export interface IMenuOption {
  to: string,
  icon: ReactNode,
  label: string,
}

const menuOptions: IMenuOption[] = [
  {
    icon: <ListOutlinedIcon />,
    to: '/shopping/lists',
    label: 'Listy zakupów',
  },
  {
    icon: <ChatBubbleOutlineOutlinedIcon />,
    to: '/messages',
    label: 'Wiadomości',
  },
  {
    icon: <PermIdentityOutlinedIcon />,
    to: '/user',
    label: 'Moje konto',
  },
];

const Navigation = () => {
  const mobileMenu = (
    <MobileMenuContainer>
      <MobileMenu menuOptions={menuOptions} />
    </MobileMenuContainer>
  );

  const screenMenu = (
    <ScreenMenuContainer>
      <ScreenMenu menuOptions={menuOptions} />
    </ScreenMenuContainer>
  );

  return (
    <>
      {mobileMenu}
      {screenMenu}
    </>
  );
};

export default Navigation;
