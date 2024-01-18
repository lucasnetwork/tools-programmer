import { JSX } from "solid-js"

const Button = (props:JSX.ButtonHTMLAttributes<HTMLButtonElement>) =>{
    return (
        <button class="text-white bg-darkII px-4 py-2 rounded-sm" {...props}>{props.children}</button>
    )
}

export default Button