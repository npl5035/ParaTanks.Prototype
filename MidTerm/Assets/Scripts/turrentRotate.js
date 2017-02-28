#pragma strict

function Start () {

}

function Update () {

	if(Input.GetKey("q")){
		transform.Rotate(0,-5,0);
	}
	else if(Input.GetKey("e")){
		transform.Rotate(0,5,0);
	}


}