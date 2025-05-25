const { default: chalk } = require('chalk');
const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Script server is running fine ✅✅✅');
});



app.listen(PORT, () => {
  console.log(chalk.blueBright(`Script Server started on http://localhost:${PORT}`));
});
