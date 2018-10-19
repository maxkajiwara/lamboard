/*
The start of the SignupPage component
 todo:
  - check username availability
  - verify email format
  - move styles to shared-components
  - hook up to redux
  - do we have a sprite for the logo?
*/

import React, { Component } from 'react'

export default class SignupPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      password_conf: '',
      email: '',
      email_conf: ''
    }
  }

  updateInputText = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submit = event => {
    event.preventDefault()
    const username = event.target.children[0].value
    const password = event.target.children[1].value
    const password_conf = event.target.children[2].value
    const email = event.target.children[3].value
    const email_conf = event.target.children[4].value

    if(password && (password === password_conf)) {
      if(email && (email === email_conf)) {
          localStorage.setItem('username', username)
          localStorage.setItem('password', password)
          localStorage.setItem('email', email)
        }
        alert("Looks like you're good to go! Check the email you provided for an authentication link!")
      } else {
        alert('There was an error matching your records! Please try again.')
      }
    window.location.reload()
}

  render() {
    const styles = {
      Signup: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: '100vh',
        padding: '0 0 148px',
      },
      title: {
        fontSize: '2.5rem',
        fontFamily: 'Sans-Serif',
        marginBottom: '10px',
      },
      signupForm: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '350px',
        height: '300px',
        background: 'white',
        padding: '32px 40px 0',
        border: '1px solid #e6e6e6',
        bordeRadius: '1px',
        marginBottom: '10px',
      },
      input: {
        width: '100%',
        height: '38px',
        background: '#fafafa',
        padding: '9px 8px 7px',
        border: '1px solid #efefef',
        bordeRadius: '3px',
        marginBottom: '6px',
        outline: 'none',
      },
      submitButton: {
        width: '80px',
        height: '28px',
        background: 'lightblue',
        margin: '12px',
      }
    }
    return(
      <div className="Signup" style={styles.Signup}>
        <h2 className="title" style={styles.title}>Lamboard Registration</h2>
        <form className="signup-form" style={styles.signupForm} onSubmit={this.submit}>
          <input
            type="text"
            className="username-input"
            name="username"
            placeholder="Enter Username"
            style={styles.input}
            value={this.state.username}
            onChange={this.updateInputText}
           />
           <input
             type="text"
             className="password-input"
             name="password"
             placeholder="Enter Password"
             style={styles.input}
             value={this.state.password}
             onChange={this.updateInputText}
            />
            <input
              type="text"
              className="password-input"
              name="password_conf"
              placeholder="Enter Password Confirmation"
              style={styles.input}
              value={this.state.password_conf}
              onChange={this.updateInputText}
             />
             <input
               type="text"
               className="email-input"
               name="email"
               placeholder="Enter Email Address"
               style={styles.input}
               value={this.state.email}
               onChange={this.updateInputText}
              />
              <input
                type="text"
                className="email-input"
                name="email_conf"
                placeholder="Enter Email Confirmation"
                style={styles.input}
                value={this.state.email_conf}
                onChange={this.updateInputText}
               />
               <input
                  type="submit"
                  className="submit-button"
                  style={styles.submitButton}
                  onClick={this.onSubmit}
               />
        </form>
      </div>
    )
  }
}
