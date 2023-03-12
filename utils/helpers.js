
module.exports = {
    // Helper function to format date 
    format_date: date => {
      if (date) {
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
      } else {
        console.log(date)
        return '';
      }
    }
    //add additional custom helpers here if needed
  };
