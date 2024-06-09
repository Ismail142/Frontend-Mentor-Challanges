import ContextProvider from "./Context/Context";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
	const themeHandler = ()=>{
		const theme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
		localStorage.setItem('theme', theme);
		theme === 'dark' ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
	}
	return (
		<ContextProvider>
			<div className="h-screen bg-veryLightGray dark:bg-veryDarkBlue">
				<div
					className="flex items-center flex-col md:pt-14 pt-16 max-md:px-4 h-[19rem]  md:bg-bgWhite bg-[url('../public/assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-cover bg-center md:dark:bg-bgDark dark:bg-[url('../public/assets/images/bg-mobile-dark.jpg')]"
				 >
					<div className="container flex justify-between h-min items-center mb-10">
						<h1 className="text-[2.5rem] text-veryLightGray uppercase font-semibold tracking-[0.8rem]">
							Todo
						</h1>
						<img
							src="./assets/images/icon-moon.svg"
							alt="moon icon"
							className="h-8 cursor-pointer duration-[500ms] hover:scale-110 dark:hidden block"
							onClick={themeHandler}

						/>
						<img
							src="./assets/images/icon-sun.svg"
							alt="moon icon"
							className="h-8 cursor-pointer duration-[500ms] hover:scale-110 hidden dark:block"
							onClick={themeHandler}
						/>
					</div>
					<AddTodo />
				</div>
				<div className="max-md:px-4"><TodoList /></div>
				
			</div>
		</ContextProvider>
	);
}

export default App;
