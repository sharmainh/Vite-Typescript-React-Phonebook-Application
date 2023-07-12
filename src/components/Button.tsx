
interface ButtonProps {
    children: React.ReactNode
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    // instead of void you can also type any, look up javascript events for more information about this
}

export default function Button ( props: ButtonProps){
    return (
        <button onClick={ props.onClick} className={ props.className }>
            { props.children }
        </button>
    )
}