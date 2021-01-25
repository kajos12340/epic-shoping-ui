import React from 'react';

import { IMenuOption } from '../Navigation';

interface ScreenMenuProps {
  menuOptions: IMenuOption[],
}

const ScreenMenu = ({ menuOptions }:ScreenMenuProps) => (
  <div>
    Screen
    {menuOptions.map((i) => i.to)}
  </div>
);

export default ScreenMenu;
