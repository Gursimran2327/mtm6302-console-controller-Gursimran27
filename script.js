// Function to update the page title
function setTitle(newTitle) {
    const titleElement = document.getElementById('page-title');
    if (newTitle) {
        titleElement.textContent = newTitle;
    } else {
        titleElement.textContent = 'Welcome to My Customizable Page'; // Default title
    }
}

// Function to update the page description
function setDescription(newDescription) {
    const descriptionElement = document.getElementById('page-description');
    if (newDescription) {
        descriptionElement.textContent = newDescription;
    } else {
        descriptionElement.textContent = 'This is a customizable page. Use the console to make changes!'; // Default description
    }
}

// Function to update the background color
function setBackgroundColor(color) {
    document.body.style.backgroundColor = color ? color : ''; // Reset to default if empty string
}

// Function to update the font color
function setFontColor(color) {
    document.body.style.color = color ? color : ''; // Reset to default if empty string
}

// Function to set the theme (light or dark)
function setTheme(theme) {
    document.body.classList.remove('dark-theme', 'light-theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    } else if (theme === 'light') {
        document.body.classList.add('light-theme');
    }
}