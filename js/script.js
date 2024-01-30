// Player One start here ...

let playerOne = document.querySelector(".playerOne") ;
let oneInput = document.querySelector(".playerOne-inp") ;
let oneButton = document.querySelector(".playerOne-bt") ;
let oneError = document.querySelector(".playerOne-er") ;

let result = 0 ;

oneButton.addEventListener("click", ()=>{
    if (oneInput.value) {
        if (oneInput.value - 100) {
            if (oneInput.value >= 0 && oneInput.value <= 9) {
                result = oneInput.value ;
                oneInput.value = "" ;
                oneError.innerHTML = "" ;

                playerOne.style.display = "none" ;
                playerTwo.style.display = "block" ;
            } else {
                oneError.innerHTML = "Plz Input Namber 0 to 9" ;
            }
        } else {
            oneError.innerHTML = "Plz Input Namber" ;
        }
    } else {
        oneError.innerHTML = "Plz Input Value" ;
    }
}) ;

// Eye icon 1 ...

let icon_box = document.querySelector(".icon-box") ;
let iconX = document.querySelector(".icon-x") ;
let iconY = document.querySelector(".icon-y") ;

icon_box.addEventListener("click", ()=>{
    if (oneInput.type === "password") {
        oneInput.type = "text" ;
        
        iconX.style.display = "none" ;
        iconY.style.display = "block" ;
    } else {
        oneInput.type = "password" ;
        
        iconX.style.display = "block" ;
        iconY.style.display = "none" ;
    }
}) ;

// Player Two start here ...
  
let playerTwo = document.querySelector(".playerTwo") ;
let twoInput = document.querySelector(".playerTwo-inp") ;
let twoButton = document.querySelector(".playerTwo-bt") ;
let twoError = document.querySelector(".playerTwo-er") ;
let chance = document.querySelector(".chance")

let chance_value = 3 ;

twoButton.addEventListener("click", ()=>{
    if (twoInput.value) {
        if (twoInput.value - 100) {
            if (twoInput.value >= 0 && twoInput.value <= 9) {
                if (twoInput.value == result) {
                    twoError.innerHTML = "You Win" ;
                    twoInput.value = "" ;
                    chance.innerHTML = "" ;
                } else {
                    chance_value -- ;
                    if (chance_value > 0) {
                        chance.innerHTML = chance_value ;
                        twoError.innerHTML = "" ;
                    } else {
                        chance.innerHTML = "You Lose" ;
                        twoError.innerHTML = "" ;
                    }
                }
            } else {
                twoError.innerHTML = "Plz Input Namber 0 to 9" ;
                chance.innerHTML = "" ;
            }
        } else {
            twoError.innerHTML = "Plz Input Namber" ;
            chance.innerHTML = "" ;
        }
    } else {
        twoError.innerHTML = "Plz Input Value" ;
        chance.innerHTML = "" ;
    }
}) ;

// Eye icon 2 ...

let icon_box1 = document.querySelector(".icon-box1") ;
let iconA = document.querySelector(".icon-a") ;
let iconB = document.querySelector(".icon-b") ;

icon_box1.addEventListener("click", ()=>{
    if (twoInput.type === "password") {
        twoInput.type = "text" ;
        
        iconA.style.display = "none" ;
        iconB.style.display = "block" ;
    } else {
        twoInput.type = "password" ;
        
        iconA.style.display = "block" ;
        iconB.style.display = "none" ;
    }
}) ;