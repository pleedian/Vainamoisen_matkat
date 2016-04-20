﻿#pragma strict
//naming chapter1_ and then level number
var chapter1_1_eng= ["Hello", "Good bye"];
var chapter1_1_fi= ["Moi", "Näkemiin"];
var chapter1_2_eng= ["", "Good bye"];
var chapter1_2_fi= ["Moi", "Näkemiin"];
var chapter1_3_eng= ["Hello", "Good bye"];
var chapter1_3_fi= ["Moi", "Näkemiin"];
var chapter1_4_eng= ["Red", "Green", "Blue", "Black", "White"];
var chapter1_4_fi= ["Punainen", "Vihreä", "Sininen", "Musta", "Valkoinen"];
//last chapter has all words:
var chapter1_5_eng= ["Hello", "Good bye"];
var chapter1_5_fi= ["Moi", "Näkemiin"];

function Start () {
  var level = PermanentVariables.CLevel;
  var chapter=  PermanentVariables.Chapter;

  askQuestions();

}

function Update () {

}

//TODO function where questions are randomized and showed to user:
function askQuestions(){
  var randSize=0;
  if(PermanentVariables.Chapter==1 && PermanentVariables.CLevel==1)
      randSize = chapter1_1_eng.Length;
      var random_number = Random.Range(0,randSize);
      var object = GameObject.Find("Question");
      if(object) { //TODO randomize place of answer:
        var question= GameObject.Find("Question").GetComponent.<UI.Text>();
        var a1= GameObject.Find("Answer1").transform.GetComponentInChildren.<UI.Text>();
        a1.text = chapter1_1_fi[random_number];
        var a2= GameObject.Find("Answer2");
        var a3= GameObject.Find("Answer3");
        question.text = chapter1_1_eng[random_number];
      }
    //helptext = helptext2.GetComponent.<UI.Text>();
  if(PermanentVariables.Chapter==1 && PermanentVariables.CLevel==2)
      randSize = chapter1_2_eng.Length;
  if(PermanentVariables.Chapter==1 && PermanentVariables.CLevel==3)
      randSize = chapter1_3_eng.Length;
  if(PermanentVariables.Chapter==1 && PermanentVariables.CLevel==4)
      randSize = chapter1_4_eng.Length;
  if(PermanentVariables.Chapter==1 && PermanentVariables.CLevel==5)
      randSize = chapter1_5_eng.Length;
}

public function returnText(){
  var level = PermanentVariables.CLevel;
  var chapter=  PermanentVariables.Chapter;

  var text="";
  if(chapter==1){
      if(level==1){
        for(var i1=0;i1<chapter1_1_eng.Length;i1++){
          //  print("looping : ")
            text=text+"\n"+chapter1_1_eng[i1]+" = "+chapter1_1_fi[i1];
        }
      }
      if(level==2){
        for(var i2=0;i2<chapter1_2_eng.Length;i2++){
          //  print("looping : ")
            text=text+"\n"+chapter1_2_eng[i2]+" = "+chapter1_2_fi[i2];
        }
      }
      if(level==3){
        for(var i3=0;i3<chapter1_3_eng.Length;i3++){
          //  print("looping : ")
            text=text+"\n"+chapter1_3_eng[i3]+" = "+chapter1_3_fi[i3];
        }
      }
      if(level==4){
        for(var i4=0;i4<chapter1_4_eng.Length;i4++){
          //  print("looping : ")
            text=text+"\n"+chapter1_4_eng[i4]+" = "+chapter1_4_fi[i4];
        }
      }
      if(level==5){
        for(var i5=0;i5<chapter1_5_eng.Length;i5++){
          //  print("looping : ")
            text=text+"\n"+chapter1_5_eng[i5]+" = "+chapter1_5_fi[i5];
        }
      }
  }//chapter1 ends

  return text;
}