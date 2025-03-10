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

// Task 4
// Function to create a new support ticket
function createSupportTicket(name, issue, priority) {
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
    resolveButton.addEventListener("click", function (event) {
        // Remove the ticket from the container
        container.removeChild(ticket);

        // Prevent the event from bubbling up to the container
        event.stopPropagation();
    });

    // Create the edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-btn");

    // Event listener for editing the ticket
    editButton.addEventListener("click", function () {
        enableEditing(ticket, nameHeading, issuePara, priorityLabel);
    });

    // Append elements to the ticket
    ticket.appendChild(nameHeading);
    ticket.appendChild(issuePara);
    ticket.appendChild(priorityLabel);
    ticket.appendChild(resolveButton);
    ticket.appendChild(editButton);

    // Append the ticket to the container
    container.appendChild(ticket);
}

// Enable inline editing for a ticket
function enableEditing(ticket, nameHeading, issuePara, priorityLabel) {
    // Store the original values
    const originalName = nameHeading.textContent;
    const originalIssue = issuePara.textContent;
    const originalPriority = priorityLabel.textContent.replace("Priority: ", "");

    // Replace static content with input fields
    nameHeading.innerHTML = `<input type="text" value="${originalName}" />`;
    issuePara.innerHTML = `<input type="text" value="${originalIssue}" />`;
    priorityLabel.innerHTML = `
        <select>
            <option value="High" ${originalPriority === "High" ? "selected" : ""}>High</option>
            <option value="Medium" ${originalPriority === "Medium" ? "selected" : ""}>Medium</option>
            <option value="Low" ${originalPriority === "Low" ? "selected" : ""}>Low</option>
        </select>
    `;

    // Change the "Edit" button to "Save"
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.classList.add("save-btn");

    // Event listener to save the updated values
    saveButton.addEventListener("click", function () {
        const newName = nameHeading.querySelector("input").value;
        const newIssue = issuePara.querySelector("input").value;
        const newPriority = priorityLabel.querySelector("select").value;

        // Update the ticket with the new values
        nameHeading.textContent = newName;
        issuePara.textContent = newIssue;
        priorityLabel.textContent = `Priority: ${newPriority}`;

        // Revert the "Save" button to "Edit"
        ticket.removeChild(saveButton);
        ticket.appendChild(editButton);
    });

    // Replace the "Edit" button with the "Save" button
    ticket.removeChild(editButton);
    ticket.appendChild(saveButton);
}

// Add an event listener to the ticket container to demonstrate event bubbling
document.getElementById("ticketContainer").addEventListener("click", function () {
    console.log("A ticket was clicked.");
});

// Example usage: Adding test tickets
createSupportTicket("Alice Johnson", "Cannot access account", "High");
createSupportTicket("Bob Smith", "Payment not going through", "Medium");
createSupportTicket("Charlie Brown", "Bug in mobile app", "Low");

//Task 5
// Function to create a new support ticket
function createSupportTicket(name, issue, priority) {
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
    resolveButton.addEventListener("click", function (event) {
        // Remove the ticket from the container
        container.removeChild(ticket);

        // Prevent the event from bubbling up to the container
        event.stopPropagation();
    });

    // Create the edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-btn");

    // Event listener for editing the ticket
    editButton.addEventListener("click", function () {
        enableEditing(ticket, nameHeading, issuePara, priorityLabel);
    });

    // Add double-click listener to enable editing
    ticket.addEventListener("dblclick", function () {
        enableEditing(ticket, nameHeading, issuePara, priorityLabel);
    });

    // Append elements to the ticket
    ticket.appendChild(nameHeading);
    ticket.appendChild(issuePara);
    ticket.appendChild(priorityLabel);
    ticket.appendChild(resolveButton);
    ticket.appendChild(editButton);

    // Append the ticket to the container
    container.appendChild(ticket);
}

// Enable inline editing for a ticket
function enableEditing(ticket, nameHeading, issuePara, priorityLabel) {
    // Store the original values
    const originalName = nameHeading.textContent;
    const originalIssue = issuePara.textContent;
    const originalPriority = priorityLabel.textContent.replace("Priority: ", "");

    // Replace static content with input fields
    nameHeading.innerHTML = `<input type="text" value="${originalName}" />`;
    issuePara.innerHTML = `<input type="text" value="${originalIssue}" />`;
    priorityLabel.innerHTML = `
        <select>
            <option value="High" ${originalPriority === "High" ? "selected" : ""}>High</option>
            <option value="Medium" ${originalPriority === "Medium" ? "selected" : ""}>Medium</option>
            <option value="Low" ${originalPriority === "Low" ? "selected" : ""}>Low</option>
        </select>
    `;

    // Change the "Edit" button to "Save"
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.classList.add("save-btn");

    // Event listener to save the updated values
    saveButton.addEventListener("click", function () {
        const newName = nameHeading.querySelector("input").value;
        const newIssue = issuePara.querySelector("input").value;
        const newPriority = priorityLabel.querySelector("select").value;

        // Update the ticket with the new values
        nameHeading.textContent = newName;
        issuePara.textContent = newIssue;
        priorityLabel.textContent = `Priority: ${newPriority}`;

        // Revert the "Save" button to "Edit"
        ticket.removeChild(saveButton);
        ticket.appendChild(editButton);
    });

    // Replace the "Edit" button with the "Save" button
    ticket.removeChild(editButton);
    ticket.appendChild(saveButton);
}

// Example usage: Adding test tickets
createSupportTicket("Alice Johnson", "Cannot access account", "High");
createSupportTicket("Bob Smith", "Payment not going through", "Medium");
createSupportTicket("Charlie Brown", "Bug in mobile app", "Low");
