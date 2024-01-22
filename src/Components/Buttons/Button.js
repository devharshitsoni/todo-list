const Button = ({buttonName ,buttonClick})=>{
    return(
        <div className="mt-3.5 flex justify-center items-center">
            <button onClick={buttonClick} className=" w-100 block  mx-20 rounded-md bg-indigo-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{buttonName}</button>
        </div>
    )
}

export default Button




// const Button =(props)=>{
//     return(
//         <div className="mt-10">
//             <button className=" w-100 block  mx-20 rounded-md bg-indigo-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{props.buttonName}</button>
//         </div>
//     )
// }

// export default Button;