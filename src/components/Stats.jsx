
const Stats = ({targetsData}) => {
  
// TODO: Change statsColor if targetsData.length === 0

  return (

        <h6 className="mt-1 text-muted">
        This Week Targets:
         {targetsData.length}
         </h6>
  )
}

export default Stats;