#pragma strict

var fireVelocity : float;
var firePosition : Transform;
var projectile : GameObject;
//var enemyTrigger : enemyFireTrigger = GetComponent(enemyFireTrigger);

private var nextFire = 0.0;


function Start () {

}

function Update () {
	var fireRate : float = Random.Range(0.5, 3);


	//if(enemyTrigger == true){
		if(Time.time > nextFire){
			nextFire = Time.time + fireRate;
			var planeFire = Instantiate(projectile, transform.position, firePosition.rotation);
			planeFire.GetComponent.<Rigidbody>().AddForce(firePosition.forward * fireVelocity);
		}
	//}

}