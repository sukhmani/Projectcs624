const fs = require('fs');
const path = require('path');

const domain = process.env.CODESPACE_NAME
  ? `https://${process.env.CODESPACE_NAME}-5000.app.github.dev`
  : 'http://localhost:5000';

const backendApi = `${domain}/api`;

const configContent = `const config = {
  API_URL: "${backendApi}"
};

export default config;
`;

fs.writeFileSync(path.join(__dirname, 'config.js'), configContent, 'utf8');
console.log('config.js has been generated with:');
console.log(configContent);
