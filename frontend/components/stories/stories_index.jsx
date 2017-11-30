// import React from 'react';
// import StoryIndexItem from './stories_index_item';
//
// class StoriesIndex extends React.Component {
//   componentDidMount() {
//     this.props.fetchStories();
//   }
//
//   render () {
//     const { stories } = this.props;
//     const storyItems = stories.sort().reverse().map(story => (
//       <StoryIndexItem key={ story.id } story={ story } author = { story.author }/>)
//     );
//
//     return (
//       <div className="">
//         <div className="">
//           <section className="stories-index">
//             <ul>
//               { storyItems }
//             </ul>
//           </section>
//         </div>
//       </div>
//     );
//   }
// }
// export default StoriesIndex;

import React from 'react';
import StoryIndexItem from './stories_index_item';

const StoriesIndex = ({ stories }) => (
  <div>
    <h1>Stories: </h1>
    {stories.map(story => (
      <StoryIndexItem
        story={story}
        key={story.id}
      />
    ))}
  </div>
);

export default StoriesIndex;
