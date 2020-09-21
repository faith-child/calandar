import React , {useState, useEffect} from "react"

import "./styles.css"
import moment from "moment"
import buildCalendar from "./Build";

function MyCalendar(){
    const [calendar, setCalendar] = useState([])
    const [value, setValue] = useState(moment())
  
    
    useEffect(()=>{
        setCalendar(buildCalendar(value))
    }, [value])
    
    function isSelected(day){
        return value.isSame(day, "day")
    }
    function beforeToday(day){
        return day.isBefore(new Date(), "day")
    }
    function isToday(day){
        return day.isSame(new Date(), "day")
    }

    function dayStyles(day){
        if(beforeToday(day)) return "before"
        if(isSelected(day)) return "selected"
        if(isToday(day)) return "today"
        return""
    }
    function currMonthName(){
        return value.format("MMMM")
    }

    function currYear(){
        return value.format("YYYY")
    }
    return(
        <div className="calendar">
        <div className="header">
            <div></div>
            <div>{currMonthName()} {currYear()}</div>
            <div></div>
        </div>

           <div className="body">
            {calendar.map((week) => (
                    <div >
                        {week.map((day) => (
                            <div className="day" onClick ={()=>setValue(day)}>
                                <div className={dayStyles(day)}>{
                                day.format("D").toString()}
                                </div>
                            </div>
                        ))}
                    </div>

                ))}
           </div>
        </div>
    )

}
  
export default MyCalendar
