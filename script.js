
function volume_sphere(e) {
	e.preventDefault()
    //Write your code here
	let r=document.getElementById("radius").value
	const v=document.getElementById("volume")
	r=(4/3) * Math.PI * Math.pow(r, 3);
	v.value=r
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
