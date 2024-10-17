'use client';

import { useSession } from '@supabase/auth-helpers-react';

function MyComponent() {
  const session = useSession();

  if (session) {
    return (
      <div>
        <h1>Welcome, {session.user.email}!</h1>
        {/* Content for logged-in users */}
      </div>
    );
  }

  return (
    <div>
      {/* Content for non-logged-in users */}
      <p>Please log in to view this content.</p>
    </div>
  );
}

export default MyComponent;