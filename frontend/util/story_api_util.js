export const fetchStories = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/stories'
  })
}
