import Navbar from "@/components/Navbar.jsx";
import Menu from "@/components/Menu.jsx";

export default function Layout({children}) {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col w-full">
          <Navbar/>
          <main className="p-3">{children}</main>
        </div>
      </div>
      <Menu/>
    </>
  )
}
