import React, { Component } from 'react';
import SubredditSelector from '../SubredditSelector';
import CategorySelector from '../CategorySelector';

export class index extends Component {

    getSubredditPosts = (e) => {
        e.preventDefault();
        if(e.target.elements.customSubreddit.value !== "" && e.target.elements.category.value !== "Select a Category") {
            this.props.getSubredditPosts(e, e.target.elements.customSubreddit.value, e.target.elements.category.value);
        } else {
            if(e.target.elements.subreddit.value !== "Select a Subreddit" && e.target.elements.category.value !== "Select a Category"){
                this.props.getSubredditPosts(e, e.target.elements.subreddit.value, e.target.elements.category.value);
            }
        }
    }

    render() {
        return (
            <form className="flex flex-wrap justify-around py-4" onSubmit={ this.getSubredditPosts }>
                <SubredditSelector />
                <p className="py-4 my-4">Or</p>
                <input className="lg:w-1/5 block appearance-none bg-white border border-gray-500 hover:border-gray-600 px-4 py-2 my-4 mx-2 rounded focus:outline-none focus-shadow-outline" type="text" placeholder="Enter a subreddit e.g. dankmemes" name="customSubreddit"></input>
                <CategorySelector />
                <button className="lg:w-1/5 bg-transparent hover:bg-gray-600 text-gray-700 font-semibold hover:text-white py-2 px-4 my-4 mx-2 border border-gray-500 hover:border-transparent rounded focus:outline-none focus-shadow-outline">Get Posts</button>
            </form>
        );
    }
}

export default index
