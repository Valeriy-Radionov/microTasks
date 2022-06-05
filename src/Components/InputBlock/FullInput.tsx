import React, {ChangeEvent, useState} from "react";

type FullInputPropsType = {
    addMessage: (title: string) => void
}
export const FullInput = (props: FullInputPropsType) => {
    let [title, setTitle] = useState("")

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const currentTitle = event.currentTarget.value
        setTitle(currentTitle)
    }
    const onClickHandler = () => {
        if (title !== "") {
            props.addMessage(title)
            setTitle("")
        } else {
            return
        }
    }
    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickHandler}>+</button>
        </div>
    )
}
