import React, { useEffect, useState, useRef } from "react"; 
import "../imageSlider/Slider.css" 
const Slider = () => {
const ref =useRef(null) 
const data = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzcaxKqz00H5NCQ07FAtjTuHT-UoNLoLiFHQ&s",
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb8Qj2B9j4zzCi01mHuV_5z2CPR5Y4B6ArMg&s",
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9pXzOLy0CjK560G5f1zsNZ8p1SwnVSNC01g&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWcjFMq51BbMcbW2nELatP5McWFIB2Wibezg&s"] 
const [activeState, setActiveState] = useState(0) 
const handleNext = () => { 
if (activeState === data.length - 1) { 
setActiveState(0) }
else {
setActiveState(activeState + 1)
}}
const handlePrev = () => { 
if (activeState === 0) { setActiveState(data.length - 1) 
} 
else {
setActiveState(activeState - 1) 
} 
console.log("activeState", activeState); 
const changeBgColor=()=>{ 
console.log(ref.current); 
ref.current.style.backgroundColor="red" 
}

return (<> 
<div style={{ display: "flex", justifyContent: "center" }}> 
<button onClick={handlePrev}>prev</button> 
{data.map((item, index)=>{ 
return(<> 
<img src={item} 

className="imageSize" 
style={activeState===index?{display: "block"}:{display:"none"}} 
alt="images" /> 
</>) 
})}

<button onClick={handleNext}>Next</button> 
<button ref={ref} onClick={changeBgColor}>changeBgColor</button> 
</div> 
I 
</>) }
}
export default Slider;