export const authConfig = {
  baseUri: 'https://open-ic.epic.com/argonaut/api/FHIR/Argonaut/'
};


export class SmartConfig {
  public clientId? = '';

  public redirectUri? = '';



  constructor(json?: Partial<SmartConfig>) {
    if (json) {
      Object.assign(this, json);
    }
  }
}
