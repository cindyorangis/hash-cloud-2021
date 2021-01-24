import HamburgerButton from './HamburgerButton'
import NavMenu from './NavMenu'
import DropDown from './DropDown'
import BellButton from '../BellButton'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <HamburgerButton />
          <NavMenu />
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <BellButton />
            <DropDown />
          </div>
        </div>
      </div>

      <div className="hidden sm:hidden">
        <MobileMenu />
      </div>
    </nav>
  )
}