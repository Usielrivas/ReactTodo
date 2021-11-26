import react from "react";

class Post extends react.Component{

    state= {
        post: []
    }

    async componentDidMount(){

       const post= await fetch("https://jsonplaceholder.typicode.com/comments");
        const data= await post.json();
        //console.log(data);
        this.setState({
            post: data
        })
    }

    render(){
        return (
            <div>
            {
                this.state.post.map( post => {
                    return (
                        <div key={post.id} className="alert-dark p-2 mb-2" >
                            <h2>{post.name}</h2>
                            <p>{post.body}</p>
                        </div>
                    )
                })
            }
            </div>
        )
           }
}

export default Post;
