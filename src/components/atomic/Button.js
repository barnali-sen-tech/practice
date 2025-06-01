import React, { useEffect, useRef } from "react";
    
    const buttonStyle =  {
        border:'none',
        backgroundColor:'none',
        color:'black',
        fontWeight:'bold '
    }

    const buttonSuccessStyle =  {
        backgroundColor: 'green'
    }
 const buttonErrorStyle =  {
        backgroundColor: 'red'
    }
     const buttonWarningStyle =  {
        backgroundColor: 'yellow'
    }
     const buttonInfoStyle =  {
        backgroundColor: 'blue'
    }
     const buttonSmallStyle =  {
        fontSize: '12px'
    }
 const buttonMediumStyle =  {
        fontSize: '20px'
    }
     const buttonLargeStyle =  {
        fontSize: '30px'
    }

    const roundedStyle = {
      borderRadius:'5px'
    }

const Button = (props) => {
    console.log(props);
    
  const sizeMapping = {
    SMALL: "small",
    MEDIUM: "medium",
    LARGE: "large",
  };

//   const ref = useRef();
  

// //   const type = props.type;
//   let colorValue;
// useEffect(()=>{

//  if(props.type==="SUCCESS"){
//     ref.current.style.color="green";
//  }
//  else if(props.type==="INFO"){
//     ref.current.style.color="blue";
//  }
//  else if(props.type==="WARNING"){
//     ref.current.style.color="yellow";
//  }
//  else if(props.type==="ERROR"){
//     ref.current.style.color="red";
//  }

// },[])

// console.log(colorValue);

  return (
    <>
      {
        <>
          <button className="buttonStyle"  
          style={{ fontSize: "10px",...(props.type === "SUCCESS" && buttonSuccessStyle ),
            ...(props.type === "ERROR" && buttonErrorStyle),
            ...(props.type === "WARNING" && buttonWarningStyle),
            ...(props.type === "INFO" && buttonInfoStyle),
            ...(props.size === "small" && buttonSmallStyle),
             ...(props.size === "medium" && buttonMediumStyle),
              ...(props.size === "large" && buttonLargeStyle),
              ...(props.roundedCorner?roundedStyle:null) 
          }}>
            {props.children}
          </button>
        </>
}
    </>
  );
};

export default Button;
