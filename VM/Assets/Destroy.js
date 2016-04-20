#pragma strict
private var count : int;
function Start () {
  count=0;

}

function Update () {

}
var exp : GameObject;
function OnCollisionEnter2D(coll: Collision2D) {
	if (coll.gameObject.tag == "enemy"){
    var exp_pos= GameObject.Find("enemy");
    Instantiate(exp,this.transform.position, Quaternion.identity);
  //  exp.gameObject.GetComponent.<ParticleSystem>().enableEmission = true;

  PermanentVariables.Experience += 20;



      Destroy(this.gameObject);


  }
		//coll.gameObject.SendMessage("ApplyDamage", 10);

}
