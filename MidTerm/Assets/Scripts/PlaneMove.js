#pragma strict

var moveSpeed : float = 10;

function Start () {

}

function Update () {

	transform.position += transform.forward * Time.deltaTime * moveSpeed;
	
}