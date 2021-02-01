import Link from 'next/link'

export default function MobileMenu() {
  return (
    <div className="px-2 pt-2 pb-3 space-y-1">
      <Link href="/">
        <a className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
      </Link>
      <Link href="/services">
        <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
      </Link>
      <Link href="/contact">
        <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
      </Link>
    </div>
  )
}