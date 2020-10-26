interface IAttribute {
  path: string;
  value: string;
}

interface IServerCert {
  subject: {
    CN: string;
  };
  issuer: {
    C: string;
    O: string;
    CN: string;
  };
  subjectaltname: string;
  infoAccess: {
    'OCSP - URI': string[];
    'CA Issuers - URI': string[];
  };
  modulus: string;
  bits: string;
  pubkey: Buffer;
  valid_from: string;
  valid_to: string;
  fingerprint: string;
  fingerprint256: string;
  ext_key_usage: string;
  serialNumber: string;
  raw: Buffer;
  pemEncoded: string;
}