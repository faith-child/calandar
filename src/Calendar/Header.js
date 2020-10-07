import  React from "react"
import moment from 'moment'
function Header({value, onChange}){


    function currMonthName(){
        return moment(value).format("MMMM")
        
    }
   
    function currYear(){
        return moment(value).format("YYYY")
        
    }
    function prevMonth(){
        return value.clone().subtract(1, "month")
    }
    function nextMonth(){
        return value.clone().add(1, "month")
    }
    function thisMonth() {
        return moment(value).isSame(new Date(), "month");
      }
    
    return(
    <div className="header">
            <div className="previous"
                onClick={() => !thisMonth() && onChange(prevMonth())}
            >{String.fromCharCode(171)}</div>
            <div className="current"
            >{currMonthName()} {currYear()}</div>
            <div className="next"
                onClick={()=> onChange(nextMonth())}
            >{String.fromCharCode(187)} 
            </div>
        </div>
    )
}
export default Header