#pragma strict

var buttonlist1:  GameObject[];
var buttonlist2:  GameObject[];
var buttonlist3:  GameObject[];
var help: GameObject;
var helptext: UI.Text;

function Start () {

    buttonlist1 = GameObject.FindGameObjectsWithTag ("chapter1");
    buttonlist2 = GameObject.FindGameObjectsWithTag ("chapter2");
    buttonlist3 = GameObject.FindGameObjectsWithTag ("chapter3");
    help = GameObject.FindGameObjectWithTag ("helpmenu");
    helptext = GameObject.Find("helpmenutext").GetComponent.<UI.Text>();


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
    //aina aluksi näytetään vain chapter 1
    ChangeChapter(1);
}

//
function Update () {
  if (Input.GetKeyDown ("escape"))
  			  help.SetActive(false);
}

function LoadLvl(name : String){
 SceneManagement.SceneManager.LoadScene(name);
// Application.LoadLevel(name);
}


public var buttonlist:  GameObject[];
//funktio joka näyttää oikean chapterin "tehtävät"
function ChangeChapter(number: int){
  if(number==1){
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



function showText(level : String) {
    help.SetActive(true);
    helptext.text  = "Moi  = Hello \nNäkemiin = Good bye";
}
