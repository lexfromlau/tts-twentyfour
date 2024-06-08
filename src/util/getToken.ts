export const getToken = async (
  issueTokenEndpoint: string,
  subsriptionKey: string
) => {
  const response = await fetch(issueTokenEndpoint, {
    method: 'POST',
    headers: {
      'Ocp-Apim-Subscription-Key': subsriptionKey,
      'Content-Length': '0',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  if (response.ok) {
    const token = await response.text();
    return token;
  } else {
    console.error(
      'Failed to fetch the token:',
      response.status,
      response.statusText
    );
    throw new Error('Failed to fetch the token');
  }
};
