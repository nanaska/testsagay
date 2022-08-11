import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,

    useDisclosure,
} from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import {useState} from "react";

export default function DrawerHamburger() {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [placement, setPlacement] = useState('left')
    return (
        <div className="md:hidden">

            <Button colorScheme='blue' onClick={onOpen}>
                <label tabIndex="0" className="">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M4 6h16M4 12h8m-8 6h16"/>
                    </svg>
                </label>
            </Button>
            <Drawer placement={placement} onClose={onClose} size={`xs`} isOpen={isOpen}>
                <DrawerOverlay/>
                <DrawerContent>

                    <DrawerHeader borderBottomWidth='1px' className="flex items-center ">Меню <DrawerCloseButton className="text-orange-600"/></DrawerHeader>
                    <DrawerBody>
                        <div className="collapse">
                            <input type="checkbox" className="peer"/>
                            <div
                                className="collapse-title text-[#000]  ">
                                Click me to show/hide content
                                <div className="rotate-0 peer-checked:rotate-180">
                                    <PhoneIcon w={6} h={6}/>
                                </div>
                            </div>
                            <div
                                className="collapse-content text-[#000] peer-checked: ">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse">
                            <input type="checkbox" className="peer"/>
                            <div
                                className="collapse-title text-[#000]  ">
                                Click me to show/hide content
                                <div className="rotate-0 peer-checked:rotate-180">
                                    <PhoneIcon w={6} h={6}/>
                                </div>
                            </div>
                            <div
                                className="collapse-content text-[#000] peer-checked: ">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse">
                            <input type="checkbox" className="peer"/>
                            <div
                                className="collapse-title text-[#000]  ">
                                Click me to show/hide content
                                <div className="rotate-0 peer-checked:rotate-180">
                                    <PhoneIcon w={6} h={6}/>
                                </div>
                            </div>
                            <div
                                className="collapse-content text-[#000] peer-checked: ">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse">
                            <input type="checkbox" className="peer"/>
                            <div
                                className="collapse-title text-[#000] ">
                                Click me to show/hide content

                                    <PhoneIcon w={6} h={6} className="rotate-0 peer-checked:rotate-180"/>

                            </div>
                            <div
                                className="collapse-content text-[#000] peer-checked: ">
                                <p>hello</p>
                            </div>
                        </div>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    )
}
