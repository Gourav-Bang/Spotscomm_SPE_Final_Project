import React, {Component} from "react"

class CreateID extends Component {
    constructor() {
        super()
        this.state = {
            Name: "",
            Rollno: "",
            email:"",
            phone:"",
            idType:"",
            batch: "MT",
            year:"2019"
        }
        // this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit=this.handleSubmit.bind(this)
    }
  
    handleChange=(event)=> {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }
    handleSubmit=(event)=>{
      alert('Data was submitted for creating ID of: ' + this.state.Name);
     
    }
   
    render() {
        return (
          <main >
          <div className='field' >
            
            
            <form onSubmit={this.handleSubmit} className='form'>
            <h1 style={{color:"red" ,align:"center"}} >Create new ID</h1>
            <br />
            <div className='field required'>
            <label className='label required'>Full Name  :</label>
                <input 
                    type="text" 
                    value={this.state.Name} 
                    name="Name" 
                    placeholder="Name" 
                    onChange={this.handleChange} 
                     className='text-input'
                /></div>
                <br />
                <div className='field required'>
                <label className='label required'>Roll Number  :</label>
                <input 
                    type="text" 
                    value={this.state.Rollno} 
                    name="Rollno" 
                    placeholder="Roll Number" 
                    onChange={this.handleChange} 
                     className='text-input'
                />
                <br />
                
                <br/>
                </div> <div className='field required half'>
                <label className='label required'>Batch and year  :</label>
                <select 
                    value={this.state.batch}
                    onChange={this.handleChange}
                    name="batch"
                    className='select'
                >
                    <option value="MT">Mtech</option>
                    <option value="IMT">IMtech</option>
                   
                </select>
                <br/>
                <select 
                    value={this.state.year}
                    onChange={this.handleChange}
                    name="year"
                    className='select'
                >
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>

                   
                </select>
                <br/>
                
                </div><div className='field required'>
                <label className='label required'>Email Id  :</label>
                <input 
                    type="text" 
                    value={this.state.email} 
                    name="email" 
                    placeholder="Amit.Jain@iiitb.org" 
                    onChange={this.handleChange} 
                     className='text-input'
                />
                <br />
               
                </div> <div className='field required'>
                <label className='label required'>ID Type  :</label>
                <select 
                    value={this.state.idType}
                    onChange={this.handleChange}
                    name="idType"
                     className='text-input'
                >
                    <option value="Admin">Admin</option>
                    <option value="Student">Student</option>
                    <option value="SportsCom">Sports Com</option>
                </select>
                <br/>
                
               
                </div><div className='field required'>
                <label className='label required'>Mobile Number :</label>
                <input 
                    type="text" 
                    value={this.state.phone} 
                    name="phone" 
                    placeholder="Mobile Number" 
                    onChange={this.handleChange} 
                     className='text-input'
                />
                </div>   
                <br /><br />
               
                
                <h2 style={{color:"red" ,align:"center"}}>Entered Information</h2><br/>
                <h4  className='text-input'>Name             : {this.state.Name} ({this.state.Rollno})</h4>
                
                <h4  className='text-input'>Batch            : {this.state.batch} {this.state.year}</h4>
                <h4  className='text-input'>Email ID         : {this.state.email}</h4>
                <h4  className='text-input'>ID Type          : {this.state.idType} </h4>
                <h4  className='text-input'>Phone Number     : {this.state.phone}</h4>
                <br /><br />
                <button className='button'>Submit</button>
                
              {console.log(this.state)}
                
            </form>
            </div></main>
        )
    }
}

export default CreateID
