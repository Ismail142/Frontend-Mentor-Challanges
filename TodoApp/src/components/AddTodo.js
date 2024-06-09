import { memo, useContext } from "react";
import Template from "./Template";
import { context } from "../Context/Context";

const AddTodo = () => {
	const ctx = useContext(context);

  const formHandler =(e)=>{
    e.preventDefault();
		const todo =  document.getElementById('todo-input');
		ctx.addTodoHandler(todo.value);
		todo.value = "";
  }

	return (
		<form className="container bg-veryLightGray dark:bg-veryDarkDesaturatedBlue rounded-md shadow-md" onSubmit={formHandler}>
			<Template focus={false}>
				<input
					id="todo-input"
					type="text"
					placeholder="Create a new todo..."
          className="flex-grow focus:outline-none bg-veryLightGray dark:bg-veryDarkDesaturatedBlue focus:bg-veryLightGray dark:focus:bg-veryDarkDesaturatedBlue dark:text-darkLightGrayishBlue"
				/>
			</Template>
		</form>
	);
};
export default memo(AddTodo);
