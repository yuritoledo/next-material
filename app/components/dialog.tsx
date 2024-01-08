"use client";

import React from "react";
import {
  Button,
  Dialog as DialogBase,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

type Props = {
  title: string;
  body: string;
  trigger: string;
  onCancel?: () => void;
  onConfirm?: () => void;
};
export function Dialog(props: Props) {
  const { title, body, trigger, onCancel, onConfirm } = props;
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const handleOnCancel = () => {
    setOpen(false);
    onCancel?.();
  };

  const handleOnConfirm = () => {
    setOpen(false);
    onConfirm?.();
  };

  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        {trigger}
      </Button>
      <DialogBase open={open} handler={handleOpen}>
        <DialogHeader>{title}</DialogHeader>
        <DialogBody>{body}</DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOnCancel}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOnConfirm}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </DialogBase>
    </>
  );
}
