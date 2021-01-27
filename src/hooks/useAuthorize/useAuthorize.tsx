import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { RootReducerState } from '../../store/store';

const UseAuthorize = () => {
  const user = useSelector((state: RootReducerState) => state.user);
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  useEffect(() => {
    if (!user && !localStorage.getItem('token')) {
      enqueueSnackbar('Zaloguj się aby uzyskać dostęp do tej zakładki!', {
        variant: 'error',
      });
      history.push('/user/login');
    }
  }, [user, enqueueSnackbar]);

  return null;
};

export default UseAuthorize;