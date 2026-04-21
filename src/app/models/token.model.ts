// src/app/models/token.model.ts
export interface TokenJwt {
  acecessToken: string;
  tokenType: string;
  expiresIn: number;
}
