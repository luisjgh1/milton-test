export const getStories = () =>
  fetch("http://localhost:3001/story", {
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
