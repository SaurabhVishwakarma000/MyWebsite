//
// Awsome ProgressBar
//
const progressbarContainer = document.querySelector('.progressbar-container');
const totalWidth = parseInt(getComputedStyle(progressbarContainer).width);
const volume = document.querySelectorAll('.volume');
//const skillBox = document.querySelectorAll('.skill-box');



// resize the volume of boxes with the values
volume.forEach(element => {
    const vol = parseInt(element.parentElement.parentElement.children[1].innerText);
    element.style.width = `${vol}%`;
    if(vol > 85){
      element.style.backgroundColor ="green";
      element.parentElement.style="box-shadow: 0 0 5px 2px #00FF0030;"
    }
});



// Change the Pointer of Volume
const skillQuantity = document.querySelectorAll('.skill-quantity');

skillQuantity.forEach(element => {
    let val = parseInt(element.innerText);
    // becuase the pointer overflow of box in 100%
    if (val == 100) {
        val -= .4;
    }
    // Width of valueText / 2 => put on the pointerLine
    const textWidth = parseInt(getComputedStyle(element).width) / 2;
    //calcute the place of the pointer
    element.style.right = `${totalWidth-textWidth-(val*totalWidth/100)}px`
});

