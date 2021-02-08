import React, { ReactNode } from 'react';
import DialogDefault from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { DialogActions, Button } from '@material-ui/core';

import { CloseButton } from './Dialog.styles';

export interface IDialogProps {
  open: boolean,
  onClose(): void,
  title: string,
  children: ReactNode,
  confirmFooter?: boolean,
  okCallback?(): void,
  cancelCallback?(): void,
}

const Dialog = ({
  open, onClose, title, children, confirmFooter, okCallback, cancelCallback,
}: IDialogProps) => (
  <DialogDefault
    open={open}
    onClose={onClose}
    disableBackdropClick
    fullWidth
    maxWidth="sm"
    style={{ minHeight: '15vh' }}
  >
    <DialogTitle>
      {title}
      <CloseButton aria-label="close" onClick={onClose}>
        <CloseIcon />
      </CloseButton>
    </DialogTitle>
    <DialogContent>
      {children}
    </DialogContent>
    {confirmFooter && (
      <DialogActions>
        <Button variant="contained" onClick={cancelCallback}>
          Anuluj
        </Button>
        <Button variant="contained" onClick={okCallback} color="primary">
          Ok
        </Button>
      </DialogActions>
    )}
  </DialogDefault>
);

export default Dialog;
