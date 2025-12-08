const { join } = require('path');
const fs = require('fs');

const entry = join(__dirname, '.next/standalone/server.js');

// Passenger pune portul în process.env.PORT
process.env.NODE_ENV = 'production';
if (!fs.existsSync(entry)) {
  console.error('Missing standalone entry:', entry);
  process.exit(1);
}
require(entry);
