console.log("happy thursday!")

// alert("Hello! I am an alert box!!");

// let answer = prompt("How is the weather today?");

// console.log("The answer to the prompt above: ", answer);

const form = document.getElementById("contact-form");
console.log(form);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.name.value;
    const email = form.email.value;

    alert(`Thank you ${name} for your submission! We will email you at ${email} with the results!`)

    form.reset();
})