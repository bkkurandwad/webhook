# NLP HRE - Backend

## Overview
NLP HRE Backend is the core of the HR automation system. It handles the processing of work updates from HR, manages communication with Dialogflow for chat interactions, sends real-time notifications via Firebase Cloud Messaging (FCM), and integrates Google Text-to-Speech (TTS) for automated voice calls to employees.

This repository contains the backend code responsible for:
- Processing HR's work updates.
- Sending push notifications to employees about work updates.
- Interfacing with Dialogflow to fetch and send work updates.
- Converting text to speech (using Google TTS) for voice call simulations.

## Features
- **HR Work Update Management**: HR can update work details which are saved in the database and sent to employees.
- **Dialogflow Integration**: Webhooks are set up to interact with Dialogflow for HR chat-based updates.
- **Real-Time Notifications**: Sends notifications to employees via Firebase Cloud Messaging (FCM) whenever a work update is made.
- **Automated Voice Calls**: Uses Google Text-to-Speech (TTS) to convert work updates into speech and send it as an audio file to the employee’s mobile app.
- **Call Interaction Tracking**: Tracks employee interaction (answering or cutting the call) and updates the database accordingly.

## Architecture
- **Backend Server**: This server is responsible for managing work updates, interacting with Dialogflow, and communicating with Firebase and Google TTS APIs.
- **Dialogflow**: Handles the processing of HR's work updates through a conversational interface. It uses webhooks to send data to the backend.
- **Firebase Cloud Messaging (FCM)**: Used to send push notifications to employees when there’s a new work update.
- **Google Text-to-Speech (TTS)**: Converts text-based work updates into speech (MP3) and sends them to the employee’s mobile app.
- **Database**: Stores work updates and tracks employee interactions with notifications and calls.

### Flow of Operations:
1. **HR Updates Work**: HR updates the work through Dialogflow chat, which is received by the server via webhooks.
2. **Work Update Processing**: The server saves the work details to the database and sends an FCM notification to the employee.
3. **Automated Call**: The server triggers a call via Google TTS, converting the work update into a speech file (MP3).
4. **Employee Call Interaction**: The employee receives the call on their device. If they answer or cut the call, the app communicates this back to the server, which updates the status in the database.

## Setup

### Frontend Repo
```bash
   git clone https://github.com/bkkurandwad/DialogueFlow.git
```

### Prerequisites
- Node.js and npm installed.
- Firebase project for FCM integration.
- Google Cloud account for Google TTS integration.
- MongoDB or any other database for storing work updates.
- Dialogflow account to handle HR work updates.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bkkurandwad/webhook.git
   ```
