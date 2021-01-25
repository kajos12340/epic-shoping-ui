import React from 'react';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { useLocation } from 'react-router-dom';

import { IMenuOption } from '../Navigation';

import { BottomNavigation } from './MobileNavigation.styles';

interface MobileMenuProps {
  menuOptions: IMenuOption[],
}

const MobileMenu = ({ menuOptions }: MobileMenuProps) => {
  const [value, setValue] = React.useState(0);
  const location = useLocation();
  console.log('location', location);

  return (
    <div>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        {menuOptions.map((menuItem) => (
          <BottomNavigationAction
            label={menuItem.label}
            icon={menuItem.icon}
            key={menuItem.to}
          />
        ))}
      </BottomNavigation>
    </div>

  );
};

export default MobileMenu;
