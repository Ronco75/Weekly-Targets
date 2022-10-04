
const Stats = ({targetsData}) => {
  
// TODO: Change statsColor if targetsData.length === 0
  

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