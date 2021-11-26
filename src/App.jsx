import react from "react";
import task from "./sample/task.json";
import Tasks from "./component/Tasks"
import Form from "./component/Form";
import Post from "./component/Post";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

class App extends react.Component{

    state= { tasks: task}; 

    addTarea(title, description){

        const obj= {
            id: this.state.tasks.length,
            title: title,
            description: description,
            done: false
        }

        this.setState({
            tasks: [...this.state.tasks, obj]
        })

        //console.log(obj);
    }

    deleteTareas(id){
       const e= this.state.tasks.filter( task => task.id !== id );
        this.setState({
            tasks: e
        })
        //console.log(e)

    }

    checkDone(id){
        const e= this.state.tasks.map(task => {
            if(task.id === id){
                task.done = !task.done;
            }
            return task;
        })

        this.setState({
            tasks: e
        })
    }

    render(){
        return (

                    <div>


            <Router>
                <Link className="p-3" to="/post">
                    Post
                </Link>
                <Link className="p-3" to="/">
                    Home
                </Link>
                
                <Routes>
                    <Route path="/post" element={
                        <div className="row justify-content-center mt-3">
                            <div className="col-lg-6 col-md-7 col-sm-10 col-11">
                                <Post />
                            </div>
                        </div>
                    } />

                    <Route path="/" element={
                    
                        <>
                        <div className="row d-flex justify-content-center">
                        <div className="col-lg-6 col-md-7 col-sm-10 col-11">
                        <Form add={ (a,b)=>{ this.addTarea(a,b) } } />
                        </div>
                        </div>
                        <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-7 col-sm-10 col-11">
                        <Tasks 
                        task={this.state.tasks} 
                        deleteTask={ (id)=>{ this.deleteTareas(id)} } 
                        check={ (id) => { this.checkDone(id) } } 
                        />
                        </div>
                        </div>
                        </>

                    } />

                </Routes>

            </Router>

                                                            </div>        )
    }

}

export default App;
