const parseData = (data) => {
  const parsedData = { ...data };
  const storageItems = window.localStorage.getItem("deletedStories");
  const deletedStories = (storageItems && JSON.parse(storageItems)) || [];
  const stories = parsedData.stories
    .map((story) => {
      const parsedData = { ...story };
      parsedData.title = parsedData.title || parsedData.story_title;
      parsedData.url = parsedData.url || parsedData.story_url;
      parsedData.id = parsedData.story_id;
      parsedData.date = parsedData.created_at;

      return parsedData;
    })
    .filter((story) => {
      return !deletedStories.includes(story.id);
    });

  return stories;
};

export default parseData;
