'use client';

import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import React from 'react';

type Props = {};

const LoginButton = (props: Props) => {
  const onClick = async () => {
    await signIn();
  };
  return (
    <Button size="lg" variant="secondary" onClick={onClick}>
      Login
    </Button>
  );
};

export default LoginButton;
