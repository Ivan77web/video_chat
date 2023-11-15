import { useCallback, useState } from "react"
import cl from "./Counter.module.scss";

export const Counter = () => {
    const [count, setCount] = useState(0);

    const onIncrement = useCallback(() => {
        setCount((prev) => prev + 1);
    }, [count])

    const onDecrement = useCallback(() => {
        setCount((prev) => prev - 1);
    }, [count])

    return (
        <div className={cl.wrapper}>
            Count {count}

            <button onClick={onDecrement}>-</button>
            <button onClick={onIncrement}>+</button>
        </div>
    )
}