const TargetDate = () => {

  
      // Set today date
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, '0');
      let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      let yyyy = today.getFullYear();
      today = `${dd}/${mm}/${yyyy}`;

      // TODO: after 7 days the TargetItem will be deleted

      let date = new Date();
      let datePlusSevenDays = date.toLocaleDateString(date.setDate(date.getDate() + 7));


  return (
    <div>{today}</div>
  )
}

export default TargetDate