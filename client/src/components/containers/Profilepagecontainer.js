import React from "react";
/* import "./container.css"; */

function Profilepagecontainer() {
    return (
        <div className="container">
            <form className="well form-horizontal" action=" " method="post" id="contact_form">
                <fieldset>
                    <legend>
                        <center>
                            <h2><b>New User Profile Page</b></h2>
                        </center>
                    </legend>
                    <br />
                    <div className="form-group">
                        <label className="col-md-4 control-label">Fullname</label>
                        <div className="col-md-4 inputGroupContainer">
                            <div className="input-group"> <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                <input name="first_name" placeholder="First Name" className="form-control" type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label">E-Mail</label>
                        <div className="col-md-4 inputGroupContainer">
                            <div className="input-group"> <span className="input-group-addon"><i
                                className="glyphicon glyphicon-envelope"></i></span>
                                <input name="email" placeholder="E-Mail Address" className="form-control" type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label">Username</label>
                        <div className="col-md-4 inputGroupContainer">
                            <div className="input-group"> <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                <input name="user_name" placeholder="Username" className="form-control" type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label">Password</label>
                        <div className="col-md-4 inputGroupContainer">
                            <div className="input-group"> <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                <input name="user_password" placeholder="Password" className="form-control" type="password" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label">Confirm Password</label>
                        <div className="col-md-4 inputGroupContainer">
                            <div className="input-group"> <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                <input name="confirm_password" placeholder="Confirm Password" className="form-control" type="password" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label">Truck Type</label>
                        <div className="col-md-4 selectContainer">
                            <div className="input-group"> <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
                                <select name="truckType" className="form-control selectpicker">
                                    <option value="">Select Truck Type</option>
                                    <option value="container">Container</option>
                                    <option value="container refrigerated">Container Refrigerated</option>
                                    <option value="container double">Container Double</option>
                                    <option value="dry van">Dry Van</option>
                                    <option value="dump trailer">Dump Trailer</option>
                                    <option value="flatbed">Flatbed</option>
                                    <option value="lowboy">Lowboy</option>
                                    <option value="reefer">Reefer</option>
                                    <option value="tanker">Tanker</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label">Documents</label>
                        <div className="col-md-4 inputGroupContainer">
                            <div className="input-group"> <span className="input-group-addon"><i className="glyphicon glyphicon-upload"></i></span>
                                <input name="document" placeholder="" className="form-control" type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label">Other truck details</label>
                        <div className="col-md-4 selectContainer">
                            <div className="input-group"> <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
                                <select name="other" className="form-control selectpicker">
                                    <option value="">Select Truck Type</option>
                                    <option>MPDC</option>
                                    <option>MCTC</option>
                                    <option>MCR</option>
                                    <option>Mayor's Office</option>
                                    <option>Tourism Office</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label">DOT ##</label>
                        <div className="col-md-4 inputGroupContainer">
                            <div className="input-group"> <span className="input-group-addon"><i
                                className="glyphicon glyphicon-dashboard"></i></span>
                                <input name="dot" placeholder="" className="form-control" type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label">MC Authority ##</label>
                        <div className="col-md-4 inputGroupContainer">
                            <div className="input-group"> <span className="input-group-addon"><i className="glyphicon glyphicon-header"></i></span>
                                <input name="dot" placeholder="" className="form-control" type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="alert alert-success" role="alert" id="success_message">Success <i
                        className="glyphicon glyphicon-thumbs-up"></i> Success!.</div>
                    <div className="form-group">
                        <label className="col-md-4 control-label"></label>
                        <div className="col-md-4"><br />
                            <button type="submit" className="btn btn-success">SUBMIT <span
                                className="glyphicon glyphicon-send"></span></button>
                        </div>
                    </div>
                </fieldset>
            </form>
            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        </div>
    )
}
export default Profilepagecontainer;

