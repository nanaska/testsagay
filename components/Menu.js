import {useEffect, useState} from "react";
import Image from "next/image"
import {useRef} from "react";
import {render} from "react-dom";
export default function Menu(){
    const [content, setContent] = useState([])

    const [contentInput, setContentInput] = useState("")
    const awdf = async () => {
        const res = await fetch(`api/products`)
        const data = await res.json()
        setContent(data)

    }
    useEffect(()=>{awdf()},[])
    const  searchPizzaById = async (id) => {
        const res = await fetch(`api/products/search/${id}`)
        const data = await res.json()
        setContent(data)
        console.log(content)

    }

     return(<div className="p-6">
    <div className="flex flex-row items-center justify-between">
        <div className="text-2xl font-medium md:pl-[4.2rem]">
        Пицца
        </div>

    </div>
        <div className="grid grid-cols-1 min-h-[200px] place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">


            {content !== [] && content.map((content,index) =>

               (content.type ===  1  && <div key={index} type= {2}  className="flex hover:shadow-2xl h-[507px] p-4 rounded md:w-[250px] flex-row md:flex-col items-center justify-center">
                <div className="flex items-center   justify-center w-[50%] md:w-full">
                    <Image className="rounded-[180px]" src={content.img} height={250} width={250}/>
                </div>

                <div className="flex items-center justify-center flex-col w-[50%] md:w-full">
                    <div className="flex  items-center justify-center text-left md:text-center font-normal text-2xl">{content.title}</div>
                    <p className="flex text-center items-center text-start justify-start mt-7  min-h-[50px] text-neutral-focus/80">{content.description}</p>
                    <div className="flex  flex-row w-full items-center justify-center mt-6">
                        <div className="md:p-3 p-1  px-2 md:px-4 items-center justify-center rounded bg-primary text-primary-content text-[16px] md:text-xl">{content.prices[0]} Р</div>
                        <div className="btn btn-sm  md:btn-md  ml-auto justify-center p-2 items-center btn-outline rounded-[90px]">Выбрать</div>
                    </div>
                </div>
            </div>))}
        </div>
         <div className="flex flex-row mt-[40px] items-center justify-between">
             <div className="text-2xl font-medium md:pl-[4.2rem]">
                 Роллы
             </div>
             {/*<div className=" flex flex-row space-x-4 items-center justify-center">*/}
             {/*    <div className="btn btn-md btn-outline">Пиццы</div>*/}
             {/*    <div className="btn btn-outline">Роллы</div>*/}
             {/*    <div className="btn btn-outline">Напитки</div>*/}
             {/*</div>*/}
             {/*<div>*/}
             {/*    <input type="text" className="disabled" onChange={(e)=>{searchPizzaById(e.target.value)}} placeholder="Type here" className="input w-full max-w-xs"/>*/}
             {/*</div>*/}
         </div>
         <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
             { content.map((content,index) =>

                 (content.type === 2  && <div key={index} type= {2}  className="flex hover:shadow-2xl h-[507px] p-4 rounded md:w-[250px] flex-row md:flex-col items-center justify-center">
                     <div className="flex items-center   justify-center w-[50%] md:w-full">
                         <Image className="rounded-[180px]" src={content.img} height={250} width={250}/>
                     </div>

                     <div className="flex items-center justify-center flex-col w-[50%] md:w-full">
                         <div className="flex  items-center justify-center text-left md:text-center font-medium text-2xl">{content.title}</div>
                         <p className="flex text-center items-center text-start justify-start mt-7  min-h-[50px] text-neutral-focus/80">{content.description}</p>
                         <div className="flex  flex-row w-full items-center justify-center mt-6">
                             <div className="md:p-3 p-1  px-2 md:px-4 items-center justify-center rounded bg-primary text-primary-content text-[16px] md:text-xl">{content.prices[0]} Р</div>
                             <div className="btn btn-sm  md:btn-md  ml-auto justify-center p-2 items-center btn-outline rounded-[90px]">Выбрать</div>
                         </div>
                     </div>
                 </div>))}
         </div>
    </div>)
}
export async function getServerSideProps() {

}