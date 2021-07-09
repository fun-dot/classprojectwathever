prediction_1 = "";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
    });
camera = document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){

Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
});
}


console.log("ml5 version:",ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/jhWXuQXFf/model.json",modelLoaded);
function modelLoaded(){
console.log("!model Loaded!");
}
function speak(){
var synth = window.speechSynthesis;


speak_data_1 = "the first prediction is "+prediction_1;
var utterThis = new SpeechSynthesisUtterance(speak_data_1);
synth.speak(utterThis);

}
function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img,gotResult);
    }
    function gotResult(error,results){
    if(error){
    console.error(error);
    }
    else{
    console.log(results);
    document.getElementById("result_emotion_name1").innerHTML = results[0].label;
    prediction_1 = results[0].label;
    speak();
    
    
    
    
    if(results[0].label == "OK")
    {
    document.getElementById("update_emoji1").innerHTML = "&#128070; ";
    }
    if(results[0].label == "NO")
    {
    document.getElementById("update_emoji1").innerHTML =  "&#128071; ";
    }
    if(results[0].label == "angry")
    {
    document.getElementById("update_emoji1").innerHTML =  "&#128072;";
    }}}