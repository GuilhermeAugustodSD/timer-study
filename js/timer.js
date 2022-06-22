export default function Timer({
    minutesDisplay,
    secondsDisplay,
    contador,
    reset
}) {
    
    function updateTimerDisplay(minutes, seconds){
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }
    
    function reset() {
        updateTimerDisplay(minutes, 0)
        clearTimeout(contador)
    }
    
    function countdown(){
     
        contador = setTimeout(function() {
            let seconds =  Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
    
            updateTimerDisplay(minutes, 0)
    
            if (minutes <= 0 && seconds <= 0) {
                reset()
                minutesDisplay.textContent = String(minutes).padStart(2, "0")
                return
            }
    
            if( seconds <= 0 ) {
                seconds = 60
                --minutes
            }
    
            updateTimerDisplay(minutes, String(seconds - 1))
            
            countdown()
        }, 1000)
    
    }

    return{
        countdown,
        reset
    }
    
}
