import {FaPlus} from "@react-icons/all-files/fa/FaPlus.js";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="flex items-center justify-between p-5">
        <p className="text-xs">Edit</p>
        <p className="text-xs font-semibold">To Read</p>
        <FaPlus/>
      </div>
    </div>
  )
}
