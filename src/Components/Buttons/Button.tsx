import React from "react";

type ButtonType = {
    name: string
    callBack: () => void
}

export const Button = (props: ButtonType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
    // Почему нельзя передать props.callBack() в onClick без создания другой функции onClickHandler???
}