import type {StatsDisplayProps} from '../../../types/index.ts'


function StatsDisplay({stats, showReadingTime}: StatsDisplayProps){
    const {characterCount, wordCount, readingTime} = stats;
     
    return (
     <>
     <p>Characters</p>
     <div>{characterCount}</div>
     
     <p>Words</p>
     <div>{wordCount}</div>

     <p>Reading Time</p>
     {showReadingTime ? <div>{readingTime}</div> : showReadingTime}
     </>
    )
}

export default StatsDisplay