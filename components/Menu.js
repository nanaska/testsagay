import {useEffect, useState} from "react";
import Image from "next/image"
import PizzaMenu from "./PizzaMenu";
import RollsMenu from "./RollsMenu";

export default function Menu(){
    const [content, setContent] = useState([])
    const [rollsFilterType, setRollsFilterType] = useState({})
    const [checkFilterType,setCheckFilterType] = useState({})



    const awdf = async (type,pizzaFilterType, rollsFilterType) => {


        const res = await fetch(`api/searchbytypes${ type ? `?type=${type}`  : ``}${ pizzaFilterType ? `&pizzaFilterType=${pizzaFilterType}`  : ``}${rollsFilterType ?`&rollsFilterType=${rollsFilterType}` : ``}`,)
        const data = await res.json()
        setContent(data)

    }
        useEffect(()=>{awdf(2,  null, 1)},[])



     return(<div className="p-6">
            <PizzaMenu/>
            <RollsMenu/>

    </div>)
}

export async function getServerSideProps(context) {



    return {
        props: {data},
    }
}

