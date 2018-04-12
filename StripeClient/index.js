const apiPrefix = 'https://api.stripe.com/v1';

const formBody = object => Object.keys(object).map(key => {
  const encodedValue = encodeURIComponent(object[key])
  const encodedKey = encodeURIComponent(key)
  return `${encodedKey}=${encodedValue}`
}).join('&');

export default class StripeClient {
  constructor(apiToken) {
    this.apiToken = apiToken;
  }

  async createCustomer(params) {
    const uri = `${apiPrefix}/customers`;
    const res = await fetch(uri, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.apiToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody(params),
    });
    const json = await res.json();
    return json;
  }

  async chargeCustomer(params) {
    const uri = `${apiPrefix}/charges`;
    const res = await fetch(uri, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.apiToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody(params),
    });
    const json = await res.json();
    return json;
  }

  async tokenizeCard({
    number,
    expMonth,
    expYear,
    cvc,
  }) {
    const uri = `${apiPrefix}/tokens`;
    const res = await fetch(uri, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.apiToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody({
        'card[number]': number,
        'card[exp_month]': expMonth,
        'card[exp_year]': expYear,
        'card[cvc]': cvc,
      }),
    });
    const json = await res.json();
    return json;
  }
}
