import React from "react"
import moment from 'moment'
import { Flex, Heading, IconButton } from "@chakra-ui/core"
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
function Header({ value, onChange }) {


    function currMonthName() {
        return moment(value).format("MMMM")

    }

    function currYear() {
        return moment(value).format("YYYY")

    }
    function prevMonth() {
        return value.clone().subtract(1, "month")
    }
    function nextMonth() {
        return value.clone().add(1, "month")
    }
    function thisMonth() {
        return moment(value).isSame(new Date(), "month");
    }

    return (
        <Flex display="flex" alignItems="center" justifyContent="space-between">
            <Flex align="flex-end">
                <IconButton variant="outline"variantColor="teal" icon={BsArrowLeft} onClick={() => !thisMonth() && onChange(prevMonth())}>
                    {String.fromCharCode(171)}
                </IconButton>
            </Flex>
            <Flex align="center" justify="center">
                <Heading> {currMonthName()} {currYear()}</Heading>
            </Flex>
            <Flex>
                <IconButton variant="outline"variantColor="teal"icon={BsArrowRight} onClick={() => onChange(nextMonth())} >
                    {String.fromCharCode(187)}
                </IconButton>
            </Flex>
            
        </Flex>
    )
}
export default Header