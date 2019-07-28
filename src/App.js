import React, { Component } from 'react';
import PostList from './components/PostList';
import Subreddit from './components/Subreddit';
import Post from './helpers/Post';

export class App extends Component {

    state = {
        selectedSubreddit: undefined,
        posts: []
    }

    getSubredditPosts = async (e, subreddit, category) => {
        e.preventDefault();
        let data = await fetch(`https://www.reddit.com/r/${subreddit}/${category}.json`).then(response => response.json());
        console.log(data);
        let postsData = data["data"]["children"];
        console.log(postsData);
        let posts = [];
        this.setState({ selectedSubreddit: subreddit });
        for(let i = 0; i < postsData.length; i++){
            let post = new Post(postsData[i]["data"]["title"], postsData[i]["data"]["score"], postsData[i]["data"]["permalink"]);
            posts.push(post);
            this.setState({ posts: posts });
        }
    }

    render() {
        return (
            <div>
                <header className="align-middle">
                    <h1 className="lg:text-4xl text-2xl text-center font-weight-bold text-gray-900">Calledit</h1>
                    <p className="text-center">A Simple React Reddit Client - built by <a rel="noopener noreferrer" target="_blank" href="https://github.com/Callum-A" className="border-b border-dashed border-gray-700 hover:border-gray-500">Callum Anderson</a></p>
                    <p className="text-center">Code available <a rel="noopener noreferrer" target="_blank" href="https://github.com/Callum-A" className="border-b border-dashed border-gray-700 hover:border-gray-500">here</a></p>
                </header>
                <Subreddit getSubredditPosts={ this.getSubredditPosts } />
                { this.state.selectedSubreddit && <h1 className="lg:text-4xl text-2xl py-4 uppercase font-weight-bold text-gray-900 hover:text-gray-700"><a className="border-b-2 border-dashed border-gray-700 hover:border-gray-500" rel="noopener noreferrer" target="_blank" href={ "//www.reddit.com/r/" + this.state.selectedSubreddit}>r/{ this.state.selectedSubreddit }</a></h1>}
                <PostList posts={ this.state.posts } />
            </div>
        );
    }
}

export default App