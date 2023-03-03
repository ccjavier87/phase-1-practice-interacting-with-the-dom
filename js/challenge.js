

function timer () {
    let num = document.getElementById("counter"); //finds html line with ID of counter
    let number = parseInt(num.innerText); //makes string into math integer
    
    num.innerText = number + 1; //increase number text from num by 1
    //returns incremented number from previous number
    //console.log(clock.length)
}

const myInterval = setInterval(timer, 1000) // repeats function per interval of 1 sec

minButt = document.getElementById("minus")
pluButt = document.getElementById("plus")
hrtButt = document.getElementById("heart")
pseButt = document.getElementById("pause")
comButt = document.getElementById("comment-form")

function minus () {
    let num = document.getElementById("counter"); //finds html line with ID of counter
    let number = parseInt(num.innerText); //makes string into math integer
    if (number > 0) {
        num.innerText = number - 1; //subtract 1 from current number
    }
}

function plus () {
    let num = document.getElementById("counter"); //finds html line with ID of counter
    let number = parseInt(num.innerText); //makes string into math integer
    if (number > 0) {
        num.innerText = number + 1; //add 1 from current number
    }
}

const likeList = []
let likeCount = 0
function heart () {
    let num = document.getElementById("counter"); //finds html line with ID of counter
    let number = parseInt(num.innerText); //makes string into math integer
    let list = document.querySelector(".likes")
    let newLine = document.createElement("li")
    newLine.id = number
    console.log(likeCount)
    if (likeList.includes(number)) {
        likeCount += 1
        let update = document.getElementById(number)
        update.innerText = `${number} is liked ${likeCount + 1} times`   
    } 
    else {
        newLine.innerText = `${number} is liked 1 times`
        list.appendChild(newLine)
        likeList.push(number)
        likeCount=0
    }
    console.log(likeCount)
}

function pause () {
    
    let pauseText = document.getElementById("pause")
    if (pauseText.innerText === "pause") {
        pauseText.innerText = "resume";
        minButt.disabled=true;
        pluButt.disabled=true;
        hrtButt.disabled=true;
        clearInterval(myInterval);
    }
    else if(pauseText.innerText === "resume") {
        pauseText.innerText = "pause"
        myInterval = setInterval(timer, 1000);
        minButt.disabled=false;
        pluButt.disabled=false;
        hrtButt.disabled=false;
    }
    
    
}


function comment (e) {
    e.preventDefault()
    writeComment(e.target.comment.value)
    comButt.reset()
}
function writeComment (comm) {
    let p = document.createElement('p')
    p.textContent = comm
    document.querySelector("#list").appendChild(p)
}

minButt.addEventListener("click", minus)
pluButt.addEventListener("click", plus)
hrtButt.addEventListener("click", heart)
pseButt.addEventListener("click", pause)
comButt.addEventListener("submit", comment)