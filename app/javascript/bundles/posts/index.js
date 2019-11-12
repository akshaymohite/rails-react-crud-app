// app/javascript/bundles/posts/index.js
import React from 'react';
import {Link} from 'react-router-dom';

export default class PostsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    fetch('/api/v1/posts').
      then((response) => response.json()).
      then((posts) =>  this.setState({ posts }));
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <h3>All Posts</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Is Published</th>
            </tr>
          </thead>
          <tbody>
          {
            posts.map((post) => {
              return (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>
                    <Link to={`/posts/${post.id}`}>
                      {post.title}
                    </Link>
                  </td>
                  <td>{post.description}</td>
                  <td>{post.is_published ? 'Yes' : 'No' }</td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    );
  }
}
