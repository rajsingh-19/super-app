import React, { useState } from "react";
import styles from "./login.module.css";
import loginImg from "../../assets/loginImg.png";

const Login = () => {
    const [registerForm, setRegisterForm] = useState({
        name: '',
        userName: '',
        email: '',
        mobile: ''
    });
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [errors, setErrors] = useState({});

        // Form validation logic
    const validateForm = () => {
        const validationErrors = {};

        if (!registerForm.name.trim()) {
        validationErrors.name = "Field is required.";
        };

        if (!registerForm.userName.trim()) {
            validationErrors.userName = "Field is required.";
        };

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(registerForm.email)) {
        validationErrors.email = "Field is required.";
        };

        if(registerForm.mobile.length < 10 ) {
            validationErrors.mobile = "Field is required.";
        };

        if (!checkboxChecked) {
            validationErrors.checkbox = "Field is required.";
        }

        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        };

        setRegisterForm({
            name: '',
            userName: '',
            email: '',
            mobile: ''  
        });
    };

    return (
        <div className={`${styles.loginContainer} flex dir-row`}>
            <div className={styles.bannerSection}>
                <img className={styles.img} src={loginImg} alt="login image banner" />
            </div>
            <div className={`${styles.loginSection} flex dir-col align-center`}>
                {/*         heading section     */}
                <div className={`${styles.headingContainer} flex dir-col`}>
                    <p>Super app</p>
                    <p>Create your new account</p>
                </div>
                <form onSubmit={handleRegister} className="flex dir-col align-center">
                    <div className={`${styles.inputContainer} flex`}>
                        <input className={`${styles.input} text-16 dm-sans font-wt-500 border-none outline-none`} type="text" name='name' value={registerForm.name} placeholder="Name" onChange={(e) => setRegisterForm({...registerForm, [e.target.name]: e.target.value})} />
                    </div>
                        {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
                    <div className={`${styles.inputContainer} flex`}>
                        <input className={`${styles.input} text-16 dm-sans font-wt-500 border-none outline-none`} name='text' value={registerForm.userName} placeholder="UserName" onChange={(e) => setRegisterForm({...registerForm, [e.target.name]: e.target.value})} />
                    </div>
                        {errors.userName && <p className={styles.errorMessage}>{errors.userName}</p>}
                    <div className={`${styles.inputContainer} flex`}>
                        <input className={`${styles.input} text-16 dm-sans font-wt-500 border-none outline-none`} type="email" name='email' value={registerForm.email} placeholder="Email" onChange={(e) => setRegisterForm({...registerForm, [e.target.name]: e.target.value})} />
                    </div>
                        {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
                    <div className={`${styles.inputContainer} flex`}>
                        <input className={`${styles.input} text-16 dm-sans font-wt-500 border-none outline-none`} type="number" name='mobile' value={registerForm.mobile} placeholder="Mobile" onChange={(e) => setRegisterForm({...registerForm, [e.target.name]: e.target.value})} />
                    </div>
                        {errors.mobile && <p className={styles.errorMessage}>{errors.mobile}</p>}
                    <div className="flex dir-row align-center m-t-15">
                        <input className={`${styles.checkbox} m-r-5`} type="checkbox" checked={checkboxChecked} onChange={(e) => setCheckboxChecked(e.target.checked)} />
                        <p className="text-grayClr">Share my registration data with Superapp</p>
                    </div>
                        {errors.checkbox && <p className={styles.errorMessage}>{errors.checkbox}</p>}
                    <div className={styles.btnContainer}>
                        <button type="submit" className={`${styles.btn} outline-none border-none font-wt-600 text-16 cursor-pointer`}>SIGN UP</button>
                    </div>
                </form>
                <div className={styles.tnc}>
                    <p>By clicking on Sign up. you agree to Superapp <span>Terms and</span></p>
                    <p><span>Conditions of Use</span></p>
                </div>
                <div className={styles.policy}>
                    <p>To learn more about how Superapp collects, uses, shares and</p>
                    <p>protects your personal data please head Superapp <span>Privacy</span></p>
                    <p><span>Policy</span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
