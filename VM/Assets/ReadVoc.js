#pragma strict

var chapter1_1_eng= ["Hello", "Good bye"];
var chapter1_1_fi= ["Moi", "Näkemiin"];

function Start () {
  var level = PermanentVariables.CLevel;
  var chapter=  PermanentVariables.Chapter;


}

function Update () {

}

//TODO function where questions are randomized and showed to user:


public function returnText(){
  var level = PermanentVariables.CLevel;
  var chapter=  PermanentVariables.Chapter;

  var text="";
  if(chapter==1){
      if(level==1){
        for(var i=0;i<chapter1_1_eng.Length;i++){
          //  print("looping : ")
            text=text+"\n"+chapter1_1_eng[i]+" = "+chapter1_1_fi[i];
        }
      }
      if(level==2){

      }
      if(level==3){

      }
      if(level==4){

      }
      if(level==5){

      }
  }

  return text;
}
