import React, { Component } from "react";
import "./EditPopup.css";
class EditPopup extends Component {
  state = {
    updatedMessage: this.props.messageList.slice().reverse()[this.props.index]
  };

  handleInputChange=(event)=>{
    this.setState({ updatedMessage: event.target.value});
  }

  mUdateMessage =() => {
    const updatedMessageList = [...this.props.messageList];
    updatedMessageList.reverse()[this.props.index] = this.state.updatedMessage;
    this.props.handleUpdateMessage(updatedMessageList.reverse());
  };

  render() {
    return (
      <div>
        <div className="edit-full-scree">
          <div className="edit-popup">
            <textarea 
              value={this.state.updatedMessage} 
              onChange={this.handleInputChange} 
            />

            <div>
              <button onClick={this.mUdateMessage}>Cancel</button>
              <button onClick={this.mUdateMessage}>Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditPopup;
