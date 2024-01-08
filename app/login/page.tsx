"use client";
import clsx from "clsx";
import { Dialog } from "@/components/dialog";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Checkbox,
  Input,
  Typography,
} from "@/components/ui";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col items-center pt-8 w-screen">
      <Card className="mx-auto w-full max-w-[24rem] gap-4">
        <CardBody className="flex flex-col gap-6">
          <Typography variant="h4" color="blue-gray">
            Sign In
          </Typography>
          <Typography
            className="mb-3 font-normal"
            variant="paragraph"
            color="gray"
          >
            Enter your email and password to Sign In.
          </Typography>
          <Typography className="-mb-2" variant="h6">
            Your Email
          </Typography>
          <div>
            <Input
              label="Email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              error={email.length === 2}
            />
            <span
              className={clsx("text-red-500 text-xs pl-4 absolute", {
                visible: email.length === 2,
              })}
            >
              email is too short
            </span>
          </div>
          <Typography className="-mb-2" variant="h6">
            Your Password
          </Typography>
          <Input label="Password" />
          <div className="-ml-2.5 -mt-3">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
      </Card>
      <Dialog
        title="Dialog title"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi in ipsum varius."
        trigger="Open Dialog"
      />
    </div>
  );
}
