import { useState } from 'react'
import Dropdown from './Navbar/DropDown'

export default function Avatar() {
  const [open, setOpen] = useState(false);
  
  function toggle() {
    setOpen(!open);
  }

  return (
    <>
      <button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true"
        onClick={toggle}>
        <span className="sr-only">Open user menu</span>
        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
      </button>
      <div style={{ display: open ? "block" : "none "}}><Dropdown /></div>
    </>
  )
}