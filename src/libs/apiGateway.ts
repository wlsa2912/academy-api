/* eslint-disable import/extensions */
/* eslint-disable max-len */
import type { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from 'aws-lambda';
import type { FromSchema } from 'json-schema-to-ts';

type ValidatedAPIGatewayProxyEvent<S> = Omit<APIGatewayProxyEvent, 'body'> & { body: FromSchema<S> }
export type ValidatedEventAPIGatewayProxyEvent<S> = Handler<ValidatedAPIGatewayProxyEvent<S>, APIGatewayProxyResult>

export const Response200 = (response: Record<string, unknown>) => ({
  statusCode: 200,
  body: JSON.stringify(response),
});

export const Response400 = (response: Record<string, unknown>) => ({
  statusCode: 400,
  body: JSON.stringify(response),
});

export const Response404 = (response: Record<string, unknown>) => ({
  statusCode: 400,
  body: JSON.stringify(response),
});

export const Response422 = (response: Record<string, unknown>) => ({
  statusCode: 400,
  body: JSON.stringify(response),
});
