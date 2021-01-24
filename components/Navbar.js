import HamburgerButton from './HamburgerButton'
import MobileMenu from './MobileMenu'
import NavMenu from './NavMenu'

export default function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <HamburgerButton />
          <NavMenu />
        </div>
      </div>
      <div className="hidden sm:hidden">
        <MobileMenu />
      </div>
    </nav>
  )
}