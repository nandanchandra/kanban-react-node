import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import socketIO from "socket.io-client";

import "../css/comments.css";

const socket = socketIO.connect("https://node-kanban-cnc.herokuapp.com");

const Comments = () => {
	const { category, id } = useParams();
	const [comment, setComment] = useState("");
	const [commentList, setCommentList] = useState([]);

	useEffect(() => {
		socket.emit("fetchComments", { category, id });
	}, [category, id]);

	useEffect(() => {
		socket.on("comments", (data) => setCommentList(data));
	}, []);

	const addComment = (e) => {
		e.preventDefault();
		socket.emit("addComment", {
			comment,
			category,
			id,
			userId: localStorage.getItem("userId"),
		});
		setComment("");
	};

	return (
		<div className="comments__container">
			<form className="comment__form" onSubmit={addComment}>
				<label htmlFor="comment">Add a comment</label>
				<textarea
					placeholder="Type your comment..."
					value={comment}
					onChange={(e) => setComment(e.target.value)}
					rows={5}
					id="comment"
					name="comment"
					required
				></textarea>
				<button className="commentBtn">ADD COMMENT</button>
			</form>
			<div className="comments__section">
				<h2>Existing Comments</h2>
				{commentList.map((comment) => (
					<div key={comment.id}>
						<p>
							<span style={{ fontWeight: "bold" }}>{comment.text} </span>by{" "}
							{comment.name}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Comments;
