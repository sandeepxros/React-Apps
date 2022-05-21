function StartPoint(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="p-5 mb-2 bg-light rounded-3">
                        <div className="container-fluid py-5">
                            <small>If not already registered</small>
                            <h1 className="display-5 fw-bold">Register Here</h1>
                            <p className="col-md-8 fs-4">
                                Before moving forward make sure you have enogh time to complete the form.
                                Keep all the education related document handy. 
                                contact University Care for any further information. 
                            </p>
                            <button className="btn btn-primary btn-lg">Register</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                <div className=" container-fluid py-5 p-5  bg-light">
                            <small>Already Registered ?</small>
                            <h1 className="display-5 fw-bold mb-4">Please Login Here</h1>
                <div class="mb-3">
                    <label for="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="username"/>
                </div>
                <div class="mb-3">
                     <label for="password" className="form-label">Password</label>
                     <input type="password" className="form-control" id="password" placeholder="****"/>
                    <small>Forgot password?</small>
                </div>
                <div class="mb-3">
                    <button type="submit" className="btn btn-dark">Sign in</button>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default StartPoint