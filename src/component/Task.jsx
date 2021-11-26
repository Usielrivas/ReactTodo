import react from "react";
import PropTypes from "prop-types";

class Task extends react.Component{

    estadoTarea(){
        if( this.props.tarea.done ){
            return "alert-primary";
        }else{
            return "alert-danger";
        }
    }


    render(){
        
        const e= this.props.tarea;
        //console.log( typeof e )

        return (
            <div className="mt-4">
                { 
                        <div className={ this.estadoTarea() + " m-2 p-2 row" }>
                            <div className="col-12">
                                <h2 className="fs-4">{ e.title }</h2>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-1">

                                        <input 
                                            className="form-check-input"
                                            onChange={ this.props.done.bind(this, e.id)}
                                            type="checkbox"
                                        />
                                    </div>
                                    <div className="col-9">

                                        <p>{ e.description }</p>

                                    </div>
                                    <div className="col-2">

                                        <button 
                                            className="btn btn-dark mx-3"
                                            onClick={ this.props.borrar.bind(this, e.id) }
                                        >
                                            <i className="bi bi-trash-fill text-danger fs-5"></i>
                                        </button>

                                    </div>
                                </div>
                                <div className="row">
                                    <p className="small">

                                        <span className="fw-bold mx-2">ID: </span> { e.id }
                                        <span className="fw-bold mx-2">Done: </span> { e.done.toString() }

                                    </p>
                                </div>
                            </div>

                        </div>
                }
            </div>
           )
    }
}

Task.propTypes= {
    tarea: PropTypes.object.isRequired
}

export default Task;
