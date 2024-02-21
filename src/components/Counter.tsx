import { FC } from "react";
import { useDispatch } from "react-redux";

import { handleAdd, handlleAddAmount } from "../redux/tools/counterSlice";
import { useAppSelector } from "../redux/store";

const Counter: FC = () => {
	const count = useAppSelector((state) => state.counterReduser.value);
	const dispatch = useDispatch();
	console.log(count);

	const handlleIncrement = () => {
		dispatch(handleAdd());
	};
	const handlleIncrementByAmount = () => {
		dispatch(handlleAddAmount(1));
	};
	return (
		<>
			<button onClick={handlleIncrement}>+</button>
			<button onClick={handlleIncrementByAmount}>By Amount</button>
		</>
	);
};

export default Counter;
