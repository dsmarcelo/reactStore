export default function fetchData(
  url: RequestInfo | URL,
  method = 'GET',
  body?: object
) {
  const headers = {
    'Content-Type': 'application/json',
  };

  return fetch(`${process.env.NEXTAUTH_URL}${url}`, {
    method,
    headers,
    body: JSON.stringify(body),
  });
}
