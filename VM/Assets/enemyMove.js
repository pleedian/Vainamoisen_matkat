#pragma strict
var playerDeleted : boolean = false;
var Timer:float = 0.0;

function Start () {
  playerDeleted=false;
}
var lostText : GameObject;
function Update () {
    if(playerDeleted==false){
      this.GetComponent.<Rigidbody2D>().AddForce(Vector2.left /2);
    } else {
      this.GetComponent.<Rigidbody2D>().isKinematic = true;
      this.GetComponent.<Rigidbody2D>().velocity = Vector2.zero;
    }
}
function OnCollisionEnter2D(coll: Collision2D) {
	if (coll.gameObject.tag == "Player"){
    Destroy(coll.gameObject);
    playerDeleted=true;
    Instantiate(lostText,this.transform.position, Quaternion.identity);

      //was for test:
      //Timer += Time.deltaTime;
      //PermanentVariables.Experience += Timer;
  }
		//coll.gameObject.SendMessage("ApplyDamage", 10);


}
