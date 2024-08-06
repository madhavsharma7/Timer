const enddate = "22 May 2024 2:00 PM";

document.getElementById("enddate").innerHTML = enddate;
const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date(enddate);
    const now = new Date();
    const diff = (end - now) / 1000; //converting into ml seconds
    // console.log(diff);
    // console.log(Math.floor(diff / 3600 / 24));  // days left
    inputs[0].value = Math.floor(diff / 3600 / 24); //days
    inputs[1].value = Math.floor(diff / 3600) % 24; //coming remainder means hours left  -- hours
    // console.log(Math.floor(diff/ 60) % 60);
    inputs[2].value = Math.floor(diff / 60) % 60; // minutes
    inputs[3].value = Math.floor(diff) % 60; //seconds

    //convert into days
}


clock();


setInterval(
    () => {
        clock()
    }, 1000
)

//1 day = 24hrs

//1 hr = 60 mins

// 60 min = 3600 sec