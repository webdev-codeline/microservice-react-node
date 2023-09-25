import React, { useState } from 'react';
import axios from 'axios';
export const CommentCreate = ({ postId }) => {
    const [content, setContent] = useState('');
    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content
        });
        setContent('');
    }
    return <div>
        <form onSubmit={onSubmit}>
            <div className='form-group'>
                <label>New Comment</label>
                <input
                    value={content}
                    className='form-control'
                    onChange={e => setContent(e.target.value)}
                ></input>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    </div>;
}