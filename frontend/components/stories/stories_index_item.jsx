import React from 'react';
import { Link } from 'react-router';

class StoryIndexItem extends React.Component {
  render(){
    const { story } = this.props;
    const preview = this.createPreview(story);
     return (
      <li className="story-index-item">
        <section className="index-item">
          <Link to={ `/stories/${ story.id }`}>
            <p className="story-index-title">{ story.title }</p>
          </Link>
          <Link to={ `/users/${ story.author.id }`}>
            <p className="story-index-author-info">by {story.author.email} </p>
          </Link>
          <Link to={ `/stories/${ story.id }`}>
            <div className="story-index-body-preview"> { preview }...</div>
        </Link>
        </section>
      </li>
    );
  }

  createPreview(story) {
    let wrapper = document.createElement("div");
    wrapper.innerHTML = story.body;
    return wrapper.textContent;
  }

}

export default StoryIndexItem;
