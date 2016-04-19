#pragma strict
//naming chapter1_ and then level number
var chapter1_1_eng= ["Hello", "Good bye"];
var chapter1_1_fi= ["Moi", "Näkemiin"];
var chapter1_2_eng= ["", "Good bye"];
var chapter1_2_fi= ["Moi", "Näkemiin"];
var chapter1_3_eng= ["Hello", "Good bye"];
var chapter1_3_fi= ["Moi", "Näkemiin"];
var chapter1_4_eng= ["Red", "Green", "Blue", "Black", "White"];
var chapter1_4_fi= ["Punainen", "Vihreä", "Sininen", "Musta", "Valkoinen"];
var chapter1_5_eng= ["Hello", "Good bye"];
var chapter1_5_fi= ["Moi", "Näkemiin"];

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
  }

  return text;
}
