import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { getUser } from '@store/selectors';

const UseAuthorize = (allowAnonymous: boolean) => {
  const [hasAccess, setHasAccess] = useState<boolean | null>(false);
  const user = useSelector(getUser);
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  useEffect(() => {
    if (!allowAnonymous && !user && !localStorage.getItem('token')) {
      enqueueSnackbar('Zaloguj się aby uzyskać dostęp do tej zakładki!', {
        variant: 'error',
      });
      history.push('/user/login');
    } else if (allowAnonymous && (user || localStorage.getItem('token'))) {
      if (['/user/login', '/user/register'].includes(history.location.pathname)) {
        history.push('/shopping/lists');
      }
      setHasAccess(true);
    } else {
      setHasAccess(true);
    }
  }, [user, enqueueSnackbar, allowAnonymous, history]);

  return hasAccess;
};

export default UseAuthorize;
