import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { getUser } from '@store/selectors';

const UseAuthorize = (allowAnonymous: boolean) => {
  const [hasAccess, setHasAccess] = useState<boolean>(false);
  const user = useSelector(getUser);
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  useEffect(() => {
    const hasUser = user || localStorage.getItem('token');
    if (!allowAnonymous) {
      if (hasUser) {
        setHasAccess(true);
      } else {
        enqueueSnackbar('Zaloguj się aby uzyskać dostęp do tej zakładki!', {
          variant: 'error',
        });
        history.push('/user/login');
      }
    } else if (hasUser && ['/', '/user/login', '/user/register'].includes(history.location.pathname)) {
      history.push('/shopping/lists');
    } else {
      setHasAccess(true);
    }
  }, [user, enqueueSnackbar, allowAnonymous, history]);

  return hasAccess;
};

export default UseAuthorize;
