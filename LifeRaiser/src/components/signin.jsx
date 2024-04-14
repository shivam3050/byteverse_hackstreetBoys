import React from 'react';
import "./signin.css";

const SignIn = () => {
    return (
        <div className="cantainar mt-24">
            <div className="main">
                <div className="sub1"><h2>Login</h2></div>
                <div className="sub2">
                    <pre>save a life with just ₹10 on the LIFE-RAISER App. <a href="">Download Now</a></pre>
                </div>
                <div className="sub3">
                    <div className="side1">
                        <input type="email" placeholder="enter your e-mail" id="signinemail" style={{ border: 'none', backgroundColor: 'rgb(159, 179, 197)' }} />
                        <hr />
                        <div className="label">
                            <label htmlFor="email">Get OTP</label>
                        </div>
                        <pre style={{ fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                            <a href="">Login via Password</a>
                            By continuing you agree to our <a href="">Terms of service</a> and <a href="">privacy policy</a>
                        </pre>
                    </div>
                    <hr />
                    <div className="side2">
                        <div style={{ height: '20%', width: '80%', borderRadius: '5px', display: 'flex', backgroundColor: 'cornflowerblue', overflow: 'hidden' }}>
                            <div style={{ width: '30%', height: '100%' }}>
                                <img src="" alt="" />
                            </div>
                            <div style={{ width: '70%', backgroundColor: 'cornflowerblue', height: '100%', borderBottomRightRadius: '5px', borderTopRightRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bolder' }}>Sign in</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
