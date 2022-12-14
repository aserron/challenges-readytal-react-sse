import React from 'react'
import {ContactForm} from './contact-form'
import {Message} from './message'
import {UserPanel} from './user-panel'


export class App extends React.Component {

    CONTACT_FORM_DEFAULTS = {
        name: '',
        email: '',
        option: 'A',
        select: 2,
        type: '',
        message: 'xxx'
    }

    constructor(props) {
        super(props)
        this.state = {
            contact: {...this.CONTACT_FORM_DEFAULTS},
            sent: false,
            currentUser: null
        }

        // this.contactChanged = this.contactChanged.bind(this);
        this.sendContact = this.sendContact.bind(this);
        this.contactChanged = this.contactChanged.bind(this)
        this.logIn = this.logIn.bind(this)
    }

    contactChanged(contact) {
        contact.select = Number.parseInt(contact.select);
        console.log('contactChanged contact', contact);
        console.log('this', this);
        this.setState({
            contact
        })
    }

    sendContact(contact) {
        console.info("sendContact", contact)
        // For now just mark it as `sent`
        this.setState({
            sent: true
        })
    }

    logIn = () => {
        // console.log('logIn')

        let user = {
            name: 'Test User',
            email: 'user@example.com'
        };
        this.setState({
            contact: {
                ...this.state.contact,
                name: user.name,
                email: user.email
            },
            currentUser: user
        })
    }


    render() {
        // console.info('App.render',this.props,this.state)
        let that = this;
        return <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="pull-right well-lg">
                        {this.state.currentUser

                            ? <UserPanel user={this.state.currentUser}/>

                            : <button className="btn btn-default" onClick={(e => this.logIn())}>
                                <i className="glyphicon glyphicon-user"></i> Log In
                            </button>
                        }
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <h2>Contact us</h2>
                    <p>Please fill in form on the right to get fast reply</p>
                    <img style={{width: '100%'}} src="http://via.placeholder.com/300x200"/>
                </div>
                <div className="col-md-8">
                    {(this.state.sent)
                        ? <Message header={`Thank You`} text={`We will get back to you soon!`}/>
                        : <ContactForm data={this.state.contact}
                                       onChange={this.contactChanged}
                                       onSubmit={this.sendContact}/>
                    }
                </div>
            </div>
        </div>
    }
}
