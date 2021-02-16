import Amplify from 'aws-amplify';
import config from './aws-exports';

const updatedAwsConfig = {
  ...config,
  ssr: true,
};

Amplify.configure(updatedAwsConfig);
