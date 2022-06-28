const postSub = async (sub) => {
  const url = "https://corebiz-test.herokuapp.com/api/v1/newsletter";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(sub),
  });

  const res = await response.json();
  return res;
};

export default postSub;
