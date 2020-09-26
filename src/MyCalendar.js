import React , {useState, useEffect} from "react"
import moment from "moment"
import "./styles.css"
import Header from "./Header"
import Day from "./Day"
import buildCalendar from "./Build";

function MyCalendar(){
    const [calendar, setCalendar] = useState([])
    const[value,setValue] = useState(moment())

    useEffect(()=>{
        setCalendar(buildCalendar(value))
    }, [value])

    // function buildCalendar(date) {
    //     const a = [];
    
    //     const startDay = date.clone().startOf("month").startOf("week");
    //     const endDay = date.clone().endOf("month").endOf("week");
    
    //     const _date = startDay.clone().subtract(1, "day");
    
    //     while (_date.isBefore(endDay, "day")) {
    //       a.push(
    //         Array(7)
    //           .fill(0)
    //           .map(() => _date.add(1, "day").clone())
    //       );
    //     }
    //     return a;
    //   }
    
     
    
   
      
    // function monthStyles(month){
    //         if(prevMonth(month)) return "previous"
    //         if(thisMonth(month)) return "current"
    //         if(nextMonth(month)) return "next"
    //         return""

    // }
    

    return(
        <div className="calendar grid-container">
        <Header value={value}  onChange={setValue}/>
        <div className="body">
        <div className="day-names "> {
                ["s","m","t","w","t","f","s"].map((d) => (
                    <div className="week">{d}</div>
                ))}
        </div>
            {calendar.map((week) => (
                //Add light grey colouring to previous month days 

                    <div>
                        {week.map((day) => (
                           <Day day={day} onClick={setValue} value={value}/>
                        ))}
                    </div>

                ))}
           </div>
        </div>
    )

}
  
export default MyCalendar
