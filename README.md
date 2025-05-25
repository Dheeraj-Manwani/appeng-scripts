AppEng Data Fix 
=======================

An Express tool to manage and execute data fix scripts for the AppEng team.
Each fix is stored in an iteration-specific folder and consists of:
  - A JavaScript data fix file (script.js)
  - A manual SQL script (queries.sql)

------------------------------------------------------------
PROJECT STRUCTURE
------------------------------------------------------------

your-project/
├── src/
│   ├── db/                 # Knex DB connection instances
│   ├── iteration/          # Versioned data fix folders
│   │   ├── ITE90/          # For ITE 90
│   │   │   ├── script.js   # JS data fix logic
│   │   │   └── queries.sql # Manual SQL changes
│   │   ├── ITE91/          # For ITE 91
│   │   │   ├── ...
│   ├── utils/              # (Optional) Helpers, loggers
│   ├── server.js           # Express server setup
│   └── index.js            # App entry point
├── .env                    # Environment variables
├── package.json
└── README.txt

------------------------------------------------------------
SETUP INSTRUCTIONS
------------------------------------------------------------

1. Install dependencies:
   yarn install

2. Configure environment variables:
   Create a `.env` file with the following content:



3. Run the server:
   yarn start



------------------------------------------------------------
ADDING A NEW ITERATION
------------------------------------------------------------

1. Create a folder: src/iteration/ITE91/ (for iteration 91)

2. Add script.js with the following structure:

   module.exports = {
     async dataFix() {
       const db = require('../../db/knexDb1');

       // Your fix logic here
       const updated = await db('users')
         .whereNull('email')
         .update({ email: 'default@example.com' });

       console.log(`Updated ${updated} records`);
     }
   };

3. Add queries.sql for any manual DB changes:

   -- queries.sql
   ALTER TABLE users ADD COLUMN updated_by TEXT;


------------------------------------------------------------
CONTACT
------------------------------------------------------------

For questions or issues, contact the AppEng team.
