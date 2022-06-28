const postSub = async (sub) => {
  const url = "https://corebiz-test.herokuapp.com/api/v1/newsletter";

  const options = {
    method: "POST",
    headers: {
      Server: "Cowboy",
      Connection: "keep-alive",
      "X-Powered-By": "Express",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json; charset=utf-8",
      "Content-Length": "34",
      Etag: 'W/"22-tobUJ5fcV6GJ7uB2D90768ngXWk"',
      Date: "Tue, 16 Jun 2020 16:05:30 GMT",
      Via: "1.1 vegur",
    },
    body: JSON.stringify( sub ),
  };

  const response = await fetch(url, options);

  const res = await response.json();
  return res;
};

export default postSub;
