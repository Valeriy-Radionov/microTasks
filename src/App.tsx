import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./Components/InputBlock/FullInput";
// const Students = [
//     {id: 1, name: 'Egor', age: 44},
//     {id: 2, name: 'Valera', age: 34},
//     {id: 3, name: 'Dima', age: 54},
// ]
//
// const topCars = [
//     {manufacturer: 'BMW', model: 'm5cs'},
//     {manufacturer: 'Mercedes', model: 'e63s'},
//     {manufacturer: 'Audi', model: 'rs6'}
// ]

// type FilterType = "Dollars" | "RUBLS" | "all"

function App() {

    let [message, setMessage] = useState([{message: "message1"}, {message: "message2"}, {message: "message3"}])
    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
        console.log(title)
    }
    return (
        <div className={"App"}>
            <FullInput addMessage={addMessage}/>
            {/*<div>*/}
            {/*    <input/>*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}

export default App
// // FILTER
// const [money, setMoney] = useState([
//     {banknots: 'Dollars', value: 100, number: ' a1234567890'},
//     {banknots: 'Dollars', value: 50, number: ' z1234567890'},
//     {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
//     {banknots: 'Dollars', value: 100, number: ' e1234567890'},
//     {banknots: 'Dollars', value: 50, number: ' c1234567890'},
//     {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
//     {banknots: 'Dollars', value: 50, number: ' x1234567890'},
//     {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
// ])
//
// let currentMonet = money
// const [filter, setFilter] = useState<FilterType>("all")
//
// if (filter === "RUBLS") {
//     currentMonet = money.filter((filteredMoney, index) => (filteredMoney.banknots === "RUBLS"))
// }
// if (filter === "Dollars") {
//     currentMonet = money.filter((filteredMoney, index) => (filteredMoney.banknots === "Dollars"))
// }
//
// const onClickFilterHandler = (nameButton: FilterType) => {
//     setFilter(nameButton)
// }
// return (
//     <>
//         <Filter money={currentMonet}/>
//         <Button callBack={() =>
//             onClickFilterHandler("all")
//         } name={"all"}/>
//         <Button callBack={() =>
//             onClickFilterHandler("RUBLS")
//         } name={"RUBLS"}/>
//         <Button callBack={() =>
//             onClickFilterHandler("Dollars")
//         } name={"Dollars"}/>


// {/*{        <ul>}*/}
// {/*{           {currentMonet.map((objectFromMoneyArray, index) => {}*/}
// {/*{                 return ( */}
// {/*//                     <li key={index}>*/}
// {/*//                         <span>{objectFromMoneyArray.banknots}</span>*/}
// {/*//                         <span>{objectFromMoneyArray.value}</span>*/}
// {/*//                         <span>{objectFromMoneyArray.number}</span>*/}
// {/*//                     </li>*/}
// {/*//                 )*/}
// {/*//             })}*/}
// {/*//         </ul>*/}
// {/*//         /!*alt+cmd+j - обернуть в тег*!/*/}
// {/*//         <div>*/}
// {/*//             <button onClick={() => {*/}
// {/*//                 onClickFilterHandler("all")*/}
// {/*//             }}>all*/}
// {/*//             </button>*/}
// {/*//*/}
// {/*//             <button onClick={() => {*/}
// {/*//                 onClickFilterHandler("RUBLS")*/}
// {/*//             }}>RUBLS*/}
// {/*//             </button>*/}
// {/*//*/}
// {/*//             <button onClick={() => {*/}
// {/*//                 onClickFilterHandler("Dollars")*/}
// {/*//             }}>Dollars*/}
// {/*//             </button>*/}
// {/*//         </div>*/}

// BUTTON
// const Button1Foo = (subscriber: string, age: number, address: string) => {
//     console.log(subscriber, age, address)
// }
//
// const Button2Foo = (subscriber: string) => {
//     console.log(subscriber)
// }
// const Button3Foo = () => {
//     console.log("I'm stupid button")
// }
// return (
//     <div>
//         <Button name={"MyYouTubeChanel-1"} callBack={() => Button1Foo("Vasya", 21, "Live in Minsk")}/>
//
//         <Button name={"MyYouTubeChanel-2"} callBack={() => Button2Foo("Petya")}/>
//
//         <Button name={"Stupid Button"} callBack={() => Button3Foo()}/>


//                          {/*// MAP METHOD*/}
//         {/*    // <div className="App">*/}
//         {/*    //     <NewComponent car={topCars}/>*/}
//         {/*    // </div>*/}
//     </div>
// );


