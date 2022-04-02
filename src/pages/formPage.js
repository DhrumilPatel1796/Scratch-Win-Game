import '../styles.css';
import moneybag from '../images/png/neon-moneybag-prize.png';

const FormPage = () => {
    return (

        <section id="main" className='main'>
            <main className="main-container">
                <div className="grid-x grid-padding-x">
                    <div id="advertisement-Panel" className='large-6 medium-6 small-12'>
                        <h1 className='brandName'>BuyMore Dollars</h1>
                        <h3 id="gameName">Scratch and Win Game</h3>
                        <p id="bmd-description">Sign up. Scratch! And claim your prize once every 72 hours.</p>
                        <img src={moneybag} id="prizeBag" alt="logo" />
                        <p className='bmd-prizes'>1 Prize of 10,000 BMD</p>
                        <p className='bmd-prizes'>5 Prizes of 750 BMD</p>
                        <p className='bmd-prizes'>10 Prizes of 100 BMD</p>
                        <p className='bmd-prizes'>100 Prizes of 20 BMD</p>
                    </div>
                    <div id="form-Panel" className="large-6 medium-6 small-12">
                        <h2 id="bmd-form-title">Create an account</h2>
                        <form id="bmd_form" action="#">
                            <fieldset>
                                <label for="firstName" className="firstName">First Name</label>
                                <input name="firstName" id="firstName" type="text" />
                                <p className="bmd-error" id="firstNameError"></p>
                            </fieldset>
                            <fieldset>
                                <label for="lastName" className="lastName">Last Name</label>
                                <input name="lastName" id="lastName" type="text" />
                                <p className="bmd-error" id="lastNameError"></p>
                            </fieldset>
                            <fieldset>
                                <label for="province" className="province">Province</label>
                                <select name="province" id="province">
                                    <option value="AB">Alberta</option>
                                    <option value="BC">British Columbia</option>
                                    <option value="MN">Manitoba</option>
                                    <option value="NB">New Brunswick</option>
                                    <option value="NL">Newfoundland and Labrador</option>
                                    <option value="NWT">Northwest Territories</option>
                                    <option value="NS">Nova Scotia</option>
                                    <option value="NU">Nunavut</option>
                                    <option value="ON">Ontario</option>
                                    <option value="PI">Prince Edward Island</option>
                                    <option value="QC">Quebec</option>
                                    <option value="SK">Saskatchewan</option>
                                    <option value="YK">Yukon</option>
                                </select>
                                <p className="bmd-error" id="provinceError"></p>
                            </fieldset>
                            <fieldset>
                                <label for="email" className="email">Email</label>
                                <input name="email" id="email" type="text" />
                                <p className="bmd-error" id="emailError"></p>
                            </fieldset>
                            <fieldset>
                                <label for="dob" className="dob">Date of Birth</label>
                                <input type="date" id="dob" name="dob" />
                                {/* <!-- <input name="Date of Birth" id="date" type="text" placeholder="Date">
                                <input name="Date of Birth" id="month" type="text" placeholder="Month">
                                <input name="Date of Birth" id="year" type="text" placeholder="Year"> --> */}
                                <p className="bmd-error" id="dobError"></p>
                            </fieldset>
                            <fieldset>
                                <label for="password" className="password">Password</label>
                                <input name="password" id="password" type="password" />
                                <p className="bmd-error" id="passwordError"></p>
                            </fieldset>
                            <fieldset id="bmd-consent-fieldset" class="large-7 cell">
                                <input id="bmd-consent" type="checkbox" /><label id="bmd-consent-label" for="bmd-consent">I consent to the terms and conditions.</label>
                            </fieldset>
                            <p className="bmd-error" id="bmdConsentError"></p>
                            <input type="submit" value="Let Me Play!" id="formSubmit" />
                        </form>
                    </div>
                </div>
            </main>
        </section>
    );
}

export default FormPage;
