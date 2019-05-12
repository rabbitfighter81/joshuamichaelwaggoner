const fs = require('fs');
const yargs = require('yargs');

// This is good for local dev environments, when it's better to
// store a projects environment variables in a .gitignore'd file
require('dotenv').config();

// Would be passed to script like this:
// `ts-node set-env.ts --environment=dev`
// we get it from yargs's argv object
const environment = yargs.argv.environment;
const isProd = environment === 'prod';

const targetPath = `./src/environments/environment.${ environment }.ts`;
const envConfigFile = `
export const environment = {
  production: ${ isProd },
  discogsConsumerKey: '${ process.env.DISCOGS_CONSUMER_KEY }',
  discogsConsumerSecret: '${ process.env.DISCOGS_CONSUMER_SECRET }',
  discogsConsumerUsername: '${ process.env.DISCOGS_CONSUMER_USERNAME }'
};
`;
fs.writeFile(targetPath, envConfigFile, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`Output generated at ${ targetPath }`);
});
