import React, { useCallback, useState } from 'react';
import { Box, Grid, Paper } from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';

import Dialog from '../Dialog/Dialog';
import Action from './Action/Action';
import MyCooperators from './MyCooperators/MyCooperators';
import MyData from './MyData/MyData';
import { logout } from '../../utils/auth/auth';
import { clearUser } from '../../store/user/actions';

const UserActions = () => {
  const [cooperatorsModalOpen, setCooperatorsModalOpen] = useState(false);
  const [myDataModalOpen, setMyDataModalOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const history = useHistory();
  const dispatch = useDispatch();

  const closeCooperatorsModal = () => {
    setCooperatorsModalOpen(false);
  };

  const openCooperatorsModal = useCallback(() => {
    setCooperatorsModalOpen(true);
  }, []);

  const closeMyDataModal = () => {
    setMyDataModalOpen(false);
  };

  const openMyDataModal = useCallback(() => {
    setMyDataModalOpen(true);
  }, []);

  const onLogoutClick = useCallback(() => {
    dispatch(clearUser());
    logout();
    history.push('/user/login');
    enqueueSnackbar('Wylogowano!', {
      variant: 'success',
    });
  }, [history]);

  return (
    <Grid container>
      <Grid xs={12} md={6} lg={4}>
        <Box p={1}>
          <Paper>
            <Action name="Moi współzakupowicze" icon={<GroupIcon />} onClick={openCooperatorsModal} />
          </Paper>
        </Box>
      </Grid>

      <Grid xs={12} md={6} lg={4}>
        <Box p={1}>
          <Paper>
            <Action name="Moje dane" icon={<SettingsIcon />} onClick={openMyDataModal} />
          </Paper>
        </Box>
      </Grid>

      <Grid xs={12} md={6} lg={4}>
        <Box p={1}>
          <Paper>
            <Action name="Wyloguj" icon={<ExitToAppIcon />} onClick={onLogoutClick} />
          </Paper>
        </Box>
      </Grid>

      <Dialog
        open={cooperatorsModalOpen}
        onClose={closeCooperatorsModal}
        title="Moi współzakupowicze"
      >
        <MyCooperators />
      </Dialog>
      <Dialog open={myDataModalOpen} onClose={closeMyDataModal} title="Moje dane">
        <MyData />
      </Dialog>
    </Grid>
  );
};

export default UserActions;
