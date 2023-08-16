import useTodoStore from "../store"
import {PropTypes} from "prop-types"

function ToggleTodo({id}) {
    const {completeTodo} = useTodoStore()
  return (
    <button onClick={() => completeTodo(id)}>Toggle</button>
  )
}

ToggleTodo.propTypes = {
    id:PropTypes.string
}
export default ToggleTodo