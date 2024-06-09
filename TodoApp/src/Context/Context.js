import { createContext, useState } from "react";

export const context = createContext({
	addTodoHandler: (data) => {},
	filterTodoHandler: (action) => {},
	deleteTodoHandler: (id) => {},
	updateStatus: (id) => {},
	numberText: '',
});

const ContextProvider = function (props) {
	localStorage.getItem("todoList") ??
		localStorage.setItem("todoList", JSON.stringify([]));

	const [data, setData] = useState(
		JSON.parse(localStorage.getItem("todoList"))
	);
	const [numberText,setNumberText] = useState(JSON.parse(localStorage.getItem('todoList')).filter(todo=>todo.status==='progress').length + " items left"); 

	const addTodoHandler = (data) => {
		if (data) {
			const newTodo = {
				content: data,
				status: "progress",
			};
			setData((prevState) => {
				const newData = [newTodo, ...prevState];
				updateLocaleStorage(newData);
				setNumberText(newData.filter(todo=>todo.status==='progress').length + " items left");
				return newData;
			});
		}
	};

	const deleteTodoHandler = (id) => {
		setData((prevState) => {
			const newData = prevState.filter((todo, index) => index !== id);
			updateLocaleStorage(newData);
			setNumberText(newData.filter(todo=>todo.status==='progress').length + " items left");
			return newData;
		});
	};

	const updateStatus = (id) => {
		const filters = document.querySelectorAll('#filter');

		data[id].status !== 'complete' && setData((prevState) => {
			const newData = JSON.parse(localStorage.getItem('todoList')).map((todo, index) => {
				if (index === id) {
					todo.status = "complete";
				}

				return todo;
			});
			updateLocaleStorage(newData);
			setNumberText(newData.filter(todo=>todo.status==='progress').length + " items left");

			if (filters[1].classList.contains('filter-active')){
				return (newData.filter(todo=>todo.status==='progress'))
			}
			return newData;
		});
	};

	const updateTabLink = (node, i, j, k) => {
		node[i].classList.add("filter-active");
		node[j].classList.remove("filter-active");
		node[k].classList.remove("filter-active");
	};

	const filterTodoHandler = (action) => {
		const filter = document.querySelectorAll("#filter");

		switch (action) {
			case "clear":
				setData((prevState) => {
					const newData = JSON.parse(localStorage.getItem("todoList")).filter(
						(todo) => todo.status !== "complete"
					);
					updateLocaleStorage(newData);
					const bool = filter[2].classList.contains('filter-active');
					if (bool){
						setNumberText("0 items completed");
						return [];
					}

					setNumberText(newData.filter(todo=>todo.status==='progress').length + " items left");
					return newData;
				});
				break;

			case "active":
				updateTabLink(filter,1,0,2);
				setData(()=>{
					const newData = JSON.parse(localStorage.getItem("todoList")).filter(
						(todo) => todo.status === "progress"
					);
					setNumberText(newData.length + " items left");
					return newData;
				}
				);
				break;

			case "all":
				updateTabLink(filter,0,1,2);
				setData(()=>{
					const newData = JSON.parse(localStorage.getItem("todoList"));
					setNumberText(newData.filter(todo=>todo.status==='progress').length + " items left");
					return newData
				}
					);
				break;

			case "completed":
				updateTabLink(filter,2,1,0);
				setData(()=>{
					const newData = JSON.parse(localStorage.getItem("todoList")).filter(
						(todo) => todo.status === "complete"
					);
					setNumberText(newData.length + " items completed");
					return newData;
				}
				);
				break;

			default:
				break;
		}
	};

	const updateLocaleStorage = (data) => {
		localStorage.setItem("todoList", JSON.stringify(data));
	};

	const value = {
		todoList: data,
		addTodoHandler,
		deleteTodoHandler,
		updateStatus,
		filterTodoHandler,
		numberText,
	};

	return <context.Provider value={value}>{props.children}</context.Provider>;
};

export default ContextProvider;
