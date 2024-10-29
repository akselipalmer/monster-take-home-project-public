# Monster Take Home Project

This is Akseli Palmer's take home project for Monster Reservations Group.

Here is the [link](https://monster-take-home-projec-4b069.web.app/) to the project.

# Tools Used

- [Angular](https://angular.dev/) Framework
- [Firebase](https://firebase.google.com/) Hosting and Authentication
- [Tailwind CSS](https://tailwindcss.com/) Styling
- [Axios](https://axios-http.com/) Making HTTP calls in Node.js

# Checklist

## Setup & Authentication

- [x] make an Angular web app deployed to Firebase
- [x] include some flavor of authentication. Dealer's choice - user/pass, google, encrypted link, something else, your call.
- [x] It should deny access to the form unless authentication is successful.
- [x] Delivery should come with working credentials if applicable.

## Form & UI

- [x] Once authenticated, the user should be taken to a form where they enter flight details.
- [x] Upon submission, the app should send a post request with the below specs and inform the user of their success (or failure).
- [x] The UI should inform the user whether their request was successful.
- [x] Any additions you want to make here are acceptable but not required.

## Submitting the form

- [x] The app should be placed in a github repo.
- [x] Request URL: "removed for security purposes"
- [x] Request header "token" should contain the value
- [x] Request header "candidate" should contain your name.
- [x] Request payload should follow the below interface. interface FlightInfoPayload { airline: string arrivalDate: string arrivalTime: string flightNumber: string numOfGuests: number comments?: string }
- [x] Comments are not required, but should be passed along if entered.
- [x] Missing properties will cause the request to fail.
- [x] Your arrivalDate can be in any format convertible to a Date object.
