import { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import Link from 'next/link';
import { useRouter } from 'next/router';
import '../../configureAmplify';
import HamburgerButton from './HamburgerButton';
import NavMenu from './NavMenu';
import AvatarButton from '../AvatarButton';
import { FaLock } from 'react-icons/fa';
import { FaRegBell } from 'react-icons/fa';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
    } catch (err) {
      setUser(null);
    }
  }

  if (!user)
    return (
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <HamburgerButton />
            <NavMenu />
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Link href="/profile">
                <a className="text-gray-300 bg-indigo-600 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex flex-row items-center gap-x-2">
                  <FaLock />
                  Sign In
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <HamburgerButton />
          <NavMenu />
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">View notifications</span>
              <FaRegBell size="24" />
            </button>
            <div className="ml-3 relative">
              <AvatarButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
