# Basic NodeJS Server for EC2

Small example Node.js server intended for quick deployment to an EC2 instance.

## Contents
- `app.js` — main server file
- `package.json` — project metadata and scripts

## Prerequisites
- Node.js (16+ recommended)

## Install
```bash
npm install
```

## Run locally
```bash
node app.js
```

## Deploy notes
1. Copy repository to your EC2 instance (git clone or scp).
2. Run `npm install` on the instance.
3. Start the app with `node app.js` or use a process manager like `pm2` or `systemd` for production.

## License
This project has no license specified.
