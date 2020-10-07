import React, { useState, useEffect } from "react"
import moment from "moment"
import "./styles.css"
import Header from "./Header"

import Day from "./Day"
import buildCalendar from "./Build";

function MyCalendar (){
  
    
    const[calendar, setCalendar] = useState([])
    const[value, setValue] = useState(moment())

  

    useEffect(() => {
        setCalendar(buildCalendar(value))
    }, [value])

    // toggleModal = () => {
    //     const { showEventModal } = this.state;
    //     const newState = { showEventModal: !showEventModal };

    return (
        <div className="calendar">
            <Header value={value} onChange={setValue} />
            <div className="body">
                <div className="day-names "> {
                    ["s", "m", "t", "w", "t", "f", "s"].map((d) => (
                        <div className="week">{d}</div>
                    ))}
                </div>
                {calendar.map((week) => (
                    //Add light grey colouring to previous month days 

                    <div>
                        {week.map((day) => (
                         <Day day={day} onClick={setValue}  value={value} />
                        ))}
                        
                    </div>

                ))}
            </div>
        </div>
        )
    }


export default MyCalendar
