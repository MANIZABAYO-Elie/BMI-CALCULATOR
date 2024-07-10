

function calculateBodyMassIndex(){
    const height= document.getElementById('height').value
    const mass = document.getElementById('mass').value
    const btn = document.getElementById('btn')
    const display = document.getElementById('display')

  if(height===""){
        document.getElementById('display').innerHTML = "invalid height"
  }else if(mass===""){
document.getElementById('display').innerHTML = "invalid mass"
  }
  
  else if(height|| mass===0){
    document.getElementById('display').innerHTML = " please check the value of your height or your mass"
  }

    
const BMI = (mass)/(height/100*height/100).toFixed(1)
      
     if(BMI<18){
        document.getElementById('display').innerHTML = `YOUR BMI IS ${BMI} You have under weight`   
    }else if(BMI>=18){
        document.getElementById('display').innerHTML = `YOUR BMI IS ${BMI} You have normal weight`   
    }else if(BMI>=30){
        document.getElementById('display').innerHTML = `YOUR BMI IS ${BMI} You have over weight`   
    }else if(BMI<30) {
        document.getElementById('display').innerHTML = `YOUR BMI IS ${BMI} You are in obesity`  
    }
   
}



   