const fs = require('fs');
const { App, createAppAuth } = require('@octokit/auth-app');

const appId = YOUR_APP_ID;
const privateKeyPath = 'path/to/your/private-key.pem'; // Replace with the actual path to your private key file

// Read private key from file
const privateKey = fs.readFileSync(privateKeyPath, 'utf8');

// Create an authenticated app instance
const app = new App({ id: appId, privateKey });

// Create authentication for installation
const auth = createAppAuth({ id: appId, privateKey });

// Obtain an installation access token (example: for a specific repository with installation ID)
const installationId = INSTALLATION_ID;
const { token } = await auth({ type: 'installation', installationId });

console.log('Installation access token:', token);
