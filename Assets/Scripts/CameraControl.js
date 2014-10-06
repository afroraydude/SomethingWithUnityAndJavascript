#pragma strict

/**
* based on www.youtube.com/watch?v=m8VPHAs0F8w
*/
var target : Transform;
// How far it is in the z axis
var distance = -10;
// How far it is in the y axis
var lift = 1.5;

function Update () 
{
	transform.position = target.position + Vector3(0, lift, distance);
	
	transform.LookAt (target);
}