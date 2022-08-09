import axios from 'axios';
import React from 'react';

class App extends React.Component{
    state = { details: [], }

    componentDidMount() {
        let data;
        axios
            .get("http://localhost:8000/api/posts/")
            .then((res) => this.setState({ details: res.data }))
            .catch((err) => console.log(err));
    }

    render(){
        return(
            <div>
                <header>(Sunposterisk) Data Generated From Django</header>
                <hr></hr>
                {this.state.details.map((output, id) => (
                    <div key={id}>
                        <div>
                            <h3 dangerouslySetInnerHTML={{__html: output.title}} />
                            <p dangerouslySetInnerHTML={{__html: output.content}} />
                            <p dangerouslySetInnerHTML={{__html: output.author}} />
                            <p dangerouslySetInnerHTML={{__html: output.published_at}} />
                            <p dangerouslySetInnerHTML={{__html: output.total_votes}} />
                        </div>
                    </div>
                ))}
                </div>
        )
    }

}

export default App;
