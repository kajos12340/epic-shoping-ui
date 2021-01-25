import React from 'react';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Link } from 'react-router-dom';

import { IMenuOption } from '../Navigation';

import { BottomNavigation } from './MobileNavigation.styles';

interface MobileMenuProps {
  menuOptions: IMenuOption[],
  currentActiveTab: string
}

const MobileMenu = ({ menuOptions, currentActiveTab }: MobileMenuProps) => (
  <div>
    <BottomNavigation
      value={currentActiveTab}
      showLabels
    >
      {menuOptions.map((menuItem) => (
        <BottomNavigationAction
          component={Link}
          to={menuItem.to}
          label={menuItem.label}
          icon={menuItem.icon}
          key={menuItem.to}
          value={menuItem.tabName}
        />
      ))}
    </BottomNavigation>
  </div>

);

export default MobileMenu;
