const secHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {
    const now = new Date();
    
    const seconds = now.getSeconds();
    const secDegrees = ((seconds / 60) * 360) + 90;

    secHand.style.transform = `rotate(${secDegrees}deg)`;

    const minutes = now.getMinutes();    
    const minDegrees = ((minutes / 60) * 360) + 90;
    
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    const hours = now.getHours();    
    const hrDegrees = ((hours  / 12) * 360) + 90;
    
    hourHand.style.transform = `rotate(${hrDegrees}deg)`;    
}

setInterval(setDate, 1000)

