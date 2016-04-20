#pragma strict
//naming chapter1_ and then level number
private var  chapter1_1_eng= ["Hello", "Good bye"];
private var   chapter1_1_fi= ["Moi", "Näkemiin"];
private var   chapter1_2_eng= ["Tomorrow", "Today"];
private var   chapter1_2_fi= ["Huomenna", "Tänään"];
private var   chapter1_3_eng= ["Day", "Month", "Year"];
private var  chapter1_3_fi= ["Päivä", "Kuukausi", "Vuosi"];
private var   chapter1_4_eng= ["Red", "Green", "Blue", "Black", "White"];
private var   chapter1_4_fi= ["Punainen", "Vihreä", "Sininen", "Musta", "Valkoinen"];
//last chapter has all words:
private var   chapter1_5_eng= ["Hello", "Good bye","Tomorrow", "Today", "Day", "Month", "Year","Red", "Green", "Blue", "Black", "White"];
private var   chapter1_5_fi= ["Moi", "Näkemiin", "Huomenna", "Tänään","Päivä", "Kuukausi", "Vuosi","Punainen", "Vihreä", "Sininen", "Musta", "Valkoinen"];


private var   random_number : int;
var field : UI.InputField;
var text : GameObject;
function Start () {
  var level = PermanentVariables.CLevel;
  var chapter=  PermanentVariables.Chapter;
  random_number=0;
  if(level!=5)
    Destroy(text);
   askQuestions();


}

function Update () {
  var Aobject = GameObject.Find("Answer");
  var ans : String ;
  if(Aobject) {
     ans= GameObject.Find("Answer").GetComponentInChildren.<UI.InputField>().text;
  }
  //print(PermanentVariables.CLevel );
  if (Input.GetKeyDown(KeyCode.Return)) {

    if(PermanentVariables.Chapter==1 && PermanentVariables.CLevel==1) {
        if(Aobject) { //TODO randomize place of answer:
          if(ans.ToUpper().Equals(chapter1_1_fi[random_number].ToUpper())) {
                 if(GameObject.Find("player"))
                 GameObject.Find("player").GetComponent(Shoot).shoot();
              askQuestions();
          } else {
              if(PermanentVariables.Experience>=10 )
                PermanentVariables.Experience -= 10;
          }
          GameObject.Find("Answer").GetComponentInChildren.<UI.InputField>().text="";
        }
    }
      //helptext = helptext2.GetComponent.<UI.Text>();
    if(PermanentVariables.Chapter==1 && PermanentVariables.CLevel==2){
      if(Aobject) { //TODO randomize place of answer:
        if(ans.ToUpper().Equals(chapter1_2_fi[random_number].ToUpper())) {
              if(GameObject.Find("player"))
               GameObject.Find("player").GetComponent(Shoot).shoot();
            askQuestions();
        } else {
            if(PermanentVariables.Experience>=10 )
              PermanentVariables.Experience -= 10;
        }
        GameObject.Find("Answer").GetComponentInChildren.<UI.InputField>().text="";
      }
    }
        //randSize = chapter1_2_eng.Length;
    if(PermanentVariables.Chapter==1 && PermanentVariables.CLevel==3){
      if(Aobject) { //TODO randomize place of answer:
        if(ans.ToUpper().Equals(chapter1_3_fi[random_number].ToUpper())) {
               if(GameObject.Find("player"))
               GameObject.Find("player").GetComponent(Shoot).shoot();
            askQuestions();
        } else {
            if(PermanentVariables.Experience>=10 )
              PermanentVariables.Experience -= 10;
        }
        GameObject.Find("Answer").GetComponentInChildren.<UI.InputField>().text="";
      }
    }
        //randSize = chapter1_3_eng.Length;
    if(PermanentVariables.Chapter==1 && PermanentVariables.CLevel==4){
      if(Aobject) { //TODO randomize place of answer:
        if(ans.ToUpper().Equals(chapter1_4_fi[random_number].ToUpper())) {
                if(GameObject.Find("player"))
                GameObject.Find("player").GetComponent(Shoot).shoot();
            askQuestions();
        } else {
            if(PermanentVariables.Experience>=10 )
              PermanentVariables.Experience -= 10;
        }
        GameObject.Find("Answer").GetComponentInChildren.<UI.InputField>().text="";
      }
    }
        //randSize = chapter1_4_eng.Length;
    if(PermanentVariables.Chapter==1 && PermanentVariables.CLevel==5){
      if(Aobject) { //TODO randomize place of answer:
        if(ans.ToUpper().Equals(chapter1_5_fi[random_number].ToUpper())) {
              if(GameObject.Find("player"))
                  GameObject.Find("player").GetComponent(Shoot).shoot();
            askQuestions();
        } else {
            if(PermanentVariables.Experience>=10 )
              PermanentVariables.Experience -= 10;
        }
        GameObject.Find("Answer").GetComponentInChildren.<UI.InputField>().text="";
      }
    }
        //randSize = chapter1_5_eng.Length;
  } //if key enter

}

//TODO function where questions are randomized and showed to user:
function askQuestions(){
  //var randSize=0;

    if(PermanentVariables.Chapter==1 && PermanentVariables.CLevel==1) {

        random_number = Random.Range(0,chapter1_1_eng.length);
        print(random_number);
        var object = GameObject.Find("Question");
        if(object) {
          var question= GameObject.Find("Question").GetComponent.<UI.Text>();
          question.text = chapter1_1_eng[random_number];

        }
    }
        /*if(object) { //TODO randomize place of answer:
          var question= GameObject.Find("Question").GetComponent.<UI.Text>();
          var a1= GameObject.Find("Answer1").transform.GetComponentInChildren.<UI.Text>();
          a1.text = chapter1_1_fi[random_number];
          var a2= GameObject.Find("Answer2");
          var a3= GameObject.Find("Answer3");
          question.text = chapter1_1_eng[random_number];
        }*/
      //helptext = helptext2.GetComponent.<UI.Text>();
    if(PermanentVariables.Chapter==1 && PermanentVariables.CLevel==2){
      random_number = Random.Range(0,chapter1_2_eng.length);
      var object2 = GameObject.Find("Question");
      if(object2) {
        var question2= GameObject.Find("Question").GetComponent.<UI.Text>();
        question2.text = chapter1_2_eng[random_number];

      }
    }
        //randSize = chapter1_2_eng.Length;
    if(PermanentVariables.Chapter==1 && PermanentVariables.CLevel==3){
      random_number = Random.Range(0,chapter1_3_eng.length);
      var object3 = GameObject.Find("Question");
      if(object3) {
        var question3= GameObject.Find("Question").GetComponent.<UI.Text>();
        question3.text = chapter1_3_eng[random_number];

      }
    }
        //randSize = chapter1_3_eng.Length;
    if(PermanentVariables.Chapter==1 && PermanentVariables.CLevel==4){
      random_number = Random.Range(0,chapter1_4_eng.length);
      var object4 = GameObject.Find("Question");
      if(object4) {
        var question4= GameObject.Find("Question").GetComponent.<UI.Text>();
        question4.text = chapter1_4_eng[random_number];

      }
    }
        //randSize = chapter1_4_eng.Length;
    if(PermanentVariables.Chapter==1 && PermanentVariables.CLevel==5){
      random_number = Random.Range(0,chapter1_5_eng.length);
      var object5 = GameObject.Find("Question");
      if(object5) {
        var question5= GameObject.Find("Question").GetComponent.<UI.Text>();
        question5.text = chapter1_5_eng[random_number];

      }
    }
        //randSize = chapter1_5_eng.Length;

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
