console.log("Your index.js file is loaded correctly");


$(".workItem").mouseenter(function(){
    console.log("You hovered on div.myWork");
    $(this).animate({
         width: '500px'
        
     } );

});
$(".workItem").mouseleave(function(){
    console.log("You hovered on div.myWork");
    $(this).animate({
         width: '400px'
     } );

});
const  previousBtn  =  document.getElementById('prevBtn');
const  previousBtn2  =  document.getElementById('prevBtn2');

const  nextBtn  =  document.getElementById('nextBtn');
const  nextBtn2  =  document.getElementById('nextBtn2');
const  finishBtn  =  document.getElementById('finishBtn');
const  content  =  document.getElementById('content');
const  bullets  =  [...document.querySelectorAll('.bullet')];
const  stepperItem  =  [...document.querySelectorAll('.stepper-item')];

const MAX_STEPS = 3;
let currentStep = 1;

// nextBtn.addEventListener('click',  ()  =>  {
// 	bullets[currentStep  -  1].classList.add('completed');
// 	currentStep  +=  1;
// 	previousBtn.disabled  =  false;
// 	if  (currentStep  ===  MAX_STEPS)  {
// 		nextBtn.disabled  =  true;
// 		finishBtn.disabled  =  false;
// 	}
// 	content.innerText  =  `Step Number ${currentStep}`;
// });
nextBtn.addEventListener('click',  ()  =>  {
    stepperItem[currentStep - 1].classList.remove('active');
    stepperItem[currentStep - 1].classList.add('completed');
    stepperItem[currentStep].classList.add('active');
    currentStep++;
    if  (currentStep  ===  MAX_STEPS)  {
		nextBtn.disabled  =  true;
    }
});
nextBtn2.addEventListener('click',  ()  =>  {
    stepperItem[currentStep - 1].classList.remove('active');
    stepperItem[currentStep - 1].classList.add('completed');
    stepperItem[currentStep].classList.add('active');
    currentStep++;
    if  (currentStep  ===  MAX_STEPS)  {
		nextBtn.disabled  =  true;
    }
});

previousBtn.addEventListener('click',  ()  =>  {
    stepperItem[currentStep-1].classList.remove('active');
	stepperItem[currentStep  -  2].classList.remove('completed');
    stepperItem[currentStep - 2].classList.add('active');
	currentStep  -=  1;
    console.log("Your prev is loaded correctly");

	nextBtn.disabled  =  false;
	finishBtn.disabled  =  true;
	if  (currentStep  ===  1)  {
		previousBtn.disabled  =  true;
	}
});
previousBtn2.addEventListener('click',  ()  =>  {
    stepperItem[currentStep-1].classList.remove('active');
	stepperItem[currentStep  -  2].classList.remove('completed');
    stepperItem[currentStep - 2].classList.add('active');
	currentStep  -=  1;
	nextBtn.disabled  =  false;
	finishBtn.disabled  =  true;
	if  (currentStep  ===  1)  {
		previousBtn.disabled  =  true;
	}
});

finishBtn.addEventListener('click',  ()  =>  {
	location.reload();
});



/*
const progress =document.getElementById("progress")
const prev = document.getElementById("prev")
const next = document.getElementById("next");
const stepperItem = document.querySelectorAll(".stepper-item");
const stepCounter  =  [...document.querySelectorAll('.step-counter')];
[...document.querySelectorAll('.step-counter')];

const MAX_STEPS = 3;
let currentStep = 1;

next.addEventListener('click',  ()  =>  {
    stepperItem[currentStep - 1].classList.remove('active');
    stepperItem[currentStep - 1].classList.add('completed');
    stepperItem[currentStep - 1].classList.add('active');
    currentStep++;
    if  (currentStep  ===  MAX_STEPS)  {
		nextBtn.disabled  =  true;
    }
});

nextBtn.addEventListener('click',  ()  =>  {
	bullets[currentStep  -  1].classList.add('completed');
	currentStep  +=  1;
	previousBtn.disabled  =  false;
	if  (currentStep  ===  MAX_STEPS)  {
		nextBtn.disabled  =  true;
		finishBtn.disabled  =  false;
	}
	content.innerText  =  `Step Number ${currentStep}`;
});


/*
let currentActive = 1;
next.addEventListener("click", ()=>{
    currentActive++;
    if(currentActive> circles.length){
        currentActive=circles.length:
    }
    crossOriginIsolated.log(currentActive)
});
prev.addEventListener("click", ()=>{
    currentActive--;
    if(currentActive<1){
        currentActive=1:
    }
    crossOriginIsolated.log(currentActive)
});

function update(){
    circles.forEach((circle, idx)=> {
        if (idx <currectActive) {
            circle.classList.add ("active");
        }
        else {
            circle.classList.remove ("active")
        }
    })
}
*/
/*
function update(currentActive) {
    stepCircles.forEach((circle, i) => {
      if (i < currentActive) {
        circle.classList.add("active");
      } else {
        circle.classList.remove("active");
      }
    });
  
*/