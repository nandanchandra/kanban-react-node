import React from "react";

import socketIO from "socket.io-client";

import Nav from "./navbar";
import AddTask from "./addTasks";
import TasksContainer from "./tasksContainer";

const socket = socketIO.connect("http://localhost:4000");

const Task = () => {
	return (
		<div>
			<Nav />
			<AddTask socket={socket} />
			<TasksContainer socket={socket} />
		</div>
	);
};

export default Task;
