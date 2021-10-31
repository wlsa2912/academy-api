/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { handlerPath } from '@libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'wallet/{uuid}',
      },
    },
  ],
};
