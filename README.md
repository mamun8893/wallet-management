# Personal Wallet Management App

## Introduction

Welcome to the Personal Wallet Management App! This application empowers users to manage their personal finances by tracking the count of various currency note denominations and calculating the total monetary balance.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Getting Started](#getting-started)
   - [Clone the Repository](#clone-the-repository)
   - [Install Dependencies](#install-dependencies)
   - [Run the Application](#run-the-application)
3. [Configuration](#configuration)
   - [Custom Denominations](#custom-denominations)
4. [Deployment](#deployment)

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 18.x or later)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Getting Started

### Clone the Repository

```bash
git clone <repository-url>
cd personal-wallet-management-app
```

### Install Dependencies

```bash
npm install
```

### Run the Application

```bash
npm run dev
```

## Configuration

### Custom Denominations

To tailor the denominations used in the application, follow these steps:

1. Open the app/page.js file.
2. Locate the defaultDenominations array.

```bash
const defaultDenominations = [1, 5, 10, 20];
```

Modify the array to include your preferred denominations.

```bash
const defaultDenominations = [1, 5, 10, 20, 50];
```

## Deployment

To deploy the application to a production environment, you can use the following commands:

```bash
npm run build
npm start
```
