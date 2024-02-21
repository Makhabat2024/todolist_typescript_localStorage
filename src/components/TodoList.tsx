import scss from "./TodoList.module.scss";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, completedTodo, removeTodo } from "../redux/tools/todoSlice";
import { useAppSelector } from "../redux/store";

const TodoList: FC = () => {
	const [name, setName] = useState("");
	const [age, setAge] = useState(0);

	const todo = useAppSelector((state) => state.todoReducer.data);
	console.log(todo);

	const dispatch = useDispatch();

	useEffect(() => {
		localStorage.setItem("todo", JSON.stringify(todo));
	}, [todo]);

	const addTodoItem = () => {
		dispatch(addTodo({ name: name, age: age }));
		setName("");
		setAge(0);
	};
	const toggleTodoItem = (id: number) => {
		dispatch(completedTodo({ id }));
	};

	const deleteTodoItem = (id: number) => {
		dispatch(removeTodo({ id }));
	};
	return (
		<div className={scss.container}>
			<div className={scss.form}>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="text"
					value={age}
					onChange={(e) => setAge(Number(e.target.value))}
				/>
				<button onClick={addTodoItem}>Add</button>
			</div>
			<ul className={scss.todolist}>
				{todo.map((item) => (
					<li key={item.id} className={scss.todoitem}>
						<div className={scss.dataitem}>
							<p
								style={{
									textDecoration: item.completed ? "line-through" : "none",
								}}>
								{item.name}
							</p>
							<p>{item.age} жашта</p>
						</div>

						<div className={scss.buttons}>
							<input
								type="checkbox"
								checked={item.completed}
								onChange={() => toggleTodoItem(item.id)}
							/>
							<button onClick={() => deleteTodoItem(item.id)}>delete</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
