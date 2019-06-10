import React, {Component} from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "Items From",
            form: {
                name: "",
                email: "",
                phone: "",
                gender: "",
                married: false
            }
        }
    }

    handleOnchange = (e) => {
        let form = this.state.form
        if (e.target.type === 'checkbox')
            if (e.target.checked) {
                form[e.target.name] = true
            } else {
                form[e.target.name] = false
            }
        else
            form[e.target.name] = e.target.value
        this.setState({
            form
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.form)
        // further form submission logic goes here
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <label>Name </label>
                    <input type={'text'}
                           value={this.state.form.name}
                           onChange={e => this.handleOnchange(e)}
                           name={'name'}/>

                    <br/>

                    <label>Email </label>
                    <input type={'text'}
                           value={this.state.form.email}
                           onChange={e => this.handleOnchange(e)}
                           name={'email'}/>

                    <br/>

                    <label>Phone </label>
                    <input type={'tel'}
                           value={this.state.form.phone}
                           onChange={e => this.handleOnchange(e)}
                           name={'phone'}/>


                    <br/>

                    <label>Address</label>
                    <textarea value={this.state.form.address}
                              onChange={e => this.handleOnchange(e)}
                              name={'address'}/>

                    <br/>

                    <label>Gender </label>
                    <select name={'gender'}
                            defaultValue={this.state.form.gender}
                            onChange={e => this.handleOnchange(e)}>
                        <option value={'M'}>Male</option>
                        <option value={'F'}>Female</option>
                        <option value={'O'}>Other</option>
                    </select>


                    <br/>

                    <label>Married</label>
                    <input type={'checkbox'}
                           onChange={e => this.handleOnchange(e)}
                           checked={this.state.form.married ? 'checked' : ''}
                           name={'married'}/>

                           <br/>
                           <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;
