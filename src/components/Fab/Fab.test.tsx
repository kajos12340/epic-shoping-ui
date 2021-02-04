import React from 'react';
import { mount } from 'enzyme';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';

import Fab, { IFabProps } from './Fab';

describe('Fab', () => {
  const createWrapper = ({ onClick, children }: IFabProps) => mount(
    <Fab onClick={onClick}>
      {children}
    </Fab>,
  );

  it('should match snapshot', () => {
    const wrapper = createWrapper({
      children: <AddOutlinedIcon />,
      onClick: () => null,
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should call prop onClick', () => {
    const onClick = jest.fn();
    const wrapper = createWrapper({
      children: <AddOutlinedIcon />,
      onClick,
    });

    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
