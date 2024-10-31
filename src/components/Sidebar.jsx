import {FaPlus} from "@react-icons/all-files/fa/FaPlus.js";
import {
  DropdownMenu,
  DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {FaRegUser} from "@react-icons/all-files/fa/FaRegUser.js";
import {CiBarcode} from "react-icons/ci";
import {IoIosSearch} from "@react-icons/all-files/io/IoIosSearch.js";
import {FaRegFileAlt} from "@react-icons/all-files/fa/FaRegFileAlt.js";
import {Input} from "@/components/ui/input.jsx";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="flex items-center justify-between p-5">
        <p className="text-xs cursor-pointer">Edit</p>
        <p className="text-xs font-semibold">To Read</p>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <FaPlus/>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="font-normal text-[10px]">Add New Book</DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuItem className="w-40 justify-between">
              Scan Barcode
              <CiBarcode/>
            </DropdownMenuItem>
            <DropdownMenuItem className="w-40 justify-between">
              Search Online
              <IoIosSearch/>
            </DropdownMenuItem>
            <DropdownMenuItem className="w-40 justify-between">
              Add Manually
              <FaRegFileAlt/>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
     <div className="px-4">
       <Input placeholder="Your Library"/>
     </div>
    </div>
  )
}
