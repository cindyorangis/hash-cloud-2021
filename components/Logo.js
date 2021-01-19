export default function Logo() {
  return (
    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
      <div className="flex-shrink-0 flex items-center">

      </div>
      <div className="hidden sm:block sm:ml-6">
        <div className="flex space-x-4">
          <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
        </div>
      </div>
    </div>
  )
}