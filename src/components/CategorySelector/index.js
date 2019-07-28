import React, { Component } from 'react'

export class index extends Component {
    render() {
        return (
            <React.Fragment>
                <select defaultValue="Select a Category" className="lg:w-1/5 block appearance-none bg-white border border-gray-500 hover:border-gray-600 px-4 py-2 my-4 mx-2 rounded focus:outline-none focus-shadow-outline" name="category">
                    <option value="Select a Category" disabled>Select a Category</option>
                    <option value="top">Top</option>
                    <option value="hot">Hot</option>
                    <option value="new">New</option>
                    <option value="controversial">Controversial</option>
                </select>
            </React.Fragment>
        );
    }
}

export default index
