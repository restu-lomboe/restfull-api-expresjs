# CRUD RESTful API with Express.js

This is a basic CRUD (Create, Read, Update, Delete) RESTful API built using Express.js, a popular web framework for Node.js.

## Features

- Create new records
- Read (get) existing records
- Update existing records
- Delete records

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (version 20 or higher)
- [npm](https://www.npmjs.com/get-npm) (Node Package Manager)
- [sequalize CLI](https://sequelize.org/docs/v6/other-topics/migrations/) (Package For Migration Database)

## Getting Started

### Installation

#### Clone the repository:

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```

#### Install Package:

```bash
npm install
```

#### Make ENV:

```bash
 make new .env and copy file from .env.example
```

#### Setup DB:

```bash
 DB_USER=
 DB_PASSWORD=
 DB_NAME=
 DB_HOST=
 DB_PORT=
```

#### Run migrations:

```bash
 npx sequelize-cli db:migrate
```

#### Import collection postman

#### Run Project:

```bash
 npm run dev
```

#### Video Tutorial

For a detailed walkthrough of this project, check out the [YouTube video.](https://www.youtube.com/playlist?list=PL6mr4X-vI_mJs-zzh3FhV_wbRGhQxCqTS)
