import Navbar from "@/components/Navbar.jsx";
import Menu from "@/components/Menu.jsx";
import Sidebar from "@/components/Sidebar.jsx";
import {useLocation} from "react-router-dom";

export default function Layout({children}) {

  const location = useLocation();
  const {pathname} = location

  return (
    <>
      <div className="flex">
        {pathname === '/books' && <Sidebar/>}
        <div className="flex flex-col w-full">
          <Navbar/>
          <main className="p-3">{children}</main>
        </div>
      </div>
      <Menu/>
    </>
  )
}
