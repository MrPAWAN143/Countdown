const endDate = "27 march 2024 12:00:01 AM" //future time
// const enddate = new Date(prompt("enter Date DD MM YYYY HH MM"));

let birthday = document.querySelector(".endDate").innerHTML = endDate //
let inputs = document.querySelectorAll("input")


const clock = () => {
    let end = new Date(endDate)//date object
    let crruntDate = new Date() //current date object

    let deff = (end - crruntDate) / 1000 //milimiseconds->seconds
    console.log(deff)

    if (deff <1) {
        //display
        //alert('time over')  //do whatever we want
        //html. innnerHTM 

        document.querySelector(".main").innerHTML = `<h1>Time is over</h1>`
        clearInterval(interval) //to stop running setInterval
        return
    }

    inputs[0].value = Math.floor(deff / 3600 / 24)
    inputs[1].value = Math.floor(deff / 3600) % 24
    inputs[2].value = Math.floor(deff / 60) % 60
    inputs[3].value = Math.floor(deff) % 60 //

}

clock()



let interval = setInterval(
    () => {
        clock()
    },
    1000

)