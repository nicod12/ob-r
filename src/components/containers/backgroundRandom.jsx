
import React, {useState} from 'react'


const BackgroundRandom = () => {


    let red = 0;
    let green = 0;
    let blue = 0

    const initialBgColor = `rgb(${red}, ${green}, ${blue})`




    const [bgcolor, setBgcolor] = useState(initialBgColor)
    const [isActive, setIsActive] = useState(false)
    const [intervalId, setIntervalId] = useState(0);

    const boxStlye = {
        width: '255px',
        height: '255px',
        backgroundColor: bgcolor
    }

    // Generate random rgb color
    const randomRbgColor =() => {
        const tempRgb = `rgb(
                              ${red = Math.floor(Math.random() * 255)}, 
                              ${green = Math.floor(Math.random() * 255)}, 
                              ${blue = Math.floor(Math.random() * 255)}
                            )`;
        return tempRgb;
    }


    const handleColor = () => {
        setIsActive(true)
        if(setIsActive) {
          const newIntervalId = setInterval(() => {
            setBgcolor(randomRbgColor())
          }, 1500);
          setIntervalId(newIntervalId)
        }
    }

    const handleExit = () => {
        setIsActive(false)
        if(intervalId) {
          clearInterval(intervalId);
          setIntervalId(0);
          return;
        }
      }

      const handleDouble = () => {
        setIsActive(false)
        if(intervalId) {
          clearInterval(intervalId);
          setIntervalId(0);
          return;
        }
      }

  return (
    <div>
        <h1>Exercise 10,11,12</h1>
        <div style={boxStlye}  
             onMouseEnter={handleColor} 
             onMouseLeave={handleExit}
             onDoubleClick={handleDouble}
        >
            {
                isActive ? 'Change Rgb ON' : 'Change Rgb Off'
            }
        </div>
        <p>Value {bgcolor}</p>
    </div>
  )
}

export default BackgroundRandom
