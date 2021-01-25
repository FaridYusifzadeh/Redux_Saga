import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../redux/actions.js';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }
  submitHandler = (e) => {
    e.preventDefault();
    const { title } = this.state;
    const newPost = {
      title,
      id: Date.now().toString(), // create random id
    };
    console.log(newPost);
    this.props.createPost(newPost);
    this.setState({ title: '' });
  };
  changeInputHandler = (e) => {
    e.persist();
    this.setState((prev) => ({
      // get all input value and add in object
      ...prev,
      ...{
        [e.target.name]: e.target.value,
      },
    }));
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className='form-group'>
          <label htmlFor='title'>Post title</label>
          <input
            type='text'
            className='form-control'
            id='title'
            value={this.state.title}
            name='title'
            onChange={this.changeInputHandler}
          />
        </div>
        <button className='btn btn-success mt-4' type='submit'>
          Crate
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  createPost,
};
export default connect(null, { createPost })(PostForm);
