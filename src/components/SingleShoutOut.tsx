import React from "react";
import ShoutOut from "../../../backend/functions/src/models/ShoutOutInterface";
import { fetchShoutOuts } from "../services/ShoutOutService";


interface Props {
    shoutOut: ShoutOut;
}

export default function SingleShoutOut({shoutOut}: Props) {
    
    return (
        <div className='SingleShoutOut'>
            <h1>To: {shoutOut.to}</h1>
            <h2>From: {shoutOut.from}</h2>
            <h2>Msg: {shoutOut.content}</h2>
        </div>
    )
}