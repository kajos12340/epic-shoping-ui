import React, { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

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
  tabName: string,
}

const menuOptions: IMenuOption[] = [
  {
    icon: <ListOutlinedIcon />,
    to: '/shopping/lists',
    label: 'Listy zakupów',
    tabName: 'shopping',
  },
  {
    icon: <ChatBubbleOutlineOutlinedIcon />,
    to: '/messages',
    label: 'Wiadomości',
    tabName: 'messages',
  },
  {
    icon: <PermIdentityOutlinedIcon />,
    to: '/user',
    label: 'Moje konto',
    tabName: 'user',
  },
];

const Navigation = () => {
  const [currentActiveTab, setCurrentActiveTab] = useState('');

  const location = useLocation();

  useEffect(() => {
    setCurrentActiveTab('');

    switch (true) {
      case location.pathname.includes('user'):
        setCurrentActiveTab('user');
        break;
      case location.pathname.includes('shopping'):
        setCurrentActiveTab('shopping');
        break;
      case location.pathname.includes('messages'):
        setCurrentActiveTab('messages');
        break;
      default:
        setCurrentActiveTab('shopping');
    }
  }, [location]);

  const mobileMenu = (
    <MobileMenuContainer>
      <MobileMenu menuOptions={menuOptions} currentActiveTab={currentActiveTab} />
    </MobileMenuContainer>
  );

  const screenMenu = (
    <ScreenMenuContainer>
      <ScreenMenu menuOptions={menuOptions} currentActiveTab={currentActiveTab} />
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
