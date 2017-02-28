#pragma strict

var prefabShell : Rigidbody;
var fireVelocity : float;
var firePosition : Transform;


function Start () {

}

function Update () {

	if(Input.GetKeyDown("space")){
		var firedShell = Instantiate(prefabShell, transform.position, firePosition.rotation);
		firedShell.GetComponent.<Rigidbody>().AddForce(firePosition.forward * fireVelocity);
	}

}