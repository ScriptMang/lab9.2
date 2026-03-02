import type {StatsDisplayProps} from '../../../types/index.ts'


function StatsDisplay({stats, showReadingTime}: StatsDisplayProps){
    return (
     <>
     <p>{stats}</p>
     </>
    )
}

export default StatsDisplay