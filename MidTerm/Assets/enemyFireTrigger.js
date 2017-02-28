#pragma strict

var player : Collider;
var triggered : boolean = false;


function Start () {

}

function Update () {

}

function OnTriggerEnter(col : Collider){

	if (col != player){
		return;
	}
	else {
	
		triggered = true;
	}
	return triggered;
}