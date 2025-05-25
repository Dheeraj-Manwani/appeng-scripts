# AppEng Scripts

An Express tool to manage and execute data fix scripts for the AppEng team.  
Each iteration consists of:
- `script.js` (JavaScript data fix logic)
- `queries.sql` (Manual SQL changes)

## Project Structure


```
appeng-scripts/
├── src/
│ ├── db/ # Knex DB connection instances
│ ├── iterations/ # Versioned data fix folders
│ │ ├── ITE90/ # For ITE 90
│ │ │ ├── script.js # JS data fix logic
│ │ │ └── queries.sql # Manual SQL changes
│ │ ├── ITE91/ # For ITE 91
│ │ │ ├── ...
│ ├── utils/ # Helpers
│ └── index.js # App Entry point
├── .env # Environment variables (do not commit)
├── .example.env # Environment variables (only keys)
├── package.json
└── README.md
```

## Run Locally

- Clone the project
  ```bash
    git clone -b master https://github.com/Dheeraj-Manwani/appeng-scripts.git
  ```

- Go to the project directory
  ```bash
    cd appeng-scripts
  ```

- Install dependencies
  ```bash
    yarn
  ```

- Copy contents from `.env.example` and paste it in `.env` in the root folder.

- Add values for environment variables in the `.env` file.

- Start the server
  ```bash
    yarn start
  ```


## Usage/Examples

- For adding your script/queries

  - Add a new iteration
      ```src/iteration/ITE91```
  - Add js script in script.js :
    ```bash
    module.exports = {
      async dataFix() {
        const db = require('../../db/knex');
        
        const results = await db('table')
          .where(condition)
          .update(changes);
        
        console.log(`Updated ${results} records`);
      }
    };
    ```
  - Add SQL queries in queries.sql file:
    ```
    ALTER TABLE users 
    ADD COLUMN new_field VARCHAR(255);

    ```

  ### For more info contact the Appeng Team.