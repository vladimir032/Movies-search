# Movie Search App

This React application allows users to search for movies and display basic information using the OMDb API ([www.omdbapi.com](https://www.omdbapi.com)).

## Features

* **Search Functionality:** Search for movies by title using a search bar.
* **Movie Information Display:** Displays the full movie title, poster image, and release year for each search result.
* **Responsive Design:**  The application is designed to be responsive and adapt to different screen sizes.

## Technologies Used

* **React:** The core JavaScript library for building the user interface.
* **OMDb API:** The external API used for fetching movie data.
* **CSS (App.css):** Styles and responsive design for the application.

## Project Structure

* **App.js:** Contains the main application logic, including state management for search results and handling API calls.
* **index.js:**  Connects the React application to the static HTML file and renders the React components.
* **App.css:** Contains all CSS styles and responsive design rules.
* **MovieCard.jsx:** A functional component responsible for rendering the information for a single movie (title, poster, year).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing.

### Prerequisites

* Node.js, npm (or yarn) and React installed on your system.
* API Key: You will need an OMDb API key. Sign up for a free key at www.omdbapi.com. You'll need to configure your application to use this key (instructions on how to do this are typically within the App.js file, or possibly a separate configuration file). Refer to the project's code for specific instructions on adding your API key.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vladimir032/Movies-search.git
2. Navigate to the project directory:
   ```bash
   cd react-app
3. Install dependencies:
   ```bash
   npm install
4. Start project:
   ```bash
   npm start

The app will be accessible at http://localhost:3000