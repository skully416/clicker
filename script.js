// Initialize variables
let points = 0;
let autoclickers = [
    { name: "Basic Autoclicker", cps: 1, cost: 10 },
    { name: "Advanced Autoclicker", cps: 5, cost: 50 },
    { name: "Super Autoclicker", cps: 10, cost: 100 }
];

// Function to update the points display
function updatePointsDisplay() {
    document.getElementById("pointsDisplay").textContent = points;
}

// Function to update the autoclickers list
function updateAutoclickersList() {
    const autoclickersList = document.getElementById("autoclickersList");
    autoclickersList.innerHTML = "";

    autoclickers.forEach((autoclicker, index) => {
        const li = document.createElement("li");
        li.textContent = `${autoclicker.name} (CPS: ${autoclicker.cps}) - Cost: ${autoclicker.cost} points`;
        autoclickersList.appendChild(li);

        // Add click event listener to buy autoclicker
        li.addEventListener("click", () => {
            if (points >= autoclicker.cost) {
                points -= autoclicker.cost;
                autoclicker.cost *= 2;
                updatePointsDisplay();
                updateAutoclickersList();
                setInterval(() => {
                    points += autoclicker.cps;
                    updatePointsDisplay();
                }, 1000);
            }
        });
    });
}

// Function to handle button click
function handleClick() {
    points++;
    updatePointsDisplay();
}

// Add click event listener to button
document.getElementById("clickButton").addEventListener("click", handleClick);

// Initialize the game
updatePointsDisplay();
updateAutoclickersList();
