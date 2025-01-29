// Load environment variables
require('dotenv').config();

// Retrieve values from .env
const config = {
  apiKey: process.env.API_KEY,
  serverSecret: process.env.SERVER_SECRET,
  isKalvian: process.env.IS_KALVIAN === 'true', // Convert to boolean
};

// Export the config object for use in other files
module.exports = config;

// Log the values (for testing purposes)
console.log(config);
