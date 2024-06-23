import React from 'react';
import LoggoutButton from '@/components/auth/LoggoutButton';
import { getAuthSession } from '@/lib/auth';

type Props = {};

const User = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) return <p>no user</p>;

  return (
    <div>
      <div>{session.user.email}</div>
      <div>{session.user.id} </div>
      <LoggoutButton />
    </div>
  );
};

export default User;
