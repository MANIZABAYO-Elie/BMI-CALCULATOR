

function calculateBodyMassIndex(){
const height= document.getElementById('height').value
const mass = document.getElementById('mass').value
const btn = document.getElementById('btn')
const display = document.getElementById('display')

const BMI = (mass)/(height/100*height/100).toFixed(2)
document.getElementById('display').innerHTML = `YOUR BMI IS ${BMI}`



}