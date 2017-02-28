#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter(kill : Collider){

	if (kill.gameObject.tag == "Projectile" || "yourProjectile"){
		Destroy(kill.gameObject);
	
	}

}