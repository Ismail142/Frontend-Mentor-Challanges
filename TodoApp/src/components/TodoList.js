import { memo, useContext } from "react";
import Template from "./Template";
import { context } from "../Context/Context";

const TodoList = () => {
	const ctx = useContext(context);

	return (
		<div className="flex flex-col items-center relative mt-3">
			<div className="container absolute -top-[4.75rem] bg-veryLightGray dark:bg-veryDarkDesaturatedBlue rounded-md shadow-md">
				<ul>
					{ctx.todoList.map((todo,index) => {
						return (
							<li className="border-b dark:border-b-darkLightGrayishBlue/15" key={index}>
								<Template id={index} status={todo.status}>
									<h1 className="flex-grow">{todo.content}</h1>
								</Template>
							</li>
						);
					})}
				</ul>

				<div className="flex justify-between py-4 px-6 text-sm text-darkGrayishBlue">
					<p>{ctx.numberText}</p>
					{window.innerWidth > 767 && <div className="gap-x-4 group font-bold hidden md:flex">
						<p className="filter-active filter" onClick={()=>{ctx.filterTodoHandler('all')}} id="filter">All</p>
						<p className="filter" onClick={()=>{ctx.filterTodoHandler('active')}} id="filter">
							Active
						</p>
						<p className="filter" onClick={()=>{ctx.filterTodoHandler('completed')}} id="filter">
							Completed
						</p>
					</div>}
					<p className="cursor-pointer hover:text-veryDarkDesaturatedBlue dark:hover:text-darkLightGrayishBlueHover" onClick={()=>{ctx.filterTodoHandler('clear')}}>
						Clear Completed
					</p>
				</div>

				<div className="relative md:hidden">
					<div className="absolute flex container bg-veryLightGray dark:bg-veryDarkDesaturatedBlue top-20 rounded-md shadow-md py-4 justify-center gap-x-4 group text-darkGrayishBlue">
						<p className="filter-active filter" onClick={()=>{ctx.filterTodoHandler('all')}} id="filter">All</p>
						<p className="filter" onClick={()=>{ctx.filterTodoHandler('active')}} id="filter">
							Active
						</p>
						<p className="filter" onClick={()=>{ctx.filterTodoHandler('completed')}} id="filter">
							Completed
						</p>

					</div>
				</div>
			</div>
		</div>
	);
};

export default memo(TodoList);
