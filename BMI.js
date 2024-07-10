

function calculateBodyMassIndex(){
const height= document.getElementById('height').value
const mass = document.getElementById('mass').value
const btn = document.getElementById('btn')
const display = document.getElementById('display')

let BMI = (mass)/(height*0.01)*(height*0.01)
document.getElementById('display').innerHTML = `YOUR BMI IS ${BMI}`



}