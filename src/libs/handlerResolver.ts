/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
export const handlerPath = (context: string) => {
  return `${context.split(process.cwd())[1].substring(1).replace(/\\/g, '/')}`;
};
