/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { handlerPath } from '@libs/handlerResolver';
import schema from './schema';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'credits',
        request: {
          schema: {
            'application/json': schema,
          },
        },
      },
    },
  ],
};
