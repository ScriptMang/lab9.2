import TextInput from './components/TextInput/TextInput'
import StatsDisplay from './components/StatsDisplay/StatsDisplay'
import type { TextStats } from '../types/index.ts'
import './App.css'


function App() {

  // test func to handle text area 
  const handleText = (text: string) =>  {
    console.log(`The given text is: ${text}`)
  }

 const blankStats: TextStats = {
   characterCount: 0,
   wordCount: 0, 
   readingTime: 0
 }; 

  return (
    <>
    <TextInput onTextChange={handleText} placeholder="Type Here" initialValue= ""/>
    <StatsDisplay stats={blankStats} showReadingTime={false}/>
    </>
  )
}

export default App
