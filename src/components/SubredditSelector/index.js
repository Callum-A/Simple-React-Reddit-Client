import React, { Component } from 'react'
import SUBREDDITS from '../../helpers/Subreddits';

export class index extends Component {
    render() {
        return (
            <React.Fragment>
                <select defaultValue="Select a Subreddit" className="lg:w-1/4 block appearance-none bg-white border border-gray-500 hover:border-gray-600 px-4 py-2 my-4 mx-2 rounded focus:outline-none focus-shadow-outline" name="subreddit">
                    <option value="Select a Subreddit" disabled>Select a Subreddit</option>
                    {SUBREDDITS.map((subreddit, index) => {
                        return <option key={ index } value={ subreddit }>{ subreddit }</option>
                    })}
                </select>
            </React.Fragment>
        );
    }
}

export default index