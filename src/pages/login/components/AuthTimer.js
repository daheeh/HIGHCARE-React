import { useEffect, useState } from "react"


function AuthTimer({ expireTime, funcTimeout }) {

    const [counter, setCounter] = useState(0);


    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };


    useEffect(() => {
        const timer =
            expireTime > 0 && setInterval(() => {
                if(counter === 0) {
                    funcTimeout()
                    clearInterval(timer)
                } else {
                    setCounter(counter - 1)
                    // console.log(counter);
                }

            }, 1000)
        return () => clearInterval(timer) 
    }
        , [counter])

    useEffect(() => {
        setCounter(expireTime);
    }, [expireTime])


    if(isNaN(expireTime)) {
        return <label>00:00</label>
    }

    else {

        return <label style={{color:'red'}}>{formatTime(counter)}</label>
    }

}

export { AuthTimer };






