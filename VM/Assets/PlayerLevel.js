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
}
