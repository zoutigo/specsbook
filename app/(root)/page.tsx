import LoginButton from '@/components/auth/LoginButton';
import User from '@/components/auth/User';
import { getAuthSession } from '@/lib/auth';

export default async function Home() {
  const session = await getAuthSession();
  if (session) {
    return <User />;
  }
  return (
    <div className="p-4">
      <h1>Specifications book</h1>
      {/* <Button size="default" variant="default">
        I like
      </Button> */}
      <LoginButton />
    </div>
  );
}
