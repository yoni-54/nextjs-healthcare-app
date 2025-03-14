Healthcare Platform

A modern healthcare management platform built with Next.js, TypeScript, ShadCN UI, and Appwrite. This platform helps healthcare providers manage appointments, patient records, and doctors efficiently.

🚀 Features

Patient Management: Add, edit, and track patient details.

Appointment Management: Assign doctors and manage schedules.

Appointments: Schedule, update, and cancel appointments.

Authentication: Secure login and access control using Appwrite.

Dashboard: Interactive dashboard with statistics.

Notifications: Get real-time updates for appointments including an sms message.

Responsive UI: Designed with Tailwind CSS and ShadCN components.

Send SMS on Appointment Confirmation: Patients receive SMS notifications to confirm their appointment details.

🛠️ Tech Stack

Frontend: Next.js, React, TypeScript, Tailwind CSS, ShadCN UI

Backend: Appwrite (Database, Authentication, Storage), Twilio

📦 Installation

1. Clone the Repository

git clone https://github.com/your-username/healthcare-platform.git
cd healthcare-platform

2. Install Dependencies

npm install  # or yarn install

3. Configure Environment Variables

Create a .env.local file and add the following:

#APPWRITE
NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
PROJECT_ID= placeholder

API_KEY= placeholder

DATABASE_ID= placeholder

PATIENT_COLLECTION_ID= plaveholder

APPOINTMENT_COLLECTION_ID= placeholder

NEXT_PUBLIC_BUCKET_ID= placeholder

NEXT_PUBLIC_ADMIN_PASSKEY=

Enter your real Appwrite credentials in place of the placeholder data. By creating an account on the Appwrite website, you can get these credentials.
4. Run the Development Server

npm run dev  # or yarn dev

The app should now be running at http://localhost:3000
