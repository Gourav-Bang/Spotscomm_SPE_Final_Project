import React, {Component} from "react"

class AddEquipment extends Component {
    constructor() {
        super()
        this.state = {
            EqName: "",
            Sports: "",
            EqCateg:"",
            EqQty:"",
           
        }
        this.handleChange = this.handleChange.bind(this)
    }
  
    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }
    handleSubmit(event){
      alert('Data was submitted: ' + this.state);
     
    }
   
    render() {
        return (
          <main >
          <div className='field' >
            
            
            <form onSubmit={this.handleSubmit} className='form'>
            <h1 style={{color:"red" ,align:"center"}} >Add New Equipment</h1>
            <br />
            <div className='field required'>
            <label className='label required'>Equipment Name  :</label>
                <input 
                    type="text" 
                    value={this.state.EqName} 
                    name="EqName" 
                    placeholder="Equipment Name" 
                    onChange={this.handleChange} 
                     className='text-input'
                /></div>
                <br />
                <div className='field required'>
                <label className='label required'>Sports  :</label>
                <input 
                    type="text" 
                    value={this.state.Sports} 
                    name="Sports" 
                    placeholder="Sports" 
                    onChange={this.handleChange} 
                     className='text-input'
                />
                <br />
                
                <br/>
                </div> <div className='field required'>
                <label className='label required'>Catagory of Equipment :</label>
                <input 
                    type="text" 
                    value={this.state.EqCateg} 
                    name="EqCateg" 
                    placeholder="Catagory" 
                    onChange={this.handleChange} 
                     className='text-input'
                />
                <br />
               
                </div> <div className='field required'>
                <label className='label required'>Quantity to be added :</label>
                <input 
                    type="text" 
                    value={this.state.EqQty} 
                    name="EqQty" 
                    placeholder="Enter quantity" 
                    onChange={this.handleChange} 
                     className='text-input'
                />
                </div>   
                <br /><br />
               
                
                <h2 style={{color:"red" ,align:"center"}}>Entered Information</h2><br/>
                <p  className='text-input'>Name of Equipment            : {this.state.EqName} </p>
                
                <p  className='text-input'>Sports            : {this.state.Sports}</p>
                <p  className='text-input'>Catagory         : {this.state.EqCateg}</p>
                <p  className='text-input'>Quantity          : {this.state.EqQty} </p>
                
                <br /><br />
                <button className='button'>Submit</button>
                
              {console.log(this.state)}
                
            </form>
            </div></main>
        )
    }
}

export default AddEquipment
