import React, {useState} from 'react';
import moment from "moment"
import MyCalendar from "./MyCalendar"
// import Eventform from "./Eventform"
// import { ThemeProvider, CSSReset } from "@chakra-ui/core";


function App() {
  const [value, setValue] = useState(moment())
  return (
    
    
    
        <MyCalendar value={value} onChange={setValue}/>
    
      
    
  );
}

export default App;
