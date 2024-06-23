'use client';

import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import React from 'react';

type Props = {};

const LoggoutButton = (props: Props) => {
  const onClick = async () => {
    await signOut();
  };
  return (
    <Button size="lg" variant="secondary" onClick={onClick}>
      Loggout
    </Button>
  );
};

export default LoggoutButton;
