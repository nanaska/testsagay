import Image from "next/image";
import {useState} from "react";
import axios from "axios";
import {useEffect} from "react";

export default function PizzaMenu ( ) {
    const [content, setContent] = useState([])
    const [pizzaFilterType, setPizzaFilterType] = useState(null)
    const [checkFilterType,setCheckFilterType] = useState({})



    const awdf = async (type,pizzaFilterType, rollsFilterType) => {


        const res = await fetch(`api/searchbytypes${ type ? `?type=${type}`  : ``}${ pizzaFilterType ? `&pizzaFilterType=${pizzaFilterType}`  : ``}${rollsFilterType ?`&rollsFilterType=${rollsFilterType}` : ``}`,)
        const data = await res.json()
        setContent(data)

    }
    useEffect(()=>{awdf(1,  pizzaFilterType, null)},[pizzaFilterType])

    return(<>
        <div className="md:p-3 flex flex-row items-center justify-between">
            <div className="text-2xl font-medium md:pl-[4.2rem]">
                Пицца
            </div>
            <div>
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn m-1">Click</label>
                    <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={()=>{setPizzaFilterType(null)}}><a>Всё</a></li>
                        <li onClick={()=>{setPizzaFilterType(1)}}><a>Тип 1</a></li>
                        <li onClick={()=>{setPizzaFilterType(2)}}><a>Тип 2</a></li>
                        <li onClick={()=>{setPizzaFilterType(3)}}><a>Тип 3</a></li>

                    </ul>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 min-h-[200px] place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">


            {content !== undefined && content.map((content,index) =>

                (content.type ===  1   && <div key={index} type= {2}  className="flex hover:shadow-2xl h-[250px] w-[400px]  md:h-[507px] p-4 rounded md:w-[250px] flex-row md:flex-col items-center justify-center">
                    <div className="flex items-center   justify-center w-[50%] md:w-full">
                        <Image className="rounded-[180px]" src={content.img} height={250} width={250}/>
                    </div>

                    <div className="flex items-center justify-center flex-col w-[50%] md:w-full">
                        <div className="flex  items-center justify-center text-left md:text-center font-normal text-2xl">{content.title}</div>
                        <p className="flex text-center items-center text-start justify-start mt-7  min-h-[50px] text-neutral-focus/80">{content.description}</p>
                        <div className="flex  flex-row w-full items-center justify-center mt-6">
                            <div className="md:p-3 p-1  px-2 md:px-4 items-center justify-center rounded bg-primary text-primary-content text-[16px] md:text-xl">{content.price} Р</div>
                            <div className="btn btn-sm  md:btn-md  ml-auto justify-center p-2 items-center btn-outline rounded-[90px]">Выбрать</div>
                        </div>
                    </div>
                </div>))}
        </div>
    </>)
}