var xpbar : Texture;
var xpbar_full : Texture;
var fullXPWidth : float = Screen.width/5;
public static class PermanentVariables
{
    public var Experience : float = 0;
      public var NextXpLevel : float = 100;
    public var Level : int = 1;
    public var Chapter : int = 1;
    public var CLevel : int = 0;
    public var Chapter1:int[] = [0,0,0,0,0];
    public var Chapter2:int[] = [0,0,0,0,0];
    public var Chapter3:int[] = [0,0,0,0,0];
}
function Start() {
  fullXPWidth  = Screen.width/5;
}

function OnGUI() {
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
  var playerlv = GameObject.FindGameObjectWithTag ("playerlevel");
  //  print(playerlv.transform.position.y);
  //XP BAR + LEVEL INDICATOR
  GUI.DrawTexture(new Rect(Screen.width/2, Screen.height - 50, fullXPWidth, 15), xpbar, ScaleMode.ScaleAndCrop, true, 0 );
  GUI.DrawTexture(new Rect(Screen.width/2, Screen.height - 50, fullXPWidth *(PermanentVariables.Experience/ PermanentVariables.NextXpLevel), 15), xpbar_full, ScaleMode.ScaleAndCrop, true, 0 );
  GUI.Label(Rect (Screen.width/2-75,Screen.height - 27,100,50), "Level: "+PermanentVariables.Level.ToString());
  /*if(GameObject.Find("C1level_1")){
    print("found level1");
    GameObject.Find("C1level_1").SetActive(false);
  }*/

  //var path : String [] = EditorApplication.currentScene.Split(char.Parse("/"));
  //path[path.Length -1] == "chapters.unity"

  print(PermanentVariables.Chapter1[0]+","+PermanentVariables.Chapter1[1]+","+PermanentVariables.Chapter1[2]+","+PermanentVariables.Chapter1[3]+","+PermanentVariables.Chapter1[4]);

  if(GameObject.Find("C1level_2") && !PermanentVariables.Chapter1[0]){
    GameObject.Find("C1level_2").SetActive(false);
  }
  if(GameObject.Find("C1level_3") && !PermanentVariables.Chapter1[1]){
    GameObject.Find("C1level_3").SetActive(false);
  }
  if(GameObject.Find("C1level_4") && !PermanentVariables.Chapter1[2]){
    GameObject.Find("C1level_4").SetActive(false);
  }
  if(GameObject.Find("C1level_5") && !PermanentVariables.Chapter1[3]){
    GameObject.Find("C1level_5").SetActive(false);
  }

  if(GameObject.Find("C2level_1") && !PermanentVariables.Chapter1[4]){
    GameObject.Find("C2level_1").SetActive(false);
  }
  if(GameObject.Find("C2level_2") && !PermanentVariables.Chapter2[0]){
    GameObject.Find("C2level_2").SetActive(false);
  }
  if(GameObject.Find("C2level_3") && !PermanentVariables.Chapter2[1]){
    GameObject.Find("C2level_3").SetActive(false);
  }
  if(GameObject.Find("C2level_4") && !PermanentVariables.Chapter2[2]){
    GameObject.Find("C2level_4").SetActive(false);
  }
  if(GameObject.Find("C2level_5") && !PermanentVariables.Chapter2[3]){
    GameObject.Find("C2level_5").SetActive(false);
  }

  if(GameObject.Find("C3level_1") && !PermanentVariables.Chapter2[4]){
    GameObject.Find("C3level_1").SetActive(false);
  }
  if(GameObject.Find("C3level_2") && !PermanentVariables.Chapter3[0]){
    GameObject.Find("C3level_2").SetActive(false);
  }
  if(GameObject.Find("C3level_3") && !PermanentVariables.Chapter3[1]){
    GameObject.Find("C3level_3").SetActive(false);
  }
  if(GameObject.Find("C3level_4") && !PermanentVariables.Chapter3[2]){
    GameObject.Find("C3level_4").SetActive(false);
  }
  if(GameObject.Find("C3level_5") && !PermanentVariables.Chapter3[3]){
    GameObject.Find("C3level_5").SetActive(false);
  }

}
