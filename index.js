var image=document.getElementById('img');
var upload=document.getElementById('upl');
var saturate=document.getElementById('saturate');
var contrast=document.getElementById('contrast');
var brightness=document.getElementById('brigh');
var sepia=document.getElementById('sepia');
var greyscale=document.getElementById('greyscale');
var blure=document.getElementById('blur');
var huerotate=document.getElementById('hue-rotate');
var download=document.getElementById('downl');
var reset=document.getElementById('reset');
var imge=document.createElement('img');
var canvas=document.getElementById('myCanvas');
var test=document.getElementById('test');
const ctx = canvas.getContext('2d');
onload=function(){
    download.style.display='none';
    reset.style.display='none';

    
}


upload.onchange=function(){
    resetValue();
    download.style.display='block';
    reset.style.display='block';
    var file=new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload=function(){
        image.src=file.result;
    
    }
    image.onload=function(){
        canvas.width=image.width;
        canvas.height=canvas.height;
        ctx.drawImage(image,0,0,canvas.width,canvas.height);
        image.style.display="none";
    }

}
function resetValue(){
    saturate.value="100";
    contrast.value="100";
    brightness.value="100";
    greyscale.value="0";
    sepia.value="0";
    blure.value="0";
    huerotate.value="0";
    ctx.filter=`saturate(${saturate.value}%)
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    sepia(${sepia.value}%)
    grayscale(${greyscale.value})
    blur(${blure.value}px)
    hue-rotate(${huerotate.value}deg)
    `;
    ctx.drawImage(image,0,0,canvas.width,canvas.height);
}
reset.onclick=function(){
   resetValue();
}
var inputs=document.querySelectorAll('ul li input');
inputs.forEach(input=>{
    input.addEventListener('input',function(){
        ctx.filter=`saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${greyscale.value})
        blur(${blure.value}px)
        hue-rotate(${huerotate.value}deg)
        `;

        ctx.drawImage(image,0,0,canvas.width,canvas.height);

    })
  

})
download.onclick=function(){
    const dataURL = canvas.toDataURL('image/png');
  
    download.href=dataURL;

}
