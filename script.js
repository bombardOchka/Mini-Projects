
const createBtn = document.getElementById("createBtn")
const nameInput = document.getElementById("nameInput")
const dateInput = document.getElementById("dateInput")

const tableYears = document.getElementById("table-years")


const pName = document.getElementById("name")
const pBirthday = document.getElementById("birthday")
const pAge = document.getElementById("age")

const pCenter = document.getElementById("pCenter")
const pNN = document.getElementById("pNN")
const pNM = document.getElementById("pNM")
const pNO = document.getElementById("pNO")

const p01 = document.getElementById("p01")
const p02 = document.getElementById("p02")
const p03 = document.getElementById("p03")
const p04 = document.getElementById("p04")

const p11 = document.getElementById("p11")
const p12 = document.getElementById("p12")
const p13 = document.getElementById("p13")

const p21 = document.getElementById("p21")
const p22 = document.getElementById("p22")
const p23 = document.getElementById("p23")
const p24 = document.getElementById("p24")

const p31 = document.getElementById("p31")
const p32 = document.getElementById("p32")
const p33 = document.getElementById("p33")

const p41 = document.getElementById("p41")
const p42 = document.getElementById("p42")
const p43 = document.getElementById("p43")

const p51 = document.getElementById("p51")
const p52 = document.getElementById("p52")
const p53 = document.getElementById("p53")

const p61 = document.getElementById("p61")
const p62 = document.getElementById("p62")
const p63 = document.getElementById("p63")

const p71 = document.getElementById("p71")
const p72 = document.getElementById("p72")
const p73 = document.getElementById("p73")

const pSky = document.getElementById("pSky")
const pEarth = document.getElementById("pEarth")
const pEarthSky = document.getElementById("pEarthSky")

const pCh = document.getElementById("pCh")
const pZh = document.getElementById("pZh")
const pChZh = document.getElementById("pChZh")

const pAll = document.getElementById("pAll")
const pPlanet = document.getElementById("pPlanet")

const pPeoplePower = document.getElementById("peoplePower")
const pPeoplePortret = document.getElementById("peoplePortret")







const physic7 = document.getElementById("physic7")
const energy7 = document.getElementById("energy7")
const emotion7 = document.getElementById("emotion7")

const physic6 = document.getElementById("physic6")
const energy6 = document.getElementById("energy6")
const emotion6 = document.getElementById("emotion6")

const physic5 = document.getElementById("physic5")
const energy5 = document.getElementById("energy5")
const emotion5 = document.getElementById("emotion5")

const physic4 = document.getElementById("physic4")
const energy4 = document.getElementById("energy4")
const emotion4 = document.getElementById("emotion4")

const physic3 = document.getElementById("physic3")
const energy3 = document.getElementById("energy3")
const emotion3 = document.getElementById("emotion3")

const physic2 = document.getElementById("physic2")
const energy2 = document.getElementById("energy2")
const emotion2 = document.getElementById("emotion2")

const physic1 = document.getElementById("physic1")
const energy1 = document.getElementById("energy1")
const emotion1 = document.getElementById("emotion1")

const physicAll = document.getElementById("physicAll")
const energyAll = document.getElementById("energyAll")
const emotionAll = document.getElementById("emotionAll")

let yearsEnergy = Array(81)

