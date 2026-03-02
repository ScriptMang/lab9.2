import TextInput from './components/TextInput/TextInput'
import StatsDisplay from './components/StatsDisplay/StatsDisplay'
import type { TextStats } from '../types/index.ts'
import './App.css'

import {useState} from "react"

function App() {

  const [charCount, setCharCount] = useState(0);
  // test func to handle text area 
  const handleText = (text: string) =>  {
    const charArr = [...text];
    console.log(`The given text is: ${charArr}`)
    setCharCount(charArr.length);
  }

 const blankStats: TextStats = {
   characterCount: charCount,
   wordCount: 0, 
   readingTime: 0
 }; 

  return (
    <>
    <TextInput onTextChange={handleText} placeholder="Type Here" initialValue= ""/>
    <StatsDisplay stats={blankStats} showReadingTime={true}/>
    </>
  )
}

export default App
