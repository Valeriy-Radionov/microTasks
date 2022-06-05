import React, {ChangeEvent} from "react";

type InputPropsType = {
    title: string
    setTitle: (title: string) => void
}
export const Input = (props: InputPropsType) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const currentTitle = event.currentTarget.value
        props.setTitle(currentTitle)
    }
    return (
        <input value={props.title} onChange={onChangeInputHandler}/>

    )

}