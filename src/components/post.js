import React, { Component } from 'react'
import Proptypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postAction';


 class Posts extends Component {
    componentWillMount(){
        this.props.fetchPosts();
    } 
    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);
        }
    }     
    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
            <h5> {post.title}</h5>
            <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <h2>Post</h2>
                {postItems}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: Proptypes.func.isRequired,
    posts: Proptypes.array.isRequired,
    newPost: Proptypes.object
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps,{fetchPosts})(Posts);