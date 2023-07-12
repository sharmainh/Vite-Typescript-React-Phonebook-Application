import { TextField } from '@mui/material' //You can google mui text field for more information about this component. YOU MUST INSTALL mui/material. In order to install mui material (SEE LINK BELOW), enter/copy the command from the website and paste it in the terminal (npm install @mui/material @emotion/react @emotion/styled) just in case here is the command for it. 
import { forwardRef } from 'react'

interface InputType{
    name: string,
    placeholder: string
}

const Input = forwardRef((props: InputType, ref) => { //forward ref exists inside of this component. This allows us to track what the user is typing, and submitting. Then were going to take that data from the TextField code below and push it up to the Input function and use the data in the ContactForm.tsx file so when its time for the user to click the submit button it will take the data that its tracking with it
  return (
    //If you start a project using 'npm' You HAVE to stay using 'npm' the entire time. Other than that, if you use yarn you have to stay with yarn (which is possibly faster then npm) the entire time. https://mui.com/material-ui/getting-started/installation/
    <TextField
        variant="outlined"
        margin="normal"
        inputRef={ref} // This 'ref' react keyword is useful when you need to remind "react" when the code is being broken down into languages that the browser understands, react needs 'ref' to be reminded to keep track of any data that is changing inside of this component/text fiel when the code is broken down. As were typing in the text field we want to be able to use that data to type somewhere else.
        fullWidth //fullWidth defaults to false if you dont add anything else besides the word 'fullWidth'You can hover over the word to see details
        type='text'
        {...props}
    >

    </TextField>
  )
});

export default Input