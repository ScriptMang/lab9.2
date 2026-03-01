import TextInput from './components/TextInput/TextInput'
import './App.css'

function App() {

  // test func to handle text area 
  const handleText = (text: string) =>  {
    console.log(`The given text is: ${text}`)
  }

  return (
    <>
    <TextInput onTextChange={handleText} placeholder="Type Here" initialValue= "blah blah blah"/>
    </>
  )
}

export default App
