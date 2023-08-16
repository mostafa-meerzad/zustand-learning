import useTodoStore from "../store";
import { PropTypes } from "prop-types";
function RemoveTodo({ id }) {
  const removeTodo = useTodoStore((state) => state.removeTodo);
//   console.log(removeTodo);
  return (
    <div >
      <button onClick={() => removeTodo(id)}>X</button>
    </div>
  );
}

RemoveTodo.propTypes = {
  id: PropTypes.string,
};

export default RemoveTodo;
