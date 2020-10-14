import React from "react"
import moment from "moment"
 import Form from "../addEvent/Form"
// import EventForm from "../addEvent/EventForm"
import "./styles.css"
import {
    Flex,
    
    Text,
} from "@chakra-ui/core";

function Day({ day, date, onClick,isOpen, onOpen, onClose} ) {


    return (
        <Flex p={2}
            w='11em'
            h='7em'
            bg='gray.200'
            rounded={10}
            direction='column'

        >
            <Flex justify='space-between'  >
                <Text {...dayStyles(date, day)} onClick={()=>onClick(day)}>{
                    moment(day).format("D").toString()}
                </Text>
                <Form  onClick={onOpen} isOpen={isOpen} onClose={onClose}/>
            </Flex>
                   

        </Flex>
    )

}

function isToday(day) {
    return moment(new Date()).isSame(day, "day")
}

function isSelected(date, day) {
    return moment(date).isSame(day, "day")

}


// function nextMonth() {
//     return value.clone().add(1, "month")
// }
function thisMonth(date, day) {
    return moment(date).isSame(day, "month");
}
function dayStyles(date, day) {

    const notCurrent = {
        color: "grey",
        fontWeight: "lighter"
    }
    const selected = {
        color: "black",
        fontWeight: "bold"
    }
    const today = {
        color: "red",
        fontWeight: "bolder"
    }

    if (!thisMonth(date, day)) return notCurrent
    // if (beforeToday(day)) return "before"
    if (isSelected(date, day) && (!isToday(day))) return selected
    if (isToday(day)) return today
    return {}
}
// function showModal(e){
//    }

export default Day;