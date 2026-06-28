const form = document.getElementById("complaintForm");
const complaintList = document.getElementById("complaintList");

let complaints = [];

form.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value;
const category = document.getElementById("category").value;
const description = document.getElementById("description").value;

const complaint = {
name:name,
category:category,
description:description,
status:"Pending"
};

complaints.push(complaint);

displayComplaints();

form.reset();

});

function displayComplaints(){

complaintList.innerHTML="";

complaints.forEach(function(c){

const div = document.createElement("div");

div.classList.add("complaint-card");

div.innerHTML = `
<b>Name:</b> ${c.name} <br>
<b>Category:</b> ${c.category} <br>
<b>Description:</b> ${c.description} <br>
<b>Status:</b> ${c.status}
`;

complaintList.appendChild(div);

});

}
