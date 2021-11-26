import react from "react";
import Task from "./Task"

class Tasks extends react.Component{

    render(){
        return (
            <div className="mt-4">
                { 
                    this.props.task.map(
                        e => 
                        <Task 
                            key={e.id } 
                            borrar={this.props.deleteTask} 
                            done={ this.props.check }
                            tarea={ e } 
                        />
                    )
                }
            </div>
           )
    }
}

export default Tasks;
