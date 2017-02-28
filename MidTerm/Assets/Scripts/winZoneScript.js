#pragma strict
function Start () {

}

function Update () {
		
}

function OnTriggerEnter(col : Collider){
	
	if(col.tag == "Player"){
		Debug.Log("WIN!");
		Application.LoadLevel("winScreen");
	
	}


}