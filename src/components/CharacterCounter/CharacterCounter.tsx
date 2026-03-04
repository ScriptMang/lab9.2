import type {CharacterCounterProps} from '../../types/index.ts'

function CharacterCounter({minWords, maxWords, targetReadingTime}:CharacterCounterProps){
    return(
        <>
        <div>Min: {minWords} | Max: {maxWords} | TargetReadingTime: {targetReadingTime} mins</div>
        </>
    )
}
export default CharacterCounter