createBtn.addEventListener('click', function(){
    dateMas = dateInput.value.split('.')
    let dateYear= parseInt(dateMas[2]);
    let dateMonth = parseInt(dateMas[1]);
    let dateDay = parseInt(dateMas[0]);

    pName.innerText = nameInput.value
    pBirthday.innerText = dateInput.value
    pAge.innerText = age(dateYear, dateMonth, dateDay)

    p01.innerText = sumNumbers(dateDay)
    p21.innerText = dateMonth
    p41.innerText = sumNumbers(dateYear)
    p61.innerText = sumNumbers(parseInt(p01.innerText)+parseInt(p21.innerText)+parseInt(p41.innerText))

    pCenter.innerText = sumNumbers(parseInt(p01.innerText)+parseInt(p21.innerText)+parseInt(p41.innerText)+parseInt(p61.innerText))
    
    p11.innerText = sumNumbers(parseInt(p01.innerText)+parseInt(p21.innerText))
    p31.innerText = sumNumbers(parseInt(p41.innerText)+parseInt(p21.innerText))
    p51.innerText = sumNumbers(parseInt(p41.innerText)+parseInt(p61.innerText))
    p71.innerText = sumNumbers(parseInt(p01.innerText)+parseInt(p61.innerText))

    p03.innerText = sumNumbers(parseInt(p01.innerText)+parseInt(pCenter.innerText))
    p02.innerText = sumNumbers(parseInt(p01.innerText)+parseInt(p03.innerText))
    p04.innerText = sumNumbers(parseInt(p03.innerText)+parseInt(pCenter.innerText))

    p13.innerText = sumNumbers(parseInt(p11.innerText)+parseInt(pCenter.innerText))
    p12.innerText = sumNumbers(parseInt(p11.innerText)+parseInt(p13.innerText))

    p23.innerText = sumNumbers(parseInt(p21.innerText)+parseInt(pCenter.innerText))
    p22.innerText = sumNumbers(parseInt(p21.innerText)+parseInt(p23.innerText))
    p24.innerText = sumNumbers(parseInt(p23.innerText)+parseInt(pCenter.innerText))

    p33.innerText = sumNumbers(parseInt(p31.innerText)+parseInt(pCenter.innerText))
    p32.innerText = sumNumbers(parseInt(p31.innerText)+parseInt(p33.innerText))

    p43.innerText = sumNumbers(parseInt(p41.innerText)+parseInt(pCenter.innerText))
    p42.innerText = sumNumbers(parseInt(p41.innerText)+parseInt(p43.innerText))

    p53.innerText = sumNumbers(parseInt(p51.innerText)+parseInt(pCenter.innerText))
    p52.innerText = sumNumbers(parseInt(p51.innerText)+parseInt(p53.innerText))

    p63.innerText = sumNumbers(parseInt(p61.innerText)+parseInt(pCenter.innerText))
    p62.innerText = sumNumbers(parseInt(p61.innerText)+parseInt(p63.innerText))

    p73.innerText = sumNumbers(parseInt(p71.innerText)+parseInt(pCenter.innerText))
    p72.innerText = sumNumbers(parseInt(p71.innerText)+parseInt(p73.innerText))

    pNM.innerText = sumNumbers(parseInt(p43.innerText)+parseInt(p63.innerText))
    pNN.innerText = sumNumbers(parseInt(pNM.innerText)+parseInt(p63.innerText))
    pNO.innerText = sumNumbers(parseInt(pNM.innerText)+parseInt(p43.innerText))

    pSky.innerText = sumNumbers(parseInt(p21.innerText)+parseInt(p61.innerText))
    pEarth.innerText = sumNumbers(parseInt(p01.innerText)+parseInt(p41.innerText))
    pEarthSky.innerText = sumNumbers(parseInt(pSky.innerText)+parseInt(pEarth.innerText))

    pCh.innerText = sumNumbers(parseInt(p11.innerText)+parseInt(p51.innerText))
    pZh.innerText = sumNumbers(parseInt(p31.innerText)+parseInt(p71.innerText))
    pChZh.innerText = sumNumbers(parseInt(pCh.innerText)+parseInt(pZh.innerText))

    pAll.innerText = sumNumbers(parseInt(pEarthSky.innerText)+parseInt(pChZh.innerText))
    pPlanet.innerText = sumNumbers(parseInt(pAll.innerText)+parseInt(pChZh.innerText))

    pPeoplePower.innerText = `${pEarthSky.innerText}, ${pChZh.innerText}, ${pAll.innerText}`
    pPeoplePortret.innerText = `${p01.innerText}, ${p21.innerText}, ${pCenter.innerText}`


    physic1.innerText = p41.innerText
    energy1.innerText = p61.innerText
    emotion1.innerText = sumNumbers(parseInt(energy1.innerText)+parseInt(physic1.innerText))

    physic2.innerText = p43.innerText
    energy2.innerText = p63.innerText
    emotion2.innerText = sumNumbers(parseInt(energy2.innerText)+parseInt(physic2.innerText))

    physic3.innerText = pCenter.innerText
    energy3.innerText = pCenter.innerText
    emotion3.innerText = sumNumbers(parseInt(energy3.innerText)+parseInt(physic3.innerText))

    physic4.innerText = p04.innerText
    energy4.innerText = p24.innerText
    emotion4.innerText = sumNumbers(parseInt(energy4.innerText)+parseInt(physic4.innerText))

    physic5.innerText = p03.innerText
    energy5.innerText = p23.innerText
    emotion5.innerText = sumNumbers(parseInt(energy5.innerText)+parseInt(physic5.innerText))

    physic6.innerText = p02.innerText
    energy6.innerText = p22.innerText
    emotion6.innerText = sumNumbers(parseInt(energy6.innerText)+parseInt(physic6.innerText))

    physic7.innerText = p01.innerText
    energy7.innerText = p21.innerText
    emotion7.innerText = sumNumbers(parseInt(energy7.innerText)+parseInt(physic7.innerText))

    physicAll.innerText = sumNumbers(parseInt(physic1.innerText)+parseInt(physic2.innerText)+parseInt(physic3.innerText)+parseInt(physic4.innerText)+parseInt(physic5.innerText)+parseInt(physic6.innerText)+parseInt(physic7.innerText))
    energyAll.innerText = sumNumbers(parseInt(energy1.innerText)+parseInt(energy2.innerText)+parseInt(energy3.innerText)+parseInt(energy4.innerText)+parseInt(energy5.innerText)+parseInt(energy6.innerText)+parseInt(energy7.innerText))
    emotionAll.innerText = sumNumbers(parseInt(energyAll.innerText)+parseInt(physicAll.innerText))

    yearsEnergyCalc()
    
})





