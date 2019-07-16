import React, { Component } from "react";
import { Tooltip } from 'reactstrap';
import './TableButtons.css';

class TableButtons extends Component{
    constructor() {
        super();
        this.state = {
            data: ["button1","button2","button3","button4","button5","button6"],
            tooltipOpen: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
          tooltipOpen: !this.state.tooltipOpen
        });
    }
    
    render(){
        return(
            <table class="table table-striped table-responsive-md btn-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        {this.state.data.map(val => 
                        <td>
                            <button type="button" class="btn btn-teal btn-rounded btn-sm m-0" id={val}>{val}</button>
                            <Tooltip placement="top" isOpen={this.state.tooltipOpen} autohide={false} target={val} toggle={this.toggle}>
                                Try to select {val} text!
                            </Tooltip>
                        </td>
                        )}
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>
                            <button type="button" class="btn btn-teal btn-rounded btn-sm m-0">Button</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-teal btn-rounded btn-sm m-0">Button</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-teal btn-rounded btn-sm m-0">Button</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-teal btn-rounded btn-sm m-0">Button</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-teal btn-rounded btn-sm m-0">Button</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-teal btn-rounded btn-sm m-0">Button</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>
                            <button type="button" class="btn btn-teal btn-rounded btn-sm m-0">Button</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-teal btn-rounded btn-sm m-0">Button</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-teal btn-rounded btn-sm m-0">Button</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-teal btn-rounded btn-sm m-0">Button</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-teal btn-rounded btn-sm m-0">Button</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-teal btn-rounded btn-sm m-0">Button</button>
                        </td>
                    </tr>
                </tbody>

                </table>
        );
    }
}

export default TableButtons;