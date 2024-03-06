import React from "react";

class ClassState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            error: false,
            delete:false,
        };
    }
    componentWillUnmount()
    {
        console.log("componentWillUnMount");
    }
    componentWillMount()
    {
        console.log("componentWillMount");
    }
    componentDidMount()
    {
        console.log("componentDidMount");
    }
    render() {
        return (
            <>
                <div>
                    <h2>Eliminar ClassState {this.props.name}</h2>
                </div>
                <p>
                    {this.state.error}
                    Por favor, escribe el siguiente código de seguridad:
                    eliminar/nutrilicious
                </p>
                <input placeholder="Código de seguridad"></input>
                <button onClick = {() => this.setState({delete: !this.state.delete})}> Eliminar </button>
            </>
        );
    }
}
export { ClassState };
