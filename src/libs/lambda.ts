/* eslint-disable import/prefer-default-export */
import middy from '@middy/core';
import middyJsonBodyParser from '@middy/http-json-body-parser';

export const middyfy = (handler) => middy(handler).use(middyJsonBodyParser());
