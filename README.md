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


5. Run the Prisma commands to generate the Prisma client and migrate the database

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

6. Run the development server

   ```sh
   npm run dev

   or
   yarn dev

   or
   pnpm dev
   ```
