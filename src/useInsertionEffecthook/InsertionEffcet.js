import React, { useInsertionEffect ,useRef} from "react";

const InsertionEffect=()=>{
const styleref = useRef(null);
useInsertionEffect(() => {
  const style = document.createElement("style");
  style.textContent(
    `.abc{ 
background-color:"red", 
font-weight: "bold" 
} `
  );
  document.head.appendChild(style);
  styleref.current = style;
  return () => {
    if (styleref.current) {
      document.head.removeChild(styleref.current);
    }
  };
}, []);

return(<>
<div className="abc">Mau mau</div>
</>)
}

export default InsertionEffect;