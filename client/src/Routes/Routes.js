import { Routes, Route } from "react-router-dom";
import Comments from "../Components/comments";
import Task from "../Components/task";
import Login from "../Components/login";

export default function Routesx() {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/task" element={<Task />} />
			<Route path="/comments/:category/:id" element={<Comments />} />
		</Routes>
	);
}
