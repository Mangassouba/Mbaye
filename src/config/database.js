// const { MongoClient } = require("mongodb");

// const url = "mongodb://localhost:27017";
// const dbName = "abc_survey_app";

// let db = null;

// async function connectDB() {
//   if (db) {
//     return db;
//   }

//   const client = new MongoClient(url);
//   try {
//     await client.connect();
//     console.log("Connected to MongoDB");
//     db = client.db(dbName);
//     return db;
//   } catch (error) {
//     console.error("Erreur lors de la connexion à la base de données:", error);
//     throw error;
//   }
// }

// module.exports = { connectDB };


const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "abc_survey_appb";

let client = null;
let db = null;

async function connectDB() {
  if (db) {
    return db;
  }

  client = new MongoClient(url);
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    db = client.db(dbName);
    return db;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
}

async function disconnectDB() {
  if (client) {
    try {
      await client.close();
      console.log("Disconnected from MongoDB");
      client = null;
      db = null;
    } catch (error) {
      console.error("Error disconnecting from the database:", error);
      throw error;
    }
  }
}

module.exports = { connectDB, disconnectDB };

