import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';

const DEV_URL = 'http://localhost:3000';

if (process.env.NODE_ENV === 'development') {
  awsmobile.oauth.redirectSignIn = DEV_URL;
  awsmobile.oauth.redirectSignOut = DEV_URL;
}

const updatedAwsConfig = {
  ...awsmobile,
  ssr: true,
};

Amplify.configure(updatedAwsConfig);
