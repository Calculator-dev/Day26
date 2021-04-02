import React from 'react';
import axios from 'axios';

class PostRequestSetHeaders extends React.Component {

    constructor(props) {
        super(props);
        this.state = { articleId: null };
    }

    componentDidMount() {
        const article = { title: 'React POST Request Example' };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer my-token',
            'My-Custom-Header': 'foobar'
        };

        axios.post('https://reqres.in/api/articles', article, { headers })
            .then(response => this.setState({articleId: response.data.id }));
    }
    
    render() {
        const { articleId } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">POST Request with Set Headers</h5>
                <div className="card-body">Article Id: {articleId}</div>
            </div>
            
        );
    }
}

<<<<<<< HEAD
export default PostRequestSetHading;
=======

>>>>>>> 4383e66d544d7e796e4d508bd946251739d2db1f
