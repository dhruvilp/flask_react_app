import React, { Component } from "react";
import './TableButtons.css';

class TableButtons extends Component{
    constructor() {
        super();
        this.state = {
            data: []
        };
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