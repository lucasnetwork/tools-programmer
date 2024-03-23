import { type JSX } from 'solid-js';

const Input = (props: JSX.InputHTMLAttributes<HTMLInputElement>) => {
	return (
		<input
			class="text-white outline-none p-2 border-white border px-4 py-2 rounded-sm"
			style={{
				background: 'none',
			}}
			{...props}
		/>
	);
};

export default Input;
