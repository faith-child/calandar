import React from "react"
import './App.css';
import Calendar from "react-calendar"


class MyCalendar extends React.Component{
    constructor(){
        super()
        this.state={
            event:"To do",
            time:""
        }
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(event){
        const{name,value}= event.target
        this.setState({[name]: value})
    }
    
    
    /*state = {

        date: new Date(),

    }
    onChange = date => this.setState({ date })
    onClick 
    onClickDay  = (value, event) => alert('Clicked day: ', value)
    */
    
    render(){
        return(
            <>
                <h2>Calendar</h2>
                <h3>Add an event </h3>
                <form>
                    <input 
                    name= "event"
                    type = "text"
                    placeholder= "Enter title of Event "
                    value = {this.state.event}
                    onChange = {this.handleChange}
                    />
                    <input 
                    name= "time"
                    type = "date"
                    placeholder= "Enter time of event "
                    value= {this.state.time}
                    onChange= {this.handleChange}
                    />  
                </form>
                
                <Calendar/>
            </>
        )
    }      
}

export default MyCalendar
