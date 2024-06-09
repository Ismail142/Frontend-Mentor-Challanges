import { memo, useContext } from "react";
import { context } from "../Context/Context";

const Template = (props) => {
	const focus = props.focus ?? true;
	const ctx = useContext(context);
	const statusStyle =
		props.status === "complete"
			? "line-through text-darkGrayishBlue"
			: "hover:text-veryDarkDesaturatedBlue text-veryDarkGrayishBlue dark:text-darkLightGrayishBlue dark:hover:text-darkLightGrayishBlueHover";

	return (
		<div
			className={`py-5 px-5 flex items-center gap-x-6 cursor-pointer text-[1.125rem] ${statusStyle} group `}
			onClick={() => {
				focus && ctx.updateStatus(props.id);
			}}
		>
			<div
				className={`h-6 w-6 border-lightGrayishBlue border rounded-full ${
					focus && "group-hover:border-brightBlue"
				} ${props.status ==="complete" && 'hidden'}`}
			></div>

			{props.status === "complete" && (
				<div
					className={`h-6 w-6 border-lightGrayishBlue border rounded-full check`}
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
						<path
							fill="none"
							stroke="#FFF"
							strokeWidth="2"
							d="M1 4.304L3.696 7l6-6"
						/>
					</svg>
				</div>
			)}

			{props.children}

			{focus && (
				<div
					className="hidden group-hover:block hover:scale-125 duration-200"
					onClick={(e) => {
						e.stopPropagation();
						ctx.deleteTodoHandler(props.id);
					}}
				>
					<img src="./assets/images/icon-cross.svg" alt="del btn" />
				</div>
			)}
		</div>
	);
};

export default memo(Template);
