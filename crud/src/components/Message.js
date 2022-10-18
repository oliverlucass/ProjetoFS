import React, { useState } from "react";

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: '',
            username:  '',
            text: ''
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            username: props.username,
            text: props.text
        }
    }

    render(){
        return(
            <>
                <div class="card h-100 mb-3 " style={{"max-width": "50%"}}>
                    <div class="card-body p-3">
                        <p class="card-title text-start fs-6 fw-semibold">{this.state.username}</p>
                        <p class="card-text ms-3 lh-sm text-start text-break">{this.state.text}</p>
                    </div>
                </div>
            </>
        );
    }
}

export default Message;