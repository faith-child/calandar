import React, { useState, useEffect } from "react"
import moment from "moment"
import "./styles.css"
import Header from "./Header"
import Day from "./Day"
import buildCalendar from "./Build";
import { SimpleGrid, Box, Text } from "@chakra-ui/core"

function MyCalendar() {


    const [calendar, setCalendar] = useState([])
    const [date, setDate] = useState(moment())



    useEffect(() => {
        setCalendar(buildCalendar(date))
    }, [date])



    return (
        <Box >
            <Box >
                <Header value={date} onChange={setDate} />
            </Box>
            <Box className="body">
                <SimpleGrid columns={7} spacing={4} >
                    { ["S", "M", "T", "W", "T", "F", "S"].map((d) => (
                        <Text fontSize="lg"  as="em"  textAlign="center">{d}</Text>
                    ))}
                    {calendar.map((week) => {
                        return week.map((day) => (
                            <Day day={day} onClick={setDate} date={date} />
                        ))
                    })}
                </SimpleGrid>
            </Box>
        </Box>
    )
}


export default MyCalendar
