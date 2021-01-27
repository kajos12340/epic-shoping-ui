import React, { ReactNode } from 'react';
import DialogDefault from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';

import { CloseButton } from './Dialog.styles';

interface IDialogProps {
  open: boolean,
  onClose(): any,
  title: string,
  children: ReactNode,
}

const Dialog = ({
  open, onClose, title, children,
}: IDialogProps) => (
  <DialogDefault open={open} onClose={onClose} disableBackdropClick fullWidth maxWidth="sm">
    <DialogTitle>
      {title}
      <CloseButton aria-label="close" onClick={onClose}>
        <CloseIcon />
      </CloseButton>
    </DialogTitle>
    <DialogContent>
      {children}
    </DialogContent>
  </DialogDefault>
);

export default Dialog;
