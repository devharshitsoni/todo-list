const Textfield =({placeholder,type,handleChange,value,className})=>{
    return(
        <div >
            <input className={className} placeholder={placeholder} type={type} onChange={handleChange} value={value} />
        </div>
    )
}
export default Textfield












// const Textfield =({placeholder,type})=>{
//     return (
//         <div className="mt-2.5">
//          <input className=" mx-auto mt-16 max-w-xl sm:mt-20 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  placeholder={placeholder} type={type} />
//         </div>
//     )
// }
// export default Textfield