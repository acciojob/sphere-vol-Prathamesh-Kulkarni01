
function volume_sphere(e) {
	e.preventDefault()
    //Write your code here
	const r=document.getElementById("radius").value
	const v=document.getElementById("volume")
	v.value=r
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
