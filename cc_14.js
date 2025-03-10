// Task 2
// Function to create a new support ticket
function createSupportTicket(name, issue, priority) {
    // Select the ticket container
    const container = document.getElementById("ticketContainer");

    // Create the ticket card element
    const ticket = document.createElement("div");
    ticket.classList.add("ticket-card");

    // Create and set up the customer's name heading
    const nameHeading = document.createElement("h3");
    nameHeading.textContent = name;

    // Create and set up the issue description paragraph
    const issuePara = document.createElement("p");
    issuePara.textContent = issue;

    // Create the priority label
    const priorityLabel = document.createElement("span");
    priorityLabel.textContent = `Priority: ${priority}`;
    priorityLabel.classList.add("priority");

    // Apply color based on priority level
    if (priority.toLowerCase() === "high") {
        priorityLabel.style.color = "red";
    } else if (priority.toLowerCase() === "medium") {
        priorityLabel.style.color = "orange";
    } else {
        priorityLabel.style.color = "green";
    }

    // Create the resolve button
    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve";
    resolveButton.classList.add("resolve-btn");

    // Event listener to remove the ticket when resolved
    resolveButton.addEventListener("click", function () {
        container.removeChild(ticket);
    });

    // Append elements to the ticket
    ticket.appendChild(nameHeading);
    ticket.appendChild(issuePara);
    ticket.appendChild(priorityLabel);
    ticket.appendChild(resolveButton);

    // Append the ticket to the container
    container.appendChild(ticket);
}

// Example usage: Adding test tickets
createSupportTicket("Alice Johnson", "Cannot access account", "High");
createSupportTicket("Bob Smith", "Payment not going through", "Medium");
createSupportTicket("Charlie Brown", "Bug in mobile app", "Low");

// Task 3
// Function to create a new support ticket
function createSupportTicket(name, issue, priority) {
    // Select the ticket container
    const container = document.getElementById("ticketContainer");

    // Create the ticket card element
    const ticket = document.createElement("div");
    ticket.classList.add("ticket-card");

    // Create and set up the customer's name heading
    const nameHeading = document.createElement("h3");
    nameHeading.textContent = name;

    // Create and set up the issue description paragraph
    const issuePara = document.createElement("p");
    issuePara.textContent = issue;

    // Create the priority label
    const priorityLabel = document.createElement("span");
    priorityLabel.textContent = `Priority: ${priority}`;
    priorityLabel.classList.add("priority");

    // Apply color based on priority level
    if (priority.toLowerCase() === "high") {
        priorityLabel.style.color = "red";
        ticket.classList.add("high-priority");  // Add class to highlight high-priority tickets
    } else if (priority.toLowerCase() === "medium") {
        priorityLabel.style.color = "orange";
    } else {
        priorityLabel.style.color = "green";
    }

    // Create the resolve button
    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve";
    resolveButton.classList.add("resolve-btn");

    // Event listener to remove the ticket when resolved
    resolveButton.addEventListener("click", function () {
        container.removeChild(ticket);
    });

    // Append elements to the ticket
    ticket.appendChild(nameHeading);
    ticket.appendChild(issuePara);
    ticket.appendChild(priorityLabel);
    ticket.appendChild(resolveButton);

    // Append the ticket to the container
    container.appendChild(ticket);
}

// Function to highlight high-priority tickets
function highlightHighPriorityTickets() {
    // Select all tickets with the "high-priority" class
    const highPriorityTickets = document.querySelectorAll(".high-priority");

    // Convert NodeList to an array
    const highPriorityArray = Array.from(highPriorityTickets);

    // Use forEach to apply a style update
    highPriorityArray.forEach(function(ticket) {
        ticket.style.backgroundColor = "#ffcccc";  // Change background color for high priority tickets
        ticket.style.border = "2px solid red";     // Add a red border to high-priority tickets
    });
}

// Example usage: Adding test tickets
createSupportTicket("Alice Johnson", "Cannot access account", "High");
createSupportTicket("Bob Smith", "Payment not going through", "Medium");
createSupportTicket("Charlie Brown", "Bug in mobile app", "Low");

// Call the function to highlight high-priority tickets
highlightHighPriorityTickets();