function age(year, month, day){
    let currentDate = new Date();
    let birthDate = new Date(year, month, day);
    let timeDiff = Math.abs(currentDate.getTime() - birthDate.getTime());
    let millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
    return Math.floor(timeDiff / millisecondsPerYear);
}


function sumNumbers(number){
    if (number > 22){
        let sum = 0
        let digits = Math.abs(number).toString().split(""); 
        for (var i = 0; i < digits.length; i++) {
            sum += parseInt(digits[i]); 
        }
        return sumNumbers(sum)
    }
    else{
        return number
    }
}




function yearsEnergyCalc(){
    try{
        document.querySelectorAll(".future-delete").forEach(function(element) {
            element.remove();
          });
    }
    catch{}

    
    

   

    yearsEnergy[10] = parseInt(p11.innerText)
    yearsEnergy[20] = parseInt(p21.innerText)
    yearsEnergy[30] = parseInt(p31.innerText)
    yearsEnergy[40] = parseInt(p41.innerText)
    yearsEnergy[50] = parseInt(p51.innerText)
    yearsEnergy[60] = parseInt(p61.innerText)
    yearsEnergy[70] = parseInt(p71.innerText)
    yearsEnergy[80] = parseInt(p01.innerText)

    let n1 = 5


    for(let j = 0; j<5; j++){
        for(let i = n1+5; i<=75+n1; i+=5){
            if(n1 === 5 && i % 10 != 0){
                yearsEnergy[i] = sumNumbers(yearsEnergy[i-5]+yearsEnergy[i+5])
            }
            else if(n1 === 2){
                yearsEnergy[i] = sumNumbers(yearsEnergy[i-2]+yearsEnergy[i+3])
            }
            else if(n1 === 1){
                yearsEnergy[i] = sumNumbers(yearsEnergy[i-1]+yearsEnergy[i+1])
            }
            else if (n1 === 3){
                yearsEnergy[i] = sumNumbers(yearsEnergy[i-1]+yearsEnergy[i+2])
            }
            else if (n1 === 4){
                yearsEnergy[i] = sumNumbers(yearsEnergy[i-1]+yearsEnergy[i+1])
            }
        }
        if (n1===5){
            yearsEnergy[5] = sumNumbers(yearsEnergy[10]+yearsEnergy[80])
            n1 = 2
        } 
        else if (n1===2){
            yearsEnergy[2] = sumNumbers(yearsEnergy[5]+yearsEnergy[80])
            n1 = 1
        }    
        else if (n1===1){
            yearsEnergy[1] = sumNumbers(yearsEnergy[2]+yearsEnergy[80])
            n1 = 3
        }  
        else if (n1===3){
            yearsEnergy[3] = sumNumbers(yearsEnergy[2]+yearsEnergy[5])
            n1 = 4
        }  
        else if (n1===4){
            yearsEnergy[4] = sumNumbers(yearsEnergy[3]+yearsEnergy[5])
        }  
    }

    
    let n2 = 1
    for (let j = 0; j!=16; j++){
        const tr = document.createElement('tr')
        tr.classList.add("future-delete")
        for(let i = n2; i<=65+n2; i+=16){
            let tdYear = document.createElement('td')
            tdYear.innerText = i
            let tdEnergy = document.createElement('td')
            tdEnergy.innerText = yearsEnergy[i]
            tr.append(tdYear)
            tr.append(tdEnergy)
        }
        tableYears.append(tr)
        n2++
    }
}





//==========================================================================================================


