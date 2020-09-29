
import React from "react"
import {
    FormControl,
    FormLabel,
    Input,
    Button

} from "@chakra-ui/core";
class Eventform extends React.Component {
    constructor() {
        super()
        this.state = {
            event: "",
            date: "",
            starttime: "",
            endtime: ""

        }
        this.onChangeEvent = this.onChangeEvent.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
        this.onChangestartTime = this.onChangestartTime.bind(this)
        this.onChangeendTime = this.onChangeendTime.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onChangeEvent(e) {
        this.setState({ event: e.target.value })
    }

    onChangeDate(e) {
        this.setState({ date: e.target.value })
    }
    onChangestartTime(e) {
        this.setState({ starttime: e.target.value })
    }
    onChangeendTime(e) {
        this.setState({ endtime: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        this.setState({
            event: "",
            date: "",
            starttime: "",
            endtime: ""
        })
    }

    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                event: this.userData.event,
                date: this.userData.date,
                startTime: this.userData.startTime,
                endTime: this.userData.endTime
            })
        } else {
            this.setState({
                event: "",
                date: "",
                starttime: "",
                endtime: ""
            })
        }
    }
    componentDidUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    render() {
        return (
            <form>
                <FormControl p="50px" width="100%" onSubmit={this.onSubmit}>
                    <FormLabel> Event Name </FormLabel>
                    <Input
                        name="event"
                        type="text"
                        placeholder="Enter title of Event "
                        value={this.state.event}
                        onChange={this.onChangeEvent}
                    />
                    <h3> Date </h3>
                    <Input
                        name="date"
                        type="date"
                        placeholder="Enter time of event "
                        value={this.state.date}
                        onChange={this.onChangeDate}
                    />
                    <h3> Start  Time </h3>
                    <Input
                        name="startTime"
                        type="time"
                        placeholder="Enter time of event "
                        value={this.state.startTime}
                        onChange={this.onChangestartTime}
                    />
                    <h3> End Time </h3>
                    <Input
                        name="endTime"
                        type="time"
                        placeholder="Enter time of event "
                        value={this.state.endTime}
                        onChange={this.onChangeendTime}
                    />
                    {/* <br/>
                        <Box> 
                            <p>{this.state.title}</p>
                            <br/>
                            <p>{this.state.date}</p>
                            <br/>
                            <p>{this.state.startTime}</p>
                            <br/>
                            <p>{this.state.endTime}</p>
                        </Box> */}
                    <br />
                    <Button
                        pos="absolute"
                        mt={4}
                        variantColor="teal"
                        type="submit"
                        onClick={this.submitForm}
                    >
                        Submit
                        </Button>

                </FormControl>
            </form>

        )
    }
}
export default Eventform