import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../slices/sliceCounter";
import {useState} from "react";

export default function Garbage() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    const [test, setTest] = useState([1])

    return (<div className="flex items-center justify-center">

        <div className="btn" onClick={() => {

            setTest([...test, 1])
            console.log(test)

        }}>Добавить</div>
        <div className="btn" onClick={() => {



            function remove(...toRemove){
                toRemove.forEach(item => {
                    var index = test.indexOf(item);
                    if(index != -1){
                        test.splice(index, 1);
                    }
                })
            }

            remove(1); // OR remove(...['dog', 'lion']);
            console.log(test)


        }}>Добавить</div>
        <h2>The value of counter {count}</h2>

    </div>)
}