# Acronym API

## Description

This is a simple API that allows you to create, read, update and delete acronyms.

### Installation

2. Install the dependencies

   ```sh
    npm install

   or
   yarn

   or
   pnpm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```.env
   DATABASE_URL="YOUR_DATABASE_URL" # Note: This uses mongodb as the database, however you can modify the code to use any database of your choice
   ```

4. Run the Prisma commands to generate the Prisma client and migrate the database

   <br/>
   if you are using mongodb run the following command

   ```sh
   pnpm generate # use npm or yarn if you prefer
   ```

   <br/>
   if you are using postgresql run the following command

   ```sh
   pnpm migrate # use npm or yarn if you prefer
   ```

5. Run the development server

   ```sh
   npm run dev

   or
   yarn dev

   or
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) with your API client testing tool to see the result. Alternatively, you can use the [Live Link](https://vast-teal-iguana-sari.cyclic.app) to test the API.

### Usage

#### Create an acronym

`POST: /api/acronym`

```json
// Requests
{
	"acronym": "API",
	"definition": "Application Programming Interface"
}

// Response
{
   "id": "652bd508a99c5753e6dd94ec",
   "acronym": "API",
   "definition": "Application Programming Interface",
   "createdAt": "2023-10-15T12:03:20.914Z",
   "updatedAt": "2023-10-15T12:03:20.914Z"
}
```

#### Get all acronyms

`GET: /api/acronym`

```json
[
	{
		"id": "652bd508a99c5753e6dd94ec",
		"acronym": "API",
		"definition": "Application Programming Interface",
		"createdAt": "2023-10-15T12:03:20.914Z",
		"updatedAt": "2023-10-15T12:03:20.914Z"
	},
	{
		"id": "652bd508a99c5753e6dd94ec",
		"acronym": "APIs",
		"definition": "Application Programming Interfaces",
		"createdAt": "2023-10-15T12:03:20.914Z",
		"updatedAt": "2023-10-15T12:03:20.914Z"
	}
]
```

#### Get an acronym by id

`GET: /api/acronym/:id`

```json
// Response
{
	"id": "652bd508a99c5753e6dd94ec",
	"acronym": "API",
	"definition": "Application Programming Interface",
	"createdAt": "2023-10-15T12:03:20.914Z",
	"updatedAt": "2023-10-15T12:03:20.914Z"
}
```

#### Update an acronym

`PATCH: /api/acronym/:id`

```json
// Response
{
	"id": "652bd508a99c5753e6dd94ec",
	"acronym": "API",
	"definition": "Application Programming Interface",
	"createdAt": "2023-10-15T12:03:20.914Z",
	"updatedAt": "2023-10-15T12:03:20.914Z"
}
```

#### Delete an acronym

`DELETE: /api/acronym/:id`

```json
// Response
{
	"id": "652bd508a99c5753e6dd94ec",
	"acronym": "API",
	"definition": "Application Programming Interface",
	"createdAt": "2023-10-15T12:03:20.914Z",
	"updatedAt": "2023-10-15T12:03:20.914Z"
}
```

#### Pagination

`GET: /api/acronym?page=1&limit=10`

```json
// Response
{
	"data": [],
	"meta": {
		"totalCoun": 0,
		"totalPages": 0,
		"page": 1,
		"limit": 10,
		"orderBy": "desc"
	}
}
```

## Author

- Website - [amka.dev](https://aminamka.com)
- GitHub - [itzAmka](https://github.com/itzAmka)
- X (Twitter) - [@itzAmka](https://twitter.com/itzAmka)
- Frontend Mentor - [@itzAmka](https://www.frontendmentor.io/profile/AmkaE)
