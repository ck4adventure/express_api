import 'dotenv/config'
import { app } from './app.js'
import { InitDB, ShutdownDB } from './db/db.js'
const port = 3000

InitDB()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

process.on('SIGTERM', () => {
    console.info('SIGTERM received - shutting down.');
    ShutdownDB();
    process.exit(0);
});