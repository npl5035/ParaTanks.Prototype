#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter(other : Collider){

	if (other.gameObject.tag == "Enemy" || "Projectile"){
		
		Destroy(other.gameObject);
	
	}

}