import BellButton from './BellButton'
import HamburgerButton from './HamburgerButton'
import Menu from './Menu'
import ProfileDropDown from './ProfileDropDown'

export default function Navbar({ children }) {
  return (
    <nav className="bg-gray-800">
      <div className="hidden md:block">
        <div className="ml-4 flex items-center md:ml-6">
          <BellButton />
          <ul className="flex space-x-2">
            {children}
          </ul>
          <ProfileDropDown />
        </div>
      </div>
      <div className="-mr-2 flex md:hidden">
        <HamburgerButton />
      </div>
      <div className="hidden md:hidden">
        <Menu />
      </div>
    </nav>
  )
}