/* eslint-disable import/no-unresolved */
import type { AWS } from '@serverless/typescript';

import accountLogin from '@functions/accountLogin';
import accountRegister from '@functions/accountRegister';
import getWalletBalance from '@functions/getWalletBalance';
import addCreditsToStudent from '@functions/addCreditsToStudent';
import refundCreditsBought from '@functions/refundCreditsBought';
import getAllTransactions from '@functions/getAllTransactions';
import getUserTransactions from '@functions/getUserTransactions';
import createAClass from '@functions/createAClass';
import getAllClasses from '@functions/getAllClasses';
import deleteAClass from '@functions/deleteAClass';
import editAClass from '@functions/editAClass';
import createAPlan from '@functions/createAPlan';
import deleteAPlan from '@functions/deleteAPlan';
import getAllGroups from '@functions/getAllGroups';
import editAPlan from '@functions/editAPlan';

const serverlessConfiguration: AWS = {
  service: 'athlete-service',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },
  plugins: ['serverless-webpack', 'serverless-offline'],
  provider: {
    region: 'sa-east-1',
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: {
    accountRegister,
    accountLogin,
    getWalletBalance,
    addCreditsToStudent,
    refundCreditsBought,
    getAllTransactions,
    getUserTransactions,
    createAClass,
    getAllClasses,
    deleteAClass,
    editAClass,
    createAPlan,
    deleteAPlan,
    getAllGroups,
    editAPlan,
  },
};

module.exports = serverlessConfiguration;
