#pragma strict

var Turret : GameObject;
var rotationRate : float = 5;
var driftSpeed : float = 5;

function Start () {

}

function Update () {

	if(Input.GetKey("a")){
		transform.Translate(0,0,-driftSpeed * Time.deltaTime);
	}
	else if(Input.GetKey("d")){
		transform.Translate(0,0,driftSpeed * Time.deltaTime);
	}
	

}