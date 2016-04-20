#pragma strict

function Start () {

}

function Update () {

}
var exp : GameObject;
function OnCollisionEnter2D(coll: Collision2D) {
	if (coll.gameObject.tag == "enemy"){
    var exp_pos= GameObject.Find("enemy");
    exp.gameObject.GetComponent.<ParticleSystem>().enableEmission = true;
    PermanentVariables.Experience += 20;
    Destroy(this.gameObject);
  }
		//coll.gameObject.SendMessage("ApplyDamage", 10);


}
