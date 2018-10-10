import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import axios from "axios"


class Si extends Component {
    // Setting the component's initial state
    state = {
        name: "",
        level: 0,
        bio: "",
        age: 18,
        gender: "male"
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
        this.setState({
            firstName: "",
            lastName: ""
        });
    };

    handleButtonClick = event => {
        event.preventDefault();



    };
    render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (

            <Container>
                <Row>
                    <Col size="md-12">
                        <div>
                            <form className="form">
                                <input
                                    value={this.state.name}
                                    name="name"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Enter your name"
                                />
                                <input
                                    value={this.state.level}
                                    name="level"
                                    onChange={this.handleInputChange}
                                    type="number"
                                    placeholder="0-1000 how tough are you??"
                                />
                                <textarea
                                    value={this.state.bio}
                                    name="bio"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Tell us a little bit about yourself"
                                />
                                <input
                                    value={this.state.age}
                                    name="age"
                                    onChange={this.handleInputChange}
                                    type="number"
                                    placeholder="How old are you??"
                                />
                                <select name="gender">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                <div>

                                    <button type="submit" onClick={this.handleButtonClick}>Create an Account</button>

                                </div>
                                <Link to="/">Log in if you have an account</Link>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}


export default Si;