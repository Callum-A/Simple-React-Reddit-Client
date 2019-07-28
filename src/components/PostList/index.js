import React, { Component } from 'react'

export class index extends Component {
    render() {
        return (
            <table className="text-lg">
                <tbody>
                {this.props.posts.map((post, index) => {
                    return (
                        <tr className="h-20 pt-4">
                            <td className="text-center align-center text-xl font-weight-400">{ post.score }</td>
                            <td className="text-justified text-base font-weight-300 pl-2 text-gray-900"><a rel="noopener noreferrer" target="_blank" className="border-dashed border-b-2 border-gray-700 hover:border-gray-500 hover:text-gray-700" href={ post.link }>{ post.title }</a></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        );
    }
}

export default index
