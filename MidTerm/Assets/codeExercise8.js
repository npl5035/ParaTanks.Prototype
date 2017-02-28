#pragma strict

var moveSpeed: float = 4.0;

	function Update()
	{
		if (Input.GetKey("w"))
		{
			transform.localPosition.z += moveSpeed;
		}
		else if (Input.GetKey("a"))
		{
			transform.localPosition.x -= moveSpeed;
		}
		else if (Input.GetKey("d"))
		{
			transform.localPosition.x += moveSpeed;
		}
		else if (Input.GetKey("s"))
		{
			transform.localPosition.z -= moveSpeed;
		}
		else if (!Input.GetKey("s" || "d" || "a" || "w"))
		{
			print("Pressing invalid key.");
		}
	}
	
	/* line 4: second #pragma strict message
	line 6: should be update function
	line 10: should transform along the z axis
	line 12: forgot second )
	line 14: transofrm along the x
	line 20: forgot a " after the s
	line 22: transform along the z
	line 26: not sure how to stop this messeage from spamming the console
	line 29+ forgot to end the multi-line comment	
	
	handle movement
	function Update()
		{
			
		}*/
		