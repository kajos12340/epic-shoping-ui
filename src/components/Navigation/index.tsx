import React, { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';

import Menu from './Menu';

export interface IMenuOption {
  to: string,
  icon: ReactNode,
  label: string,
  tabName: string,
}

export const menuOptions: IMenuOption[] = [
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
    setCurrentActiveTab(['user', 'shopping', 'messages']
      .find((it) => location.pathname.includes(it)) || 'user');
  }, [location]);

  return (
    <Menu menuOptions={menuOptions} currentActiveTab={currentActiveTab} />
  );
};

export default Navigation;
