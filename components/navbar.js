import Image from "next/image"
import Garbage from "/public/Garbage.svg"
import Link from "next/link"
import {useSelector} from "react-redux";
import DrawerHamburger from "./drawerHamburger";

export default function Navbar() {
    const {items, totalPrice} = useSelector(state => state.busketSlice)
    const totalCount = items.reduce((sum,item) => sum + item.count, 0)
    return (<>
            <div className="navbar md:px-2.5 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">

                        <DrawerHamburger/>

                    </div>
                    <Link href="/"><a className="btn btn-ghost normal-case text-2xl">SAGAY</a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">

                    <ul className="menu menu-horizontal p-0">
                        <div className="dropdown dropdown-hover">
                            <Link href="/delivery"><a className="btn btn-outline m-1">Зона доставки</a></Link>

                        </div>
                        <div className="dropdown dropdown-hover">
                            <label tabIndex="0" className="btn btn-outline m-1">Hover</label>
                            <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <label tabIndex="0" className="btn btn-outline  m-1">Hover</label>
                            <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                    </ul>
                </div>
                <div className="navbar-end  flex flex-row space-x-1">
                    <Link href="/busket">
                        <div
                            className="hover:bg-base-300 flex flex-row items-center justify-center rounded p-2 cursor-pointer">
                            <div className="flex  flex items-center justify-center">
                                <div className="absolute ml-5 mb-5 z-20">
                                    <div className="rounded-[90px] px-[7px] py-[0px]  bg-orange-300 text-white">{totalCount}</div>

                                </div>
                                <Image className="" src={Garbage} height={40} width={40}/>
                            </div>
                            <a className=" flex items-center justify-center text-xl font-medium">Корзина</a>
                        </div>
                    </Link>
                </div>

            </div>
        </>
    )
}