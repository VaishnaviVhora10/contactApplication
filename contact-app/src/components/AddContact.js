import React, {component} from "react";

class AddContact extends React.Component{
    state = {
        name: " ",
        email: " ",

    }

    add =(e)=>{
        e.preventDefault();
        if(this.name === "" && this.email === " "){
            alert("All the fields are mandatory!!!");
            return
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"", email:""})
        // console.log(this.state);
    }
render(){
    return(
        <><div className="ui main"></div>
<h2>Add Contact</h2>
<form className="ui form" onSubmit={this.add} >
    <div className="field">
        <label>Name</label>
        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
    </div>
    <div className="field">
        <label>Email</label>
        <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} />
        <button className="ui button blue">AddContact</button>
    </div>
</form>
</>

    );
}
}

export default AddContact