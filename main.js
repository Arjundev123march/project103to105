camera=document.getElementById("camera");
Webcam.set({ 
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});


function take_snapshot(){
    Webcam.snap(function(e){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+e+'"/>';
    });
    
}
console.log('ml5 version:', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/MHR_WoIHF/',modelLoaded);
function modelLoaded() {
console.log('Model Loaded!');
}
function check(){
x=document.getElementById("captured_image");
  classifier.classify(x,gotResult);  
    console.log("identified image");
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}
