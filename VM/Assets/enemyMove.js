#pragma strict
var playerDeleted : boolean ;
var Timer:float = 0.0;
var speed:float = 9.0;
private var question : int;
function Start () {
  playerDeleted=false;
  if(PermanentVariables.CLevel==5) {
    question = 5;
    if(PermanentVariables.Level<3){
      speed= 23 ;
    }else {
      speed =25 ;
    }
  } else {
    question = 2;
    if(PermanentVariables.Level<3){
      speed =10 ;
    }else {
      speed = 12;
    }

  }
}
var lostText : GameObject;
var wonText : GameObject;
function Update () {
    if(playerDeleted==false){
      this.GetComponent.<Rigidbody2D>().AddForce(Vector2.left /speed);
    } else {
      this.GetComponent.<Rigidbody2D>().isKinematic = true;
      this.GetComponent.<Rigidbody2D>().velocity = Vector2.zero;
      if(Timer+3 < Time.time) {
        SceneManagement.SceneManager.LoadScene("chapters");
      }
    }
}
function OnCollisionEnter2D(coll: Collision2D) {
	if (coll.gameObject.tag == "Player"){
    Destroy(coll.gameObject);
    playerDeleted=true;
    Instantiate(lostText,this.transform.position, Quaternion.identity);

      Timer = Time.time;
  }
  if (coll.gameObject.tag == "Fire"){
    question--;
    if(question == 0) {
      Instantiate(wonText,this.transform.position, Quaternion.identity);
      this.GetComponent.<Rigidbody2D>().isKinematic = true;
      this.GetComponent.<Rigidbody2D>().velocity = Vector2.zero;
      var fullpoints: boolean= false;
      if(PermanentVariables.Chapter==1 && PermanentVariables.CLevel==1 &&PermanentVariables.Chapter1[0]!=0) {
        fullpoints=true;
      }
      if(PermanentVariables.Chapter==1 && PermanentVariables.CLevel==2 &&PermanentVariables.Chapter1[1]!=0) {
        fullpoints=true;
      }
      if(PermanentVariables.Chapter==1 && PermanentVariables.CLevel==3 &&PermanentVariables.Chapter1[2]!=0) {
        fullpoints=true;
      }
      if(PermanentVariables.Chapter==1 && PermanentVariables.CLevel==4 &&PermanentVariables.Chapter1[3]!=0) {
        fullpoints=true;
      }
      if(PermanentVariables.Chapter==1 && PermanentVariables.CLevel==5 &&PermanentVariables.Chapter1[4]!=0) {
        fullpoints=true;
      }
      /////////CHAPTER 2
      if(PermanentVariables.Chapter==2 && PermanentVariables.CLevel==1 &&PermanentVariables.Chapter2[0]!=0) {
        fullpoints=true;
      }
      if(PermanentVariables.Chapter==2 && PermanentVariables.CLevel==2 &&PermanentVariables.Chapter2[1]!=0) {
        fullpoints=true;
      }
      if(PermanentVariables.Chapter==2 && PermanentVariables.CLevel==3 &&PermanentVariables.Chapter2[2]!=0) {
        fullpoints=true;
      }
      if(PermanentVariables.Chapter==2 && PermanentVariables.CLevel==4 &&PermanentVariables.Chapter2[3]!=0) {
        fullpoints=true;
      }
      if(PermanentVariables.Chapter==2 && PermanentVariables.CLevel==5 &&PermanentVariables.Chapter2[4]!=0) {
        fullpoints=true;
      }
     //////////CHAPTER 3
      if(PermanentVariables.Chapter==3 && PermanentVariables.CLevel==1 &&PermanentVariables.Chapter3[0]!=0) {
        fullpoints=true;
      }
      if(PermanentVariables.Chapter==3 && PermanentVariables.CLevel==2 &&PermanentVariables.Chapter3[1]!=0) {
        fullpoints=true;
      }
      if(PermanentVariables.Chapter==3 && PermanentVariables.CLevel==3 &&PermanentVariables.Chapter3[2]!=0) {
        fullpoints=true;
      }
      if(PermanentVariables.Chapter==3 && PermanentVariables.CLevel==4 &&PermanentVariables.Chapter3[3]!=0) {
        fullpoints=true;
      }
      if(PermanentVariables.Chapter==3 && PermanentVariables.CLevel==5 &&PermanentVariables.Chapter3[4]!=0) {
        fullpoints=true;
      }

      if(fullpoints) {
        print("second time");
      PermanentVariables.Experience += 30;
      }else {
        print("FIRST TIME");
        PermanentVariables.Experience += (50*PermanentVariables.Level)  ;
      }



        if(PermanentVariables.Chapter==1 && PermanentVariables.CLevel==1)
          PermanentVariables.Chapter1[0]=1;
        if(PermanentVariables.Chapter==1 && PermanentVariables.CLevel==2)
          PermanentVariables.Chapter1[1]=1;
        if(PermanentVariables.Chapter==1 && PermanentVariables.CLevel==3)
          PermanentVariables.Chapter1[2]=1;
        if(PermanentVariables.Chapter==1 && PermanentVariables.CLevel==4)
          PermanentVariables.Chapter1[3]=1;
        if(PermanentVariables.Chapter==1 && PermanentVariables.CLevel==5)
          PermanentVariables.Chapter1[4]=1;

        if(PermanentVariables.Chapter==2 && PermanentVariables.CLevel==1)
          PermanentVariables.Chapter2[0]=1;
        if(PermanentVariables.Chapter==2 && PermanentVariables.CLevel==2)
          PermanentVariables.Chapter2[1]=1;
        if(PermanentVariables.Chapter==2 && PermanentVariables.CLevel==3)
          PermanentVariables.Chapter2[2]=1;
        if(PermanentVariables.Chapter==2 && PermanentVariables.CLevel==4)
          PermanentVariables.Chapter2[3]=1;
        if(PermanentVariables.Chapter==2 && PermanentVariables.CLevel==5)
          PermanentVariables.Chapter2[4]=1;

        if(PermanentVariables.Chapter==3 && PermanentVariables.CLevel==1)
          PermanentVariables.Chapter3[0]=1;
        if(PermanentVariables.Chapter==3 && PermanentVariables.CLevel==2)
          PermanentVariables.Chapter3[1]=1;
        if(PermanentVariables.Chapter==3 && PermanentVariables.CLevel==3)
          PermanentVariables.Chapter3[2]=1;
        if(PermanentVariables.Chapter==3 && PermanentVariables.CLevel==4)
          PermanentVariables.Chapter3[3]=1;
        if(PermanentVariables.Chapter==3 && PermanentVariables.CLevel==5)
          PermanentVariables.Chapter3[4]=1;



        yield WaitForSeconds (0.4);
        SceneManagement.SceneManager.LoadScene("chapters");
    }
  }
		//coll.gameObject.SendMessage("ApplyDamage", 10);


}
