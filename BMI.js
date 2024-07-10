

function calculateBodyMassIndex(){
const height= document.getElementById('height').value
const mass = document.getElementById('mass').value
const btn = document.getElementById('btn')
const display = document.getElementById('display')

const BMI = (mass)/(height/100*height/100).toFixed(2)
if (height || mass ==="") {
    document.getElementById('display').innerHTML = "invalid input , please enter valid credentials"  
}else if(BMI>=18){
    document.getElementById('display').innerHTML = `YOUR BMI IS ${BMI} You have under weight`   
}else if(BMI>=25){
    document.getElementById('display').innerHTML = `YOUR BMI IS ${BMI} You have normal weight`   
}else if(BMI>=30){
    document.getElementById('display').innerHTML = `YOUR BMI IS ${BMI} You have over weight`   
}else{
    document.getElementById('display').innerHTML = `YOUR BMI IS ${BMI} You are in obesity`  
}
}