import React from "react";

type CurrentMoney = {
    money: Money[]
}

type Money = {
    banknots: string,
    value: number,
    number: string
}

export const Filter = (props: CurrentMoney) => {
    return (
        <ul>
            {props.money.map((objectFromMoneyArray, index) => {
                return (
                    <li key={objectFromMoneyArray.number}>
                        <span>{objectFromMoneyArray.banknots}</span>
                        <span>{objectFromMoneyArray.value}</span>
                        <span>{objectFromMoneyArray.number}</span>
                    </li>
                )
            })}
        </ul>
        // {/*alt+cmd+j - обернуть в тег*/}
    )
}