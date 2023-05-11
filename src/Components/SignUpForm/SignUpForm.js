import {Component} from 'react';
import {signUp} from '../../utilities/users-service'

export default class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    };

    //this is defined by us, not inherited by component, but 'this' in this.handleChange and this.setState are referring to the instance of the class (the object created). setState does come inherited by the component.
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
        })
    }

    handleSubmit = async (evt) => {
        const {setUser} = this.props;
        evt.preventDefault();
        // alert(JSON.stringify(this.state));
        try {
            const formData = {...this.state};
            delete formData.confirm;
            delete formData.error;
            const user = await signUp(formData);
            setUser(user);
        } catch (error) {
            this.setState({error: 'Sign Up Failed - Try Again'})
        }
    }

    render() {
        //include local variables inside render, before return
        const disabled = this.state.password !== this.state.confirm;

        return (
            <div>
                <h1>AuthPage</h1>
                <div className='form-container'>
                    <form autoComplete='off' onSubmit={this.handleSubmit}>
                        <label> Name </label>
                        <input
                            type="text" 
                            name="name" 
                            value={this.state.name} 
                            onChange={this.handleChange}
                            required
                        />
                        <label> Email </label>
                        <input
                            type="email" 
                            name="email" 
                            value={this.state.email} 
                            onChange={this.handleChange}
                            required
                        />
                        <label> Password </label>
                        <input
                            type="password" 
                            name="password" 
                            value={this.state.password} 
                            onChange={this.handleChange}
                            required
                        />
                        <label> Confirm </label>
                        <input
                            type="password" 
                            name="confirm" 
                            value={this.state.confirm} 
                            onChange={this.handleChange}
                            required
                        />
                        <button type="submit" disabled={disabled}>Sign Up</button>
                    </form>
                </div>
                <p className='error-message'>&nbsp;{this.state.error}</p>
            </div>
        )
    }
}