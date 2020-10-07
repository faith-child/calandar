import React from "react"
import moment from "moment"
import "./styles.css"
// import Eventform from "./AddEvent/Eventform"
import {IconButton } from "@chakra-ui/core";
// class Event extends React.Component{
//     constructor(){
//         super()
//         state={
//             show:false
//         }
//     }
//     showModal = e => {
//         this.setState({
//           show: !this.state.show
//         })
//       }

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
    // function showModal(e){
    //     return <Eventform/>
    // }

    return (
        <div className="day" onClick={() => !beforeToday(day) && onClick(day)}>
            <div className={dayStyles(day)}>{
                moment(day).format("D").toString()}
            </div>
            <IconButton  aria-label="Add Event"icon="add" size="sm"  variantColor="red" />
        </div>
    )

}



export default Day;