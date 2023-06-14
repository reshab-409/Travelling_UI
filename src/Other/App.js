import React from 'react';
import './App.css';
import { AnimateOnChange, HideUntilLoaded } from 'react-animation';

function App() {


  const { useState, useLayoutEffect, useRef } = React;


  const words = [
    'Reshab',
    'Biswarup',
    'Anurag',
    'Deep',
    'Prosen',
    'Subha',
    '👌',
    'Ashok',
    'great',
  ]

  const [current, setCurrent] = useState(0)
  const [currentWidth, setCurrentWidth] =  useState(0)
  const [currentTextStyle, setCurrentTextStyle] = useState({})
  const currentTextRef = useRef()
  const nextTextRef = useRef()
  
  const nextItem = current => {
    if (current === words.length - 1) {
        return 0
      } else {
        return current + 1
      }
  }

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      setCurrent(nextItem(current))
      nextTextRef.current.innerText = words[nextItem(current)]
      const nextTextSize = nextTextRef.current.offsetWidth
      setCurrentWidth(nextTextRef.current.offsetWidth)
      setCurrentTextStyle ({
          opacity: 0
      })
      setTimeout(() => {
        setCurrentTextStyle ({
          opacity: 1
      })
      }, 500)
    }, 2000);
    return (() => {
      clearInterval(interval)
    })
  })
 

  return (
    <div style={{height:"100vh",width:"100%",backgroundColor:"#e3c1c1",justifyContent:"center",alignItems:"center",display:"flex"}}>
      <h1>This is <AnimateOnChange className="foo" durationOut={500}><div className="container" style={{width: currentWidth ?currentWidth + 'px': 'auto'}}><div className="text-width-wrapper" style={currentTextStyle} ref={currentTextRef}>{words[current]}</div></div></AnimateOnChange></h1>
      <h1 className="hidden-text" ref={nextTextRef} />
    </div>
  );
}

export default App;