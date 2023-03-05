import React from "react";
import id from "random-id"

const Messages = (props) => {
    console.log(props.messages);

    const renderMessage = (message) => {
        const {member, text} = message;
        const {currentMember} = props;
        const messageFromMe = member.id === currentMember.id;
        const className = messageFromMe ? "Messages-message currentMember" : "Messages-message";

        var randomId = require('random-id');
        var len = 30;
        var pattern = "aA0"

        var key = randomId(len, pattern)

        
        return (
            <li className={className} key={key}>
                <span
                    className="avatar"
                    style={{backgroundColor: member.color}}
                />
                <div className="Message-content">
                    <div className="username">
                    {member.username}
                    </div>
                    <div className="text">{text}</div>
                </div>
            </li>
        );
        }

    return (
        <ul className="Messages-list">
            {props.messages.map(m => renderMessage(m))}
        </ul>

    )
}

export default Messages;