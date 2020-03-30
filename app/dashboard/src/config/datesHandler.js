/* function validateDateBetweenTwoDates(fromDate,toDate,givenDate){
    return getvalidDate(givenDate) <= getvalidDate(toDate) && getvalidDate(givenDate) >= getvalidDate(fromDate);
} */

const datesHandler = {
    getLastDayOfMonth: (Year, Month) => {
        return new Date((new Date(Year, Month+1, 1)) - 1);
},
    getLastMonths: (n) => {
    /* var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"]; */
  
    var today = new Date();
    var lastMonths = []
  
    for (let i = 0; i < n; i++) {
      let month = ((today.getMonth() - i) < 0)? ((today.getMonth() - i) + 12) : (today.getMonth() - i);
      let year = ((today.getMonth() - i) < 0)?  (today.getFullYear() - 1) : (today.getFullYear());
      lastMonths.push(new Date(year, month, 1));
    }
    return lastMonths.reverse();
},
    getLastMonthsNames: (dates) => {
    var allMonthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    return dates.map( date => allMonthNames[date.getMonth()] + '-' + date.getFullYear());
},


}



export default datesHandler;