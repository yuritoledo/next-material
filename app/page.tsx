"use client";

import { Button, Snackbar, TextField } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const action = (
    <Button color="secondary" size="small" onClick={handleClose}>
      UNDO
    </Button>
  );
  return (
    <main className="bg-blue-100 px-4 h-screen flex flex-col gap-8 items-center justify-center">
      <Button
        variant="outlined"
        className="hover:bg-green-900 hover:text-white hover:border-white"
      >
        Hello World
      </Button>

      <Button onClick={handleClick}>Open simple snackbar</Button>

      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        error={input.length > 3}
        helperText={
          input.length > 3
            ? "Must be 3 characters or less"
            : "Fill up until 3 characters"
        }
        onChange={(e) => setInput(e.target.value)}
        value={input}
        inputProps={{
          className: "text-blue-500",
        }}
      />

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={action}
        className="text-red-500"
      />
    </main>
  );
}
