import Link from 'next/link'
import Avatar from '../Avatar'

export default function DropDown() {
  return (
    <div className="ml-3 relative">
      <div>
        <Avatar />
      </div>
      <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
        <Link href="/profile">
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
        </Link>
        <Link href="/settings">
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
        </Link>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
      </div>
    </div>
  )
}