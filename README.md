# AppEng Data Fix

An Express tool to manage and execute data fix scripts for the AppEng team.  
Each fix consists of:
- `script.js` (JavaScript data fix logic)
- `queries.sql` (Manual SQL changes)

## Project Structure
your-project/
├── src/
│ ├── db/ # Knex DB connections
│ ├── iteration/ # Versioned fixes
│ │ ├── ITE90/ # Example iteration
│ │ │ ├── script.js
│ │ │ └── queries.sql
│ │ └── ITE91/ # Next iteration
│ ├── utils/ # Helper functions
│ ├── server.js # Express setup
│ └── index.js # Main entry
├── .env # Configuration
├── package.json
└── README.md


## Setup Instructions

1. Install dependencies:
```bash
yarn install
Create .env file:

env
DB_HOST=your_host
DB_USER=your_user
DB_PASS=your_password
Run the server:

bash
yarn start
Adding New Iteration
Create folder structure:

bash
mkdir -p src/iteration/ITE91
Add script.js template:

javascript
module.exports = {
  async dataFix() {
    const db = require('../../db/knexDb1');
    
    const results = await db('table')
      .where(condition)
      .update(changes);
    
    console.log(`Updated ${results} records`);
  }
};
Add queries.sql template:

sql
-- ITE91 data fixes
ALTER TABLE users ADD COLUMN new_field VARCHAR(255);

UPDATE accounts 
SET status = 'active' 
WHERE created_at > '2023-01-01';
Contact

For support contact:
📧 Appeng Team