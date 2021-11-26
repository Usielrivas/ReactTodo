import react from "react";

class Form extends react.Component{

    state= {
        title: "",
        description: ""
    }

    noEnviar(e){
        //console.log(this.state);
        let titulo= this.state.title;
        let description= this.state.description;
        this.props.add( titulo , description );
        e.preventDefault();
    }

    cambio(e){
        //console.log(e.target.name,e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){

        //console.log( this.props.add )


        return (
            <div className="m-3">
                <h1>Notas</h1>
                <form action="" onSubmit={ (e)=>{ this.noEnviar(e) } }>
                    <input 
                        className="form-control my-1"
                        name="title"
                        type="text" 
                        onChange={ e => this.cambio(e)} 
                        placeholder="Tareas" 
                        value={ this.state.title }
                    />
                    <textarea 
                        className="form-control my-1"
                        name="description"
                        onChange={ e => this.cambio(e)} 
                        placeholder="Description" 
                        value={ this.state.description }
                        id=""
                    />
                    <input className="form-control btn btn-primary my-1" type="submit" value="Save" />
                </form>
            </div>
        )
    }
}

export default Form;
