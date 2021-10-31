/* eslint-disable no-useless-escape */
/* eslint-disable import/prefer-default-export */
export function validateCPF(strCPF) {
  if (strCPF.match(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)) {
    return true;
  }
  return false;
}
