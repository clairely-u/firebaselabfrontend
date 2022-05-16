import React, {useState, useEffect} from "react";
import ShoutOut from "../models/ShoutOutInterface";
import { fetchShoutOuts } from "../services/ShoutOutService";
import SingleShoutOut from "./SingleShoutOut";

export default function ShoutOutList() {
    const [shoutOuts, setShoutOuts] = useState<ShoutOut[]>([]);

    useEffect(() => {
        fetchShoutOuts().then(data => {
            setShoutOuts(data);
        });
    }, []);

    return (
        <div className = 'ShoutOutList'>
            <p>Just trying to see if the component is rendering at all?</p>
            {shoutOuts.map(shoutOut => 
                <p className='ShoutOut_inner' key={shoutOut.to}><SingleShoutOut shoutOut={shoutOut}/></p>)}
        </div>
    )
}