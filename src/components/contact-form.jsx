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
    }

    /**
     * When form is submitted forward contact data to parent
     * @param {event} DOMEvent
     */
    handleSubmit(event){
        event.preventDefault();

        this.props.onSubmit(this.props.data)
    }

    fieldChange(event){
        let target = event.target;
        let value = target.type ==='checkbox' ? target.checked : target.value;
    }

    isSelected(key, option){
        return this.props.data[key] == option
    }

    options = [
        {id:1, label:'I have question about my membership'},
        {id:2, label:'I have technical question'},
        {id:3, label:'I would like to change membership'},
        {id:4, label:'Other question'},
    ]

    render(){
        let data = this.props.data;

        return <form>

        <h3>Contact Form</h3>

        <div class="form-group">
            <label className="form-label">Your Name:</label>
            <input name="name" className="form-control" />
        </div>

        <div class="form-group">
            <label className="form-label">Your Best Email:</label>
            <input name="email" className="form-control" />
        </div>

        <label className="form-label">Select your membership option:</label>
        <div class="form-group row">
            <label className="form-label col-xs-4">
            <input type="radio" name="option" value="A"/> Option A</label>
            <label className="form-label col-xs-4">
            <input type="radio" name="option" value="B"/> Option B</label>
            <label className="form-label col-xs-4">
            <input type="radio" name="option" value="C"/> Option C</label>
        </div>

        <hr/>

        <div class="form-group">
            <label className="form-label">What can we help you with:</label>
            <select  className="form-control" name="select">
                <option value="1">I have question about my membership</option>
            </select>
        </div>

        <div class="form-group">
            <label className="form-label">Message:</label>
            <textarea name="message" rows="10" placeholder="Please type your question here"  className="form-control"/>
        </div>

        <div class="form-group">
            <label className="form-label"> <input type="checkbox" name="terms" /> I agree to terms and conditions </label>

        </div>

            <input type="submit" value="Send" className="contactform-submit" />
        </form>
    }
}
