import HamburgerMenu from "../public/hamburger-menu-svgrepo-com.svg"
import Image from "next/image"
export default function  Navbar (){
    return(<>
        <div className=" drawer h-[120px]  md:hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle absolute z-10"/>
            <div className="p-2 drawer-content ml-auto">

                <label htmlFor="my-drawer" className="btn px-3 py-3 btn-primary drawer-button"><Image src={HamburgerMenu} width={18} height={18}/></label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay drawer-mobile absolute z-10"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                    <li><a>Меню</a></li>
                    <li><a>Доставка</a></li>
                    <li><a>Ещё</a></li>
                </ul>
            </div>
        </div>
     <div className="hidden md:navbar md:bg-base-100">
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-2xl">Сагай</a>
            <ul className="menu menu-horizontal p-0">
                <li><a>Меню</a></li>
                <li><a>Доставка</a></li>
                <li><a>Ещё</a></li>
            </ul>
        </div>
        <div className="flex-none">

        </div>
    </div>
        </>
    )}