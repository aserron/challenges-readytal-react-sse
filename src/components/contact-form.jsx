import React from 'react';
import {object, func} from 'prop-types';

export class ContactForm extends React.Component {

    static defaultProps = {
        data: {
            name: '',
            email: '',
            option: '',
            select: '',
            message: '',
            terms: false
        }
    }

    static propTypes = {
        onChange: func.isRequired,
        onSubmit: func.isRequired,
        data: object.isRequired
    }

    constructor(props) {

        // console.warn('FORM CONSTRUCTOR')

        super(props)

        // this.state = {...ContactForm.defaultProps};
        let s1 = {...ContactForm.defaultProps};
        s1.data = Object.assign(s1.data,{...props.data});

        this.state = s1;

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    /**
     * When form is submitted forward contact data to parent
     * @param {event} DOMEvent
     */
    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.props.data)
    }


    handleInputChange(event) {
        // event.persist();
        let target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        console.log(`handleInputChange [${name}]`, value, event.target);

        // event.target.value = value;
        let s1 = {...this.state};
        s1.data[name] = value;
        this.props.onChange(s1.data);
        // this.setState((state, props) => {
        //     let s1 = {...state};
        //     s1.data[name] = value;
        //     props.onChange(s1.data);
        //     return s1;
        // });
    }

    isSelected(key, option) {
        return this.props.data[key] === option
    }

    options = [
        {id: 1, label: 'I have question about my membership'},
        {id: 2, label: 'I have technical question'},
        {id: 3, label: 'I would like to change membership'},
        {id: 4, label: 'Other question'},
    ]

    render() {
        // let data = this.state.data;
        let data = this.props.data;
        return <form>

            <h3>Contact Form</h3>

            <div className="form-group">
                <label className="form-label">Your Name:</label>
                <input name="name"
                       className="form-control"
                       value={data.name}
                       onChange={this.handleInputChange}
                />
            </div>

            <div className="form-group">
                <label className="form-label">Your Best Email:</label>
                <input name="email" className="form-control"
                       value={data.email}
                       onChange={this.handleInputChange}
                />
            </div>

            <label className="form-label">Select your membership option:</label>
            <div className="form-group row">

                <label className="form-label col-xs-4" >
                    <input onChange={this.handleInputChange}
                           type="radio" name="option" value="A"
                           checked={data.option === "A"}/> Option A</label>
                <label className="form-label col-xs-4">
                    <input onChange={this.handleInputChange}
                           type="radio" name="option" value="B"
                           checked={data.option === "B"}/> Option B</label>
                <label className="form-label col-xs-4">
                    <input onChange={this.handleInputChange}
                           type="radio" name="option" value="C"
                           checked={data.option === "C"}/> Option C</label>

            </div>

            <hr/>

            <div className="form-group">
                <label className="form-label">What can we help you with:</label>
                <select name="select" onChange={this.handleInputChange} className="form-control" >
                    {this.options.map((it,k)=>(
                        <option
                                key={`id-sel-${it.id}`}
                                value={it.id}
                                selected={data.select===`${it.id}`}
                        >{it.label}</option>
                    ))}

                </select>
            </div>

            <div className="form-group">
                <label className="form-label">Message:</label>
                <textarea name="message" rows="10"
                          placeholder="Please type your question here"
                          className="form-control"
                          value={data.message}
                          onChange={this.handleInputChange}
                />
            </div>

            <div className="form-group">
                <label className="form-label">
                    <input
                        checked={data.terms}
                        onChange={this.handleInputChange}
                        type="checkbox" name="terms"/> I agree to terms and conditions
                </label>

            </div>

            <input type="submit" value="Send" className="contactform-submit"/>
        </form>
    }
}
