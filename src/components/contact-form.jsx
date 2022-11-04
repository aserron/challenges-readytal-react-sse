import React from 'react';
import { object,func } from 'prop-types';

export class ContactForm extends React.Component{

    static defaultProps = {
        data:{
            name:'',
            email:'',
            option:'',
            select: '',
            message:'',
            terms:false
        }
    }

    static propTypes = {
        onChange: func.isRequired,
        onSubmit: func.isRequired,
        data: object.isRequired
    }

    constructor(props){
        super(props)

        this.state = {...ContactForm.defaultProps};

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    /**
     * When form is submitted forward contact data to parent
     * @param {event} DOMEvent
     */
    handleSubmit(event){
        event.preventDefault();
        this.props.onSubmit(this.props.data)
    }

    handleInputChange(event){
        let target = event.target;
        let value = target.type ==='checkbox' ? target.checked : target.value;
        const name = target.name;

        console.log(`handleInputChange [${name}]`,value,this.state);

        this.setState((state,props)=>{
            let contact = {...state};
            contact[name]= value;
            props.onChange(contact);
            return contact;
        });
    }

    isSelected(key, option){
        return this.props.data[key] === option
    }

    options = [
        {id:1, label:'I have question about my membership'},
        {id:2, label:'I have technical question'},
        {id:3, label:'I would like to change membership'},
        {id:4, label:'Other question'},
    ]

    render(){
        let data = this.props.data;

        return <form onChange={()=>{}}>

        <h3>Contact Form</h3>

        <div className="form-group">
            <label className="form-label">Your Name:</label>
            <input name="name"
                   className="form-control"
                   defaultValue={data.name}
                   onChange={this.handleInputChange}
            />
        </div>

        <div className="form-group">
            <label className="form-label">Your Best Email:</label>
            <input name="email" className="form-control"
                   defaultValue={data.email}
                   onChange={(e)=>{console.log(e.target.value)}}
            />
        </div>

        <label className="form-label">Select your membership option:</label>
        <div className="form-group row">
            <label className="form-label col-xs-4">
            <input type="radio" name="option" value="A" defaultChecked={true}/> Option A</label>
            <label className="form-label col-xs-4">
            <input type="radio" name="option" value="B"/> Option B</label>
            <label className="form-label col-xs-4">
            <input type="radio" name="option" value="C"/> Option C</label>
        </div>

        <hr/>

        <div className="form-group">
            <label className="form-label">What can we help you with:</label>
            <select  className="form-control" name="select">
                <option value="1">I have question about my membership</option>
            </select>
        </div>

        <div className="form-group">
            <label className="form-label">Message:</label>
            <textarea name="message" rows="10"
                      placeholder="Please type your question here"
                      className="form-control"
                      onChange={this.handleInputChange}
            />
        </div>

        <div className="form-group">
            <label className="form-label"> <input type="checkbox" name="terms" /> I agree to terms and conditions </label>

        </div>

            <input type="submit" value="Send" className="contactform-submit" />
        </form>
    }
}
