import { useContext } from 'react'
import DataContext from '../context/DataContext'

const Stats = () => {
  
  const {targetsData} = useContext(DataContext);

  let statsColor = '';

  if(targetsData.length === 0) {
    statsColor = 'mt-1 text-danger'
  } else {
    statsColor = 'mt-1 text-muted'
  }

  return (

        <h6 className={statsColor}>
        This Week Targets:
         {targetsData.length}
         </h6>
  )
}

export default Stats;