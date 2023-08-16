import { useState } from "react"
import useTodoStore from "../store"

function AddTodo() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodoStore( )
    console.log(addTodo)
    const handleSubmit = (evt) => {
        evt.preventDefault()

        addTodo(todo)
        setTodo("")
    }
  return (
    // <div>

        <form onSubmit={handleSubmit}>

            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
            <button>add</button>
        </form>
    // </div>
  )
}
export default AddTodo