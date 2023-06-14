import React from 'react'
import { AnimateOnChange, HideUntilLoaded } from 'react-animation';

const New = () => {
    const { useState, useEffect } = React;
    const words = [
        'Loading...',
        'Still loading...',
        'Hmm',
        'Should have loaded by now...',
        'Wait, is this on?',
        'Let me try again'
    ]

    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (current === words.length - 1) {
                setCurrent(0)
            } else {
                setCurrent(current + 1)
            }
        }, 2000);
        return (() => {
            clearInterval(interval)
        })
    })
    return (
        <div style={{height:"100vh",width:"100%",backgroundColor:"rgb(200 241 203)",justifyContent:"center",alignItems:"center",display:"flex"}}>
            <h1><AnimateOnChange>{words[current]}</AnimateOnChange></h1>
        </div>
    )
}

export default New;