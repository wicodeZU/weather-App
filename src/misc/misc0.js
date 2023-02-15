document.addEventListener('DOMContentLoaded', function () {
    const thisYear = document.querySelector('.this-year');
    const thisMonth = document.querySelector('.this-month');
    const thisDate = document.querySelector('.this-date');

    function todayDate(){
        let year = (new Date()).getFullYear();
        let date = (new Date()).getDate();
        let month = (new Date()).getMonth();

        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        for(let i = 0; i < months.length; i++){
            if(month === i){
                thisMonth.innerText = months[i].slice(0,3);
            }
        }
        thisDate.innerText = date;
        thisYear.innerText = year;
    }
    todayDate();
  });
  