import React, { Component } from 'react';

const APIurl = 'https://content.guardianapis.com/search?api-key=7a156abf-149f-4689-9edd-56d286ee8480';

class Guapi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
    }

    componentDidMount() {
        fetch(APIurl)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    articles: response
                })
            })
    }

    render() {
        const { articles } = this.state;
        return (
            <h5 className="" key={articles.item}>
                {articles}
            </h5>
        );
    }
}

export default Guapi;
