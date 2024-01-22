const Paragraph =({paragraphText,className})=>{
    console.log(paragraphText)
    return(
        <div>
            <p className={className}>{paragraphText}  </p>
        </div>
    )
}


export default Paragraph;