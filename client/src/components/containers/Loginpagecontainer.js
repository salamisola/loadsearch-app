import React from "react";
/* import "./container.css"; */

function Homepagecontainer() {
    return (
        <div className="container">
            <form className="well form-horizontal" action=" " method="post" id="contact_form">
                <fieldset>

                    <legend>
                        <center>
                            <h2><b>Login Page</b></h2>
                        </center>
                    </legend>
                    <br />

                    <div className="form-group">
                        <label className="col-md-4 control-label">Username</label>
                        <div className="col-md-4 inputGroupContainer">
                            <div className="input-group"> <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                <input name="username" placeholder="Enter email address" className="form-control" type="text" />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label">Password</label>
                        <div className="col-md-4 inputGroupContainer">
                            <div className="input-group"> <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                <input name="user_password" placeholder="Password" className="form-control" type="password" />
                            </div>
                        </div>
                    </div>

                    <div className="alert alert-success" role="alert" id="success_message">Success
                        <i className="glyphicon glyphicon-thumbs-up"></i> Success!.
                        </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label"></label>
                        <div className="col-md-4"><br />
                            <button type="submit" className="btn btn-success">
                                SUBMIT <span className="glyphicon glyphicon-send"></span>
                            </button>
                        </div>
                    </div>


                    <div className="col-md-4"><br />

                        <button type="submit" className="btn btn-success">New User Registration
                                <span className="glyphicon glyphicon-user"></span>
                        </button>
                    </div>
                    {/*  </div> */}

                </fieldset>
            </form>

            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        </div>


    )
}

export default Homepagecontainer;

