export default function NavMenu() {
  return (
    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
      <div className="flex-shrink-0 flex items-center">
        <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Hash Cloud Solutions"></img>
        <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Hash Cloud Solutions"></img>
      </div>
      <div className="hidden sm:block sm:ml-6">
        <div className="flex space-x-4">
          <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
        </div>
      </div>
    </div>
  )
}