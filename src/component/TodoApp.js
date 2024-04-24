import React, { Component } from "react";
import "./TodoApp.css";
import EditPopup from "./EditPopup";

class TodoApp extends Component {
  // state store value
  state = {
    todoMessage: "",
    messageList: [],
    isEditing: false,
    isEditIndex:0
  };

  handleChange = (event) => {
    this.setState({
      todoMessage: event.target.value,
    });
  };

  storeMessage = (event) => {
    event.preventDefault(); /// page did 't refresh
    const { todoMessage } = this.state;
    // const allMessages=this.state.messageList
    // allMessages.push(todoMessage)
    this.setState({
      //using spread operator
      messageList: [...this.state.messageList, todoMessage],
      todoMessage: "",
    });
  };

  deleteItem = (index) => {
    const allMessage = [...this.state.messageList.reverse()];
    allMessage.splice(index, 1);
    this.setState({
      messageList: allMessage,

      // use this using filter to delete
      // messageList: this.this.state.messageList.filter((data,key)=>key!==index)
    });
  };

  setIsEditing = (index) => {
    const isEditing = !this.state.isEditing;
    this.setState({
      isEditing: isEditing,
      isEditIndex:index
    });

    //console.log(this.state.isEditing)
  };
  handleUpdateMessage = (updatedMessage) => {
    this.setState({ messageList: updatedMessage, isEditing: false });
  }

  
  //  mShowPop=()=>{

  //  }
  render() {

   
    const { todoMessage, messageList, isEditing } = this.state;
    return (
      <div className="todo-container">
        {isEditing && (
          <div className="modal-overlay">
            <EditPopup index={this.state.isEditIndex} messageList={this.state.messageList} 
             handleUpdateMessage={this.handleUpdateMessage} 
            />
  
          </div>
        )}

        <h1>Todo App</h1>
        <form className="input-section" onSubmit={this.storeMessage}>
          <input
            type="text"
            value={todoMessage}
            placeholder="enter todo"
            onChange={this.handleChange}
          ></input>
          {/* <button>ADD</button> */}
        </form>

        <ul>
          {messageList.reverse().map((data, index) => {
            return (
              <div className="icon">
                <li key={index}>
                  <span>{data}</span>{" "}
                  <i
                    className="fa-solid fa-pen-to-square"
                    onClick={()=>this.setIsEditing(index)}
                  />
                  <i
                    className="fa-solid fa-trash-can"
                    onClick={() => this.deleteItem(index)}
                  />
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoApp;
