
function h1Greeting() {
    // Updates the H1 based on the OS Time
    const hour = new Date().getHours();
    const elem = document.getElementById('greeting');
    if (hour >= 5 && hour < 12 ) {
        // Morning
        console.log("Good Morning")
        elem.textContent='Good Morning'
    }
    else if (hour >= 12 && hour < 18) {
        // Afternoon
        console.log("Good Afternoon")
        elem.textContent='Good Afternoon'
    }
    else {
        // Evening
        console.log("Good Evening")
        elem.textContent='Good Evening'
    };
}

h1Greeting()
