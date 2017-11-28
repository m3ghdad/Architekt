import React from 'react';
import StoryIndexItem from './stories_index_item';

class StoriesIndex extends React.Component {
  componentDidMount() {
    this.props.fetchStories();
  }

  render () {
    const { stories } = this.props;
    const storyItems = stories.sort().reverse().map(story => (
      <StoryIndexItem key={ story.id } story={ story } author = { story.author }/>)
    );

    return (
      <div className="">
        <div className="">
          <section className="stories-index">
            <ul>
              { storyItems }
            </ul>
          </section>
        </div>
      </div>
    );
  }
}
export default StoriesIndex;
