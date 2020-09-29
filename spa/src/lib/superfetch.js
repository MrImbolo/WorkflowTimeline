export async function superfetch(url, method, object) {
  let request = {
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  };

  if (method) request.method = method;
  else request.method = "GET";

  if (object) request.body = JSON.stringify(object);

  const RESPONSE = await fetch(url, request);

  if (RESPONSE.ok) {
    const CONTENT_TYPE = RESPONSE.headers.get("Content-Type");
    if (CONTENT_TYPE.includes("application/json")) {
      try {
        return await RESPONSE.json();
      } catch (error) {
        return {
          status: "error",
          error: `Json parse error: ${error}`,
        };
      }
    } else if (CONTENT_TYPE.includes("text/html")) {
      try {
        return await RESPONSE.json();
      } catch (error) {
        return {
          status: "error",
          error: `Text read error: ${error}`,
        };
      }
    } else {
      return {
        status: "error",
        error: `No handler specified for MIME ${CONTENT_TYPE}`,
      };
    }
  } else {
    return {
      status: "error",
      response: RESPONSE,
    };
  }
}
