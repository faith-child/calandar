import React , {useState, useEffect} from "react"
import moment from "moment"
import "./styles.css"
import Header from "./Header"
import buildCalendar from "./Build";

function MyCalendar({value, onChange}){
    const [calendar, setCalendar] = useState([])

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
    
    function isSelected(day){
        return moment(value).isSame(day, "day")
    }
    function beforeToday(day){
        return moment(day).isBefore(new Date(), "day")
    }
    function isToday(day){
        return moment(new Date()).isSame(day, "day")
    }

    function dayStyles(day){
        if(beforeToday(day)) return "before"
        if(isSelected(day)) return "selected"
        if(isToday(day)) return "today"
        return""
    }

    return(
        <div className="calendar ">
        <Header value={value} onChange={onChange}/>
        <div className="body">
        <div className="day-names "> {
                ["s","m","t","w","t","f","s"].map((d) => (
                    <div className="week">{d}</div>
                ))}
        </div>
            {calendar.map((week) => (
                    <div>
                        {week.map((day) => (
                            <div className="day " onClick ={()=>onChange(day)}>
                                <div className={dayStyles(day)}  >{
                                moment(day).format("D").toString()}
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
