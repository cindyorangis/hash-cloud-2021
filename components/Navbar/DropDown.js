import { useState } from 'react';
import { Auth } from 'aws-amplify';
import Link from 'next/link';

export default function DropDown() {
  const [user, setUser] = useState(null);

  return (
    <div className="ml-3 relative">
      <div
        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu"
      >
        <Link href="/profile">
          <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
            Your Profile
          </a>
        </Link>
        <Link href="/settings">
          <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
            Settings
          </a>
        </Link>
        <Link href="/">
          <a
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
            onClick={() => {
              Auth.signOut();
              setUser(null);
            }}
          >
            Sign out
          </a>
        </Link>
      </div>
    </div>
  );
}
