import sqlite3 from 'sqlite3'
import fs from 'fs';


const sqlFilePath = 'Chinook_Sqlite.sql';
const databaseName = 'Chinook.db';
const db = new sqlite3.Database(databaseName);
const sqlScript = fs.readFileSync(sqlFilePath, 'utf8');

db.exec(sqlScript, function(err) {
  if (err) {
    console.error('Error executing SQL script:', err.message);
  } else {
    console.log(`SQLite database '${databaseName}' has been created and populated from '${sqlFilePath}'.`);
  }

  db.close();
});