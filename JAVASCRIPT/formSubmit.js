document.getElementById("form").addEventListener('submit', function(event) {
    event.preventDefault();

    let fname = document.getElementById("fname").value;

    let lname = document.getElementById("fname").value;

    let age = document.getElementById("age").value;

    console.log("Firstname : ", fname);
    console.log("Lastname : ", lname);
    console.log("Age : ", age);
})