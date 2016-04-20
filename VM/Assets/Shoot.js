#pragma strict

function Start () {

  //shoot();
}

function Update () {

}

//function to shoot:
var ammo: GameObject;
function shoot(){
  var player =  GameObject.FindGameObjectWithTag("Player");
  var gun = player.transform.Find("gun").gameObject;
  var bullet = Instantiate(ammo,gun.transform.position, Quaternion.identity);
  bullet.GetComponent.<Rigidbody2D>().AddForce(Vector2.right * 250);

}
