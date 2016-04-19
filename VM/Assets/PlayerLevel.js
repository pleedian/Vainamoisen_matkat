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

}
function Start() {
  fullXPWidth  = Screen.width/5;
}

function OnGUI() {
  //XP BAR + LEVEL INDICATOR
  GUI.DrawTexture(new Rect(Screen.width/2, Screen.height - 25, fullXPWidth, 15), xpbar, ScaleMode.ScaleAndCrop, true, 0 );
  GUI.DrawTexture(new Rect(Screen.width/2, Screen.height - 25, fullXPWidth *(PermanentVariables.Experience/ PermanentVariables.NextXpLevel), 15), xpbar_full, ScaleMode.ScaleAndCrop, true, 0 );
  GUI.Label(Rect (Screen.width/2-75,Screen.height - 25,100,50), "Level: "+PermanentVariables.Level.ToString());
}
