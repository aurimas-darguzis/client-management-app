# Client Management App

This project is a simple client management app built with the latest version of Angular. The app allows staff to view and manage internal clients through a user-friendly interface. The project demonstrates a scalable architecture suitable for large enterprise-sized applications.

## Features

- Fetches clients from the API (https://randomuser.me/api/?results=20&page=1)
- Displays clients in a paginated list with relevant details
- Provides a search box to filter the client list
- Navigates to a "details" view upon clicking a client, showing additional information
- Includes basic unit tests demonstrating Angular testing concepts and best practices

## Requirements

The app is:

1. Presentable with a clean and modern UI
2. Optimized for performance
3. Developed with a strong understanding of Angular concepts and best practices

## Instructions

1. Clone the GitHub repository to your local machine
2. Navigate to the project directory
3. Run `npm install` to install the necessary dependencies
4. Run `ng serve` to start a local development server
5. Open your browser and navigate to http://localhost:4200/

## Development Process

1. Scaffolded app with Angular CLI
2. Created internal-clients module as a feature module
3. Created internal-clients-routing module to handle routing for the feature module
4. Created internal-clients service to handle API calls
5. Used service to store selected client in a BehaviorSubject, so that client-detail component can subscribe to it.
6. Installed Angular Material to display table data.
7. Pagination and table rows are implemented by material library.
8. NOT IMPLEMENTED: Update url params to get next page of data and amount of rows to display.
9. Implemented search functionality by filtering the data in the table.
10. Implemented client detail view with CSS.
11. Created unit tests for the internal-clients service and the internal-clients component.

## Time Limit

The project was completed within a maximum time limit of 4 hours. It took another ~2 hours to read angular docs and remember main concepts.
