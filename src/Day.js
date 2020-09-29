import React from "react"
import moment from "moment"
import "./styles.css"

function Day({ day, onClick, value }) {
    function beforeToday(day) {
        return moment(day).isBefore(new Date(), "day")
    }
    

    function isToday(day) {
        return moment(new Date()).isSame(day, "day")
    }

    function isSelected(day) {
        return moment(value).isSame(day, "day")
    }
    // function nextMonth() {
    //     return value.clone().add(1, "month")
    // }
    function thisMonth() {
        return moment(value).isSame(day, "month");
    }
    function dayStyles(day) {
        if (!thisMonth(day)) return "before"
        // if (beforeToday(day)) return "before"
        if (isSelected(day) && (!isToday(day))) return "selected"
        if (isToday(day)) return "today"
        return ""
    }
   

    return (
        <div className="day" onClick={() => !beforeToday(day) && onClick(day)}>
            <div className={dayStyles(day)}>{
                moment(day).format("D").toString()}
            </div>
        </div>
    )

}



export default Day