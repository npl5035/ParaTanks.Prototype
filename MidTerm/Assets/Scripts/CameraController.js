#pragma strict


public var cameraXoffset : float;
public var cameraYoffset : float;
public var cameraZoffset : float;
var player : Transform;
//var camPosition : Vector3 = transform.position + new Vector3(cameraXoffset, cameraYoffset, cameraZoffset);
var camPosition : Vector3;

function Start () {
	
	camPosition = player.transform.position - transform.position;
	
}

function Update () {

	transform.position = player.transform.position - camPosition;

}