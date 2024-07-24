export async function requestApi(url, method = "GET", bodyData = {}) {
  const hasBodyData = Object.keys(bodyData).length > 0;
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    ...(hasBodyData && { body: JSON.stringify(bodyData) }),
  };

  const response = await fetch(url, options);
  return response.json();
}
