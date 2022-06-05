import React from "react";

// type NewComponentType = {
//     // students: Array<StudentType>
//     students: StudentType[]
// }
//
// type StudentType = {
//     id: number
//     name: string
//     age: number
// }
type CarsArray = {
    car: Car[]
}

type Car = {
    manufacturer: string,
    model: string
}

export const NewComponent = (props: CarsArray) => {
    return (
        <table>
            {props.car.map((CarsArray, index) => {
                return (
                    <tr key={index}>
                        <th><span>{index + 1} {CarsArray.manufacturer}</span></th>
                        <th><span> Serial: {CarsArray.model}</span></th>
                    </tr>
                )
            })}

        </table>
        // <ul>
        //     {props.students.map((objectFromStudentArray, index) => {
        //         return (
        //             <li key={objectFromStudentArray.id}>
        //                 <span>{objectFromStudentArray.name}</span>
        //                 <span> age: {objectFromStudentArray.age}</span>
        //             </li>
        //         )
        //     })}
        // </ul>
    )
}