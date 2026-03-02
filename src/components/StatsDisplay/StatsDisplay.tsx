import type {StatsDisplayProps} from '../../../types/index.ts'


function StatsDisplay({stats, showReadingTime}: StatsDisplayProps){
    const {characterCount, wordCount, readingTime} = stats;
     
    return (
     <div id="statsCounter">

     <div>
      <p>Characters</p>
      <div>{characterCount}</div>
     </div>   
     
     <div>
      <p>Words</p>
      <div>{wordCount}</div>
     </div> 
     
     <div>
      <p>Reading Time</p>
      {showReadingTime ? <div>{readingTime}</div> : showReadingTime}
     </div> 

     </div>
    )
}

export default StatsDisplay