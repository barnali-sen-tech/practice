import logo from "./logo.svg";
import "./App.css";
import UserContext from "./UserContext";
import { useContext, useEffect, useState } from "react";
import ContextApiUse from "./ContextApiUse";
import ParentComponentUseCallback from "./useCallbackusage/ParentComponentUseCallback";
import UseMemoUsageCounter from "./useMemoUsage/UseMemoUsageCounter";
import CounterUseReducer from "./useReducerUsage/CounterUseReducer";
import UseRefFile from "./useRefUsage/UseRefFile";
import FocusInputUsingClass from "./useRefUsage/FocusInputUsingClass";
import ForwardRefParent from "./useRefUsage/ForwardRefParent";
import ParentUser from "./classUsage/ParentUser";
import PortalDemo from "./PortalDemo";
// import TodoInput from "./components/TodoInput";
// import TodoList1 from "./components/TodoList1";
// import TodoEdit from "./components/TodoEdit";
import StateLiftingParent from "./stateLifting/StateLiftingParent";

function App() {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "sen Debnath mrs.",
    };
    setUserName(data.name);
  }, []);
  // const [listTodo, setlistTodo] = useState([]);
  // const [editFlag, setEditFlag] = useState(false);
  // const addList = (inputText) => {
  //   setEditFlag(false);
  //   setlistTodo([...listTodo, inputText]);
  // };
  // const addListByIndex = (inputText, index) => {
  //   console.log("addListByIndex", inputText, index);
  //   setEditFlag(true);
  //   listTodo.map((item, ind) => {
  //     if (index === ind) {
  //       listTodo.splice(ind, 1, inputText);
  //       console.log("listTodo", listTodo);
  //     }
  //   });
  // };

  // const deleteitem = (index) => {
  //   let newlist = [...listTodo];
  //   newlist.splice(index, 1);
  //   setlistTodo([...newlist]);
  // };

  // const [editedItem, seteditedItem] = useState("");
  // const [editedIndex, setEditedIndex] = useState();

  // const edititem = (index) => {
  //   seteditedItem(listTodo[index]);
  //   setEditedIndex(index);
  // };

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      {/* <TodoInput addList={addList} editedItem={editedItem} />
      editFlag={editFlag}
      seteditedItem={seteditedItem}
      addListByIndex={addListByIndex}
      editedIndex={editedIndex}
      {listTodo.length >= 1 &&
        listTodo.map((item, index) => {
          return (
            <TodoList1
              key={index}
              deleteitem={deleteitem}
              index={index}
              item={item}
              edititem={edititem}
              setEditFlag={setEditFlag}
            />
          );
        })} */}
      <h1>{/* <ContextApiUse /> */}</h1>
      {/* <ParentComponentUseCallback/> 
      <useMemoUsageCounter/> 
      <CounterUseReducer/> */}
      {/* <UseRefFile/> */}
      {/* <Focus InputUsingClass/> */}
      {/* <ForwardRefParent/> */}
      {/* <ParentUser/> */}
      {/* <PortalDemo/> */}
      <StateLiftingParent/>
    </UserContext.Provider>
  );
}

export default App;
