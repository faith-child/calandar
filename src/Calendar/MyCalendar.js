import React, { useState, useEffect } from "react"
import moment from "moment"
import "./styles.css"
import Header from "./Header"
import Day from "./Day"
import buildCalendar from "./Build";
import { SimpleGrid, Box, Text } from "@chakra-ui/core"

function MyCalendar() {
    

    const [calendar, setCalendar] = useState([])
    const [selectedDate, setSelectedDate] = useState(moment())



    useEffect(() => {
        setCalendar(buildCalendar(selectedDate))
    }, [selectedDate])


    return (
        <Box align="center" justify="center" >
            <Box >
                <Header value={selectedDate} onChange={setSelectedDate} />
            </Box>
            <Box>
                <SimpleGrid columns={7} spacing={2}>
                    {["S", "M", "T", "W", "T", "F", "S"].map((d, index) => (
                        <Text fontSize="lg" as="em" textAlign="center" key={index} >{d}</Text>
                    ))}
                </SimpleGrid>
                <SimpleGrid columns={7} spacing={2} justify="center">

                    {calendar.map((week) => {
                        return week.map((day) => (
                            <Day day={day} onClick={setSelectedDate} date={selectedDate} key={moment(day).format('DD-MM-YYYY')} />
                        ))
                    })}
                </SimpleGrid>
            </Box>
        </Box>
    )
}


export default MyCalendar
