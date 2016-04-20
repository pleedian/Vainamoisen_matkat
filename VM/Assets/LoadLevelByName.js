#pragma strict

var buttonlist1:  GameObject[];
var buttonlist2:  GameObject[];
var buttonlist3:  GameObject[];
var help: GameObject;
var helptext: UI.Text;
var playerlevel: UI.Text;
function Start () {
    buttonlist1 = GameObject.FindGameObjectsWithTag ("chapter1");
    buttonlist2 = GameObject.FindGameObjectsWithTag ("chapter2");
    buttonlist3 = GameObject.FindGameObjectsWithTag ("chapter3");
    help = GameObject.FindGameObjectWithTag ("helpmenu");

    var helptext2= GameObject.Find("helpmenutext");
    if(helptext2)
      helptext = helptext2.GetComponent.<UI.Text>();


    //playerlevel = GameObject.Find("playerlevel").GetComponent.<UI.Text>();
    var playerlevel2= GameObject.Find("playerlevel");
    if(playerlevel2)
      playerlevel = playerlevel2.GetComponent.<UI.Text>();

    if(help)
      help.SetActive(false);
    //piiloitetaan turhat pois:
    for(var i=0;i<buttonlist1.Length;i++){
      buttonlist1[i].SetActive(true);
    }

    for(var i1=0;i1<buttonlist2.Length;i1++){
      buttonlist2[i1].SetActive(true);
    }
    for(var i2=0;i2<buttonlist3.Length;i2++){
      buttonlist3[i2].SetActive(true);
    }
    //always who chapter1:
    ChangeChapter(1);
}

//


//fullXPWidth *(PermanentVariables.Experience/ PermanentVariables.NextXpLevel)
var Timer:float = 0.0;
function Update () {
  //was for test:
  //Timer += Time.deltaTime;
  //PermanentVariables.Experience += Timer;
  if (Input.GetKeyDown ("escape")) {
  		  if(help) {
          help.SetActive(false);
        }
  }

  //XP : TODO this is will be moved to playscene: levelscene:
  if(PermanentVariables.Experience >= PermanentVariables.NextXpLevel) {
    if(PermanentVariables.Experience > PermanentVariables.NextXpLevel) {
      PermanentVariables.Experience= PermanentVariables.Experience-PermanentVariables.NextXpLevel;
    } else {
        PermanentVariables.Experience = 0;
      }
      if(PermanentVariables.Level <10) {
          PermanentVariables.Level+=1;
      }
      PermanentVariables.NextXpLevel= PermanentVariables.NextXpLevel*3 ;
    }
  if(playerlevel) {
    if(PermanentVariables.Level==1)
      playerlevel.text  = "Beginner";
    if(PermanentVariables.Level==3)
      playerlevel.text  = "Novice";
    if(PermanentVariables.Level==5)
      playerlevel.text  = "Mediocre";
    if(PermanentVariables.Level==7)
      playerlevel.text  = "Master";
    if(PermanentVariables.Level==10)
      playerlevel.text  = "Expert";
  }
}

//function takes level number so level knows what questions to ask
function LoadLvl(name : int){
//changes variable:
  PermanentVariables.CLevel =name;
  print("LEVEL : "+ PermanentVariables.CLevel);
 SceneManagement.SceneManager.LoadScene("chapters/level");
// Application.LoadLevel(name);
}

//Function that is used in main menu
//load Chapter selection scene:
function LoadChapter(){
 SceneManagement.SceneManager.LoadScene("chapters");
// Application.LoadLevel(name);
}

public var buttonlist:  GameObject[];
//funktio joka näyttää oikean chapterin "tehtävät"
function ChangeChapter(number: int){
  if(number==1){
      PermanentVariables.Chapter = 1;
    for(var i=0;i<buttonlist1.Length;i++){
      buttonlist1[i].SetActive(true);
    }
    for(var ik2=0;ik2<buttonlist2.Length;ik2++){
      buttonlist2[ik2].SetActive(false);
    }
    for(var ik1=0;ik1<buttonlist3.Length;ik1++){
      buttonlist3[ik1].SetActive(false);
    }
 } if (number == 2){
   PermanentVariables.Chapter = 2;
   for(var i3=0;i3<buttonlist1.Length;i3++){
     buttonlist1[i3].SetActive(false);
   }
   for(var ik22=0;ik22<buttonlist2.Length;ik22++){
     buttonlist2[ik22].SetActive(true);
   }
   for(var ik12=0;ik12<buttonlist3.Length;ik12++){
     buttonlist3[ik12].SetActive(false);
   }
 }if (number == 3){
   PermanentVariables.Chapter = 3;
   for(var i33=0;i33<buttonlist1.Length;i33++){
     buttonlist1[i33].SetActive(false);
   }
   for(var ik23=0;ik23<buttonlist2.Length;ik23++){
     buttonlist2[ik23].SetActive(false);
   }
   for(var ik13=0;ik13<buttonlist3.Length;ik13++){
     buttonlist3[ik13].SetActive(true);
   }
 }
}

var textforhelp : ReadVoc ;
//function to show help text to learn finnish words:
//input = level number
function showText(level :int) {
  PermanentVariables.CLevel = level;
    help.SetActive(true);
    helptext.text=textforhelp.returnText();  // = "Moi  = Hello \nNäkemiin = Good bye";
}
