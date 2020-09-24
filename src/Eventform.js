
import React from "react"
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Box
    
  } from "@chakra-ui/core";
class Eventform extends React.Component{
    constructor(){
        super()
        this.state={
            name:"",
            value:"",
            onChange:""
        }
        this.handleChange=this.handleChange.bind(this)
       
    }
    handleChange(event){
        const{name,value}= event.target
        this.setState({[name]: value})
    }

    render(props){
        return(
            <form>
                <FormControl p="50px"> 
                        <FormLabel> Event Name </FormLabel>
                        <Input 
                            name= "event"
                            type = "text"
                            placeholder= "Enter title of Event "
                            value = {this.state.event}
                            onChange = {this.handleChange}
                        />
                        <h3> Date </h3>
                        <Input 
                            name= "date"
                            type = "date"
                            placeholder= "Enter time of event "
                            value= {this.state.time}
                            onChange= {this.handleChange}
                        />  
                        <h3> Start  Time </h3>
                        <Input 
                            name= "startTime"
                            type = "time"
                            placeholder= "Enter time of event "
                            value= {this.state.startTime}
                            onChange= {this.handleChange}
                        />
                        <h3> End Time </h3>
                        <Input 
                            name= "endTime"
                            type = "time"
                            placeholder= "Enter time of event "
                            value= {this.state.endTime}
                            onChange= {this.handleChange}
                        />    
                        <br/>
                        <Box> 
                            <p>{this.state.event}</p>
                            <br/>
                            <p>{this.state.date}</p>
                            <br/>
                            <p>{this.state.startTime}</p>
                            <br/>
                            <p>{this.state.endTime}</p>
                        </Box>
                        <br/>
                        <Button 
                        pos="absolute" 
                        mt={4}
                        variantColor="teal"
                        type="submit" 
                        >
                            Submit 
                        </Button>
                   
                </FormControl> 
            </form>
            
        )
    }
}
export default Eventform