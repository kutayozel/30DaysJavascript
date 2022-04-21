const timeNodes = document.querySelectorAll('[data-time]')

const timeArray = [...timeNodes]

const seconds = timeArray.map(node => node.dataset.time)
.map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat)
    return (mins * 60) + secs
    console.log(mins, secs)
})
.reduce
((total, vidSeconds) => total + vidSeconds)

let secondsLeft = seconds
const hours = Math.floor(secondsLeft / 3600)
secondsLeft = secondsLeft % 3600
//console.log(secondsLeft)
const mins = Math.floor(secondsLeft / 60)
secondsLeft = secondsLeft % 60

console.log(hours, mins, secondsLeft)