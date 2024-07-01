import "../../styles/components/divider/divider.sass"

interface DividerProps {
    title: string,
    btn?: boolean
    line?: boolean
}

export default function Divider({ title, btn = false, line = true }: DividerProps) {
    return (
        <div className="dividerContent">
            <div>
                {line && (<hr />)}
                <p>{title}</p>
                {line && (<hr />)}
            </div>
            {btn && (
                <button>
                    Ver todos
                </button>
            )}
        </div>
    );
}