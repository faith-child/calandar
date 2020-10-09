import React  from "react"
import moment from "moment"
import Modal from "../addEvent/Modal"
// import EventForm from "../addEvent/EventForm"
import "./styles.css"
import { IconButton, Flex, Box, Badge } from "@chakra-ui/core";
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
class Day extends React.Component {
    
    state={
        show: false
    }
    
    hideModal = () => {
        this.setState({ show: false });
         };
    showModal = e => {
        this.setState({
            show: !this.state.show
        })
    }
   
    static beforeToday(day) {
        return moment(day).isBefore(new Date(), "day")
    }

    static isToday(day) {
        return moment(new Date()).isSame(day, "day")
    }

    isSelected(date, day) {
        return moment(date).isSame(day, "day")

    }
    static thisMonth(date, day) {
        return moment(date).isSame(day, "month");
    }
    dayStyles(date, day) {
        if (!Day.thisMonth(date, day)) return "notCurrent"
        // if (beforeToday(day)) return "before"
        if (Day.isToday(day)) return "today"
        if (this.isSelected(date, day)) return "selected"
        return ""
    }
        // toggleModal = () => {
    //     const { showEventModal } = this.state;
    //     const newState = { showEventModal: !showEventModal };
    render() {
        return (
            <Flex p={1}
                w='9em'
                h='6em'
                bg='gray.200'
                rounded={10}
                direction='column'
                onClick={() => !Day.beforeToday(this.props.day) && this.props.onClick(this.props.day)}
            >
                <Flex w='100%' justify='space-between'>
                    <Box className={this.dayStyles(this.props.date, this.props.day)}>{
                        moment(this.props.day).format("D").toString()}
                    </Box>
                    <IconButton isRound aria-label="Add Event" icon="add" size="sm" variantColor="red" onClick={e =>{ this.showModal() }} /> 
                </Flex>
                <Modal  show={this.state.show} handleClose={this.hideModal}>
                    </Modal> 
                <Badge>hello</Badge>
            </Flex>
        )

    }
}

// function Day({ day, onClick, value }) {


//     function beforeToday(day) {
//         return moment(day).isBefore(new Date(), "day")
//     }


//     function isToday(day) {
//         return moment(new Date()).isSame(day, "day")
//     }

//     function isSelected(day) {
//         return moment(value).isSame(day, "day")

//     }


//     // function nextMonth() {
//     //     return value.clone().add(1, "month")
//     // }
//     function thisMonth() {
//         return moment(value).isSame(day, "month");
//     }
//     function dayStyles(day) {
//         if (!thisMonth(day)) return "before"
//         // if (beforeToday(day)) return "before"
//         if (isSelected(day) && (!isToday(day))) return "selected"
//         if (isToday(day)) return "today"
//         return ""
//     }
//     // function showModal(e){
//     //     return <Eventform/>
//     // }

//     return (
//         <div className="day" onClick={() => !beforeToday(day) && onClick(day)}>
//             <div className={dayStyles(day)}>{
//                 moment(day).format("D").toString()}
//             </div>
//             <IconButton float="right" isRound aria-label="Add Event"icon="add" size="sm"  variantColor="red" />
//         </div>
//     )

// }



export default Day;