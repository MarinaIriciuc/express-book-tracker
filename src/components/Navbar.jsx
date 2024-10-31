import {Avatar, AvatarFallback, AvatarImage} from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {FaRegUser} from "@react-icons/all-files/fa/FaRegUser.js";
import {LuLogOut} from "react-icons/lu";
import {CiMoneyCheck1} from "react-icons/ci";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="flex">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="flex items-center gap-3">
              <AvatarImage src="https://github.com/shadcn.png" className="w-12 h-12 rounded-full"/>
              <AvatarFallback>MC</AvatarFallback>
              <p className="text-xs md:block hidden">Iriciuc Marina-Cristina</p>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="font-medium text-xs">My Account</DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuItem>
              <FaRegUser/>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CiMoneyCheck1/>
              Billing</DropdownMenuItem>
            <DropdownMenuItem>
              <LuLogOut/>
              Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
