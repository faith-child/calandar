import React , {useState, useEffect} from "react"
import "./styles.css"
import Header from "./Header"
import buildCalendar from "./Build";

function MyCalendar({value, onChange}){
    const [calendar, setCalendar] = useState([])
   
  
    
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
    
    return(
        <div className="calendar">
        <Header value={value} setValue={onChange}/>
           <div className="body">
            <div className="day-names"> {
                ["s","m","t","w","t","f","s"].map((d) => (
                    <div className="week">{d}</div>
                ))}
            </div>
            {calendar.map((week) => (
                    <div >
                        {week.map((day) => (
                            <div className="day" onClick ={()=>onChange(day)}>
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
