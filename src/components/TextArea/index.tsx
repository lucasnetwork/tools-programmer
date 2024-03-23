import { type JSX } from 'solid-js';

const TextArea = (props: JSX.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
	return (
		<textarea
			class="text-white outline-none p-2 border-white border px-4 py-2 rounded-sm"
			style={{
				background: 'none',
			}}
			{...props}
		/>
	);
};

export default TextArea;
