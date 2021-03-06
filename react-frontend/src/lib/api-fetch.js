const domain = "https://city-hunt-267820.appspot.com";
const local = "http://127.0.0.1:5000";
const base = `${local}/api`;

const apiFetch = (url, { method = "GET", useApi = true, json = true, body }) =>
  fetch(`${useApi ? base : ""}${url}`, {
    method,
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *client
    ...(body && {body: JSON.stringify(body)})
  }).then(response => (json ? response.json() : response));

export default apiFetch;
