import jwt from 'jsonwebtoken';

export default function accountSign(data : any) {
  return jwt.sign(data, 'athlete_payload_token_@vap');
}
