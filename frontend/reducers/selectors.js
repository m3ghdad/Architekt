export const asArray = ({ stories }) => (
  Object.keys(stories).map(key => stories[key])
);

// export const selectStory = ({ stories }, id) => {
//    const story = stories[id] || {};
//    return story
// };
