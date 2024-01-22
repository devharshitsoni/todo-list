import Paragraph from "../Paragraph/Paragraph"
import Textfield from "../Textfield/TextField"
import Button from "../Buttons/Button"

const Form =()=>{
    return(
     <div>
      <Paragraph paragraphText="Registration Form"/>
      <Textfield  placeholder="Type Email Here" type="text"/>
      <Textfield  placeholder="Type Password" type="password"/>
      <Button buttonName="Submit"/>
      </div>
    )
}

export default Form