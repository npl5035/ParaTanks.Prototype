#pragma strict
	var DistanceAwayX : float = 47.47;
	var DistanceAwayY : float = 20.63;
	var DistanceAwayZ : float = -0.24;
	var Tank : GameObject;
function Start () {

}

function Update () {

    var PlayerPOS : Vector3  = GameObject.Find("Tank").transform.transform.position;
    var cameraX : float = PlayerPOS.x + DistanceAwayX;
    var cameraY : float = PlayerPOS.y + DistanceAwayY;
    var cameraZ : float = PlayerPOS.z + DistanceAwayZ;
    GameObject.Find("MainCamera").transform.position = new Vector3(cameraX, cameraY, cameraZ);
     
}