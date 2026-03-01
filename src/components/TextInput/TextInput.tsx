import type {TextInputProps} from '../../../types/index'

function TextInput({onTextChange, placeholder, initialValue}: TextInputProps){

    return (
        <>
        <textarea 
          placeholder={placeholder}
          defaultValue={initialValue}
          onChange= {(e) => onTextChange(e.target.value)}
        />
        </>
    )
}

export default TextInput