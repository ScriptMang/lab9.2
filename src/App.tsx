import TextInput from './components/TextInput/TextInput'
import StatsDisplay from './components/StatsDisplay/StatsDisplay'
import type { TextStats } from './types/index.ts'
import CharacterCounter from './components/CharacterCounter/CharacterCounter'
import './App.css'

import {useState} from "react"

function App() {

  const [charCount, setCharCount] = useState(0);
  const [wCount, setWCount] = useState(0);
  
  // handletext updates the character_count, word_count, and reading time 
  const handleText = (text: string) =>  {
    const charArr = [...text];
    console.log(`The given text is: ${charArr}`)
    setCharCount(charArr.length);

    // need to get word count
    const words:string[] =  text.split(" ");
    console.log(`The given words is: ${words}`)
    words.forEach(word => {
       const searchWord = [...word];
       searchWord.length > 0 ? setWCount(words.length) : setWCount(words.length-1);
    })
  }

 const statsData: TextStats = {
   characterCount: charCount,
   wordCount: wCount, 
   readingTime: 0
 }; 

  return (
    <>
    <TextInput onTextChange={handleText} placeholder="Type Here" initialValue= ""/>
    <StatsDisplay stats={statsData} showReadingTime={true}/>
    <CharacterCounter minWords={25} maxWords={100} targetReadingTime={3}/>
    </>
  )
}

export default App
