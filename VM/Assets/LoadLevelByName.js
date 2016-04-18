#pragma strict
var buttonlist1:  GameObject[];
var buttonlist2:  GameObject[];
var buttonlist3:  GameObject[];
function Start () {

    buttonlist1 = GameObject.FindGameObjectsWithTag ("chapter1");
    buttonlist2 = GameObject.FindGameObjectsWithTag ("chapter2");
    buttonlist3 = GameObject.FindGameObjectsWithTag ("chapter3");

    for(var i=0;i<buttonlist1.Length;i++){
      ///if(buttonlist[i].name.Contains(objectName))
      buttonlist1[i].SetActive(true);
    }

    for(var i1=0;i1<buttonlist2.Length;i1++){
      ///if(buttonlist[i].name.Contains(objectName))
      buttonlist2[i1].SetActive(true);
    }
    for(var i2=0;i2<buttonlist3.Length;i2++){
      ///if(buttonlist[i].name.Contains(objectName))
      buttonlist3[i2].SetActive(true);
    }
    ChangeChapter(1);
}

function Update () {

}

function LoadLvl(name : String){

  Application.LoadLevel(name);
}
public var buttonlist:  GameObject[];
function ChangeChapter(number: int){
  if(number==1){
    for(var i=0;i<buttonlist1.Length;i++){
      ///if(buttonlist[i].name.Contains(objectName))
      buttonlist1[i].SetActive(true);
    }
    for(var ik2=0;ik2<buttonlist2.Length;ik2++){
      ///if(buttonlist[i].name.Contains(objectName))
      buttonlist2[ik2].SetActive(false);
    }
    for(var ik1=0;ik1<buttonlist3.Length;ik1++){
      ///if(buttonlist[i].name.Contains(objectName))
      buttonlist3[ik1].SetActive(false);
    }
 } if (number == 2){
   for(var i3=0;i3<buttonlist1.Length;i3++){
     ///if(buttonlist[i].name.Contains(objectName))
     buttonlist1[i3].SetActive(false);
   }
   for(var ik22=0;ik22<buttonlist2.Length;ik22++){
     ///if(buttonlist[i].name.Contains(objectName))
     buttonlist2[ik22].SetActive(true);
   }
   for(var ik12=0;ik12<buttonlist3.Length;ik12++){
     ///if(buttonlist[i].name.Contains(objectName))
     buttonlist3[ik12].SetActive(false);
   }
 }if (number == 3){
   for(var i33=0;i33<buttonlist1.Length;i33++){
     ///if(buttonlist[i].name.Contains(objectName))
     buttonlist1[i33].SetActive(false);
   }
   for(var ik23=0;ik23<buttonlist2.Length;ik23++){
     ///if(buttonlist[i].name.Contains(objectName))
     buttonlist2[ik23].SetActive(false);
   }
   for(var ik13=0;ik13<buttonlist3.Length;ik13++){
     ///if(buttonlist[i].name.Contains(objectName))
     buttonlist3[ik13].SetActive(true);
   }
 }

}
