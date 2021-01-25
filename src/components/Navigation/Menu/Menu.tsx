import React from 'react';

import { Link } from 'react-router-dom';
import { Typography, IconButton } from '@material-ui/core';
import { IMenuOption } from '../Navigation';

import {
  Toolbar, ButtonsContainer, AppBar, Spacer,
} from './Menu.styles';

interface ScreenMenuProps {
  menuOptions: IMenuOption[],
  currentActiveTab: string,
}

const Menu = ({ menuOptions, currentActiveTab }:ScreenMenuProps) => (
  <>
    <AppBar>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Epic shopper
        </Typography>
        <ButtonsContainer>
          {menuOptions.map((menuItem) => (
            <IconButton
              component={Link}
              to={menuItem.to}
              key={menuItem.tabName}
              color={currentActiveTab === menuItem.tabName ? 'inherit' : 'secondary'}
              size="medium"
            >
              {menuItem.icon}
            </IconButton>
          ))}
        </ButtonsContainer>
      </Toolbar>
    </AppBar>
    <Spacer />
  </>
);

export default Menu;
