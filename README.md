# Complaint Management System

This is a web-based complaint management system that allows users to submit and view complaints.

## Features

- Submit a complaint with details like issue type, priority, description, and attachments.
- View the status of a submitted complaint using a ticket ID.
- Session management with a 10-minute timeout for the complaint form.
- Responsive design for use on different devices.
- QR code integration to pre-fill the complaint form.

## Modules

- **Complaint Form:** Handles the submission of new complaints.
- **View Complaint:** Allows users to view the details of a complaint.
- **Session Expired:** Informs users that their session has timed out.

## Tech Stack

- **Frontend:** React, Material-UI, Tailwind CSS
- **HTTP Client:** Axios
- **Form Management:** React Hook Form
- **Routing:** React Router
- **Build Tool:** Vite

## New Module: View Complaint

The "View Complaint" module allows users to check the status of their submitted complaints. By entering a valid ticket ID, users can view the details of their complaint, including the issue type, priority, description, and current status.

## New Module: Complaint Form (Material-UI)

The "Complaint Form" module, built with Material-UI, allows users to submit new complaints. It includes the following features:

- **Dynamic Form Fields:** Users can select an issue type, set a priority, provide a detailed description, and optionally include a phone number.
- **File Uploads:** Multiple files can be attached to the complaint.
- **Session Management:** The form has a 10-minute session timeout for security.
- **QR Code Integration:** The form can be pre-filled with data from a QR code.
- **API Integration:** It fetches issue categories and submits the complaint data to the backend.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/GokulOfStarDust/ComplaintForm-for-Hospital-Complaint-Management-System-
   ```
2. Navigate to the project directory:
   ```bash
   cd complaint-form
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:5173` (or the port specified in the output).

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Lints the code using ESLint.
- `npm run preview`: Starts a local server to preview the production build.