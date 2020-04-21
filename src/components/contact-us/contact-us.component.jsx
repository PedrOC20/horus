import React from 'react';
import axios from 'axios';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './contact-us.styles.scss';

class ContactUs extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      name: '',
      message: ''
    }
  }

  handleChange = event => {
    const { value, name } = event.target;
    
    console.log(name)
    console.log(value)

    this.setState({ [name]: value })
  }

  formSubmit = (e) => {
    e.preventDefault()
  
    // this.setState({
    //   buttonText: '...sending'
    // })
  
    let data = {
      email: this.state.email,
      first_name: this.state.name,
      last_name: "",
      message: this.state.message,
      plan: "",
      we_help: "",
      subject: "Support Ticket"
    }
    
    axios.post('https://hermes.bboxsports.com/api/contact/save', data)
    .then( res => {
      this.setState({ sent: true }, this.resetForm())
    })
    .catch( () => {
      console.log('Message not sent')
    })
  }

  resetForm = () => {
    this.setState({
      name: '',
      message: '',
      email: '',
    })
  }

  render() {
    return(
      <div id='contact' className='contact-us'>
        <div className='contact-form'>
          <h1>CONTACT FORM</h1>
          <p>If you are interested in having your Sports Team engaged with your fans through Augmen-</p>
          <p>ted Reality (AR), just drop us an email and we'll be happy to talk with you!</p>

          <form onSubmit={this.formSubmit}>
            <FormInput 
              name="email" 
              type="email" 
              handleChange={this.handleChange}
              value={this.state.email}
              label='YOUR E-MAIL'
              required
            />
            <FormInput 
              name="name" 
              type="text" 
              handleChange={this.handleChange}
              value={this.state.name}
              label='NAME' 
              required 
            />
            <FormInput 
              name="message" 
              type="textarea" 
              handleChange={this.handleChange}
              value={this.state.message}
              label='MESSAGE' 
              required 
            />
            <div className='buttons'>
              <CustomButton type='submit'>SEND NOW</CustomButton>
            </div>
          </form>
        </div>
        <div className='contact-info'>
          <h1>CONTACT INFO</h1>
          <div className='contact-details'>
            <div className='contact-addresss'>
              <h3>ADDRESS</h3>
              <p>Herengracht 420</p>
              <p>1017 BZ Amsterdam</p>
              <p>Netherlands</p>
            </div>
            <div className='contact-phone'>
              <h3>PHONE</h3>
              <p>+351 926 203 776</p>
            </div>
            <div className='contact-email'>
              <h3>EMAIL</h3>
              <p>info@bboxsports.com</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactUs;