#pragma strict

/** 
* private vars will not show up in the inspector, it also cannot be seen
* by other scripts.
* public vars can be seen by the inspector and the script in MonoDevelop.
* static vars can be seen by other scripts.
*/

/** 
* you can also use something like GetButtonDown ("jump")
* TODO: Figure out what GetKey(without Down or Up) does
* using youtube.com/watch?v=PazLGgeFkHI
*/

// The speed of the rotation
var rotationSpeed = 100;
var jumpHeight = 8;
private var isFalling = false;

function Update () 
{
	// Handle ball rotation
	var rotation : float = Input.GetAxis("Horizontal") * rotationSpeed;
	rotation *= Time.deltaTime;
	// Actually makes the ball rotation move the rigidbody using the Vector3
	rigidbody.AddRelativeTorque(Vector3.back * rotation);
	// This basically says that if the W key is pushed down, then 
	if (Input.GetKeyDown(KeyCode.W) && (isFalling == false))
	{
		rigidbody.velocity.y = jumpHeight;
		
	}
	// do NOT put this code inside the if statement, because the way Unity reads code
	isFalling = true;
}
// Only for collisions and trigers
function OnCollisionStay() 
{
	isFalling = false;
}