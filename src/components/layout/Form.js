import React, { Component } from 'react';
import cardStyles from './css/cardStyles.css';
import formStyles from './css/formStyles.css';


 class Form extends Component { 


    render() {
        
        const openModal = (e, txt, content) => {
            this.txt = txt;
            this.content = content;
            console.log(this.content)
            // modal.style.display = 'block';
             modal.style.display = 'block';
             //console.log(modal.style.display = 'block')
             modalTitle.innerHTML =  this.txt;
             modalContent.innerHTML = this.content;
            }
        const submitToAPI = (e) => {
                e.preventDefault();
                openModal(null, 'Thanks', 'Submit was clicked. This is just a demo.');
            }

       const  closeModal =()=>{
            // console.log(123);
             modal.style.display = 'none';
           // modal.hide();
        }
      
       const clickOutside = (e) =>{
            if (e.target == modal)
            // modal.style.display = 'none';
            modal.hide();
        }

        

           //Get modal element
           let modal = document.getElementById('simpleModal');
    
           // //Get open modal button
           let modalBtn = document.getElementById('modalBtn');
           // //Get close button
           let closeBtn = document.getElementsByClassName('closeBtn')[0];
         
           let modalContent = document.getElementById('modalBodyCopy');

           let modalTitle = document.getElementById('modalTitle');
          // modalContent.innerHTML = "hi";

          closeBtn.addEventListener('click', closeModal);
         
           let fromLocation;
       
    
        return (
            <div id="form-holder" className="card-content">
      
            <h2 id="form-heading">Start the conversation now: Find a health plan that's right for you.</h2>
            <form id="contact-form" className="form-grid" method="post">
            <div id="requiredField">
            <p className="legal">*Required Field</p></div>
            <div id="firstName"><h6>First Name*</h6>
            <input type="text" /*style=height:35px;"*/ id="name-input" placeholder="Enter first name here…" className="form-control" /></div>
            <div id="lastName">
            <h6>Last Name*</h6>
            <input type="text" /*style="height:35px;"*/ id="last-name-input" placeholder="Enter last name here…" className="form-control" /></div>
           <div id="phoneNumber">
            <h6>Phone</h6>
            <input type="phone" /*style="height:35px;"*/ id="phone-input" placeholder="(_) __ - ____" className="form-control"/></div>
            <div id="emailAddress">
            <h6>Email*</h6>
            <input type="email" /*style="height:35px;"*/ id="email-input" placeholder="Enter email here…" className="form-control"/></div>
            <div id="streetAddress">
            <h6>Address*</h6>
            <input type="text" /*style="height:35px;"*/ id="address-1-input" placeholder="Number, Street name" className="form-control" /></div>
            <div id="city">
            <h6>City*</h6>
            <input type="text" /*style="height:35px;"*/ id="city-input" placeholder="City" className="form-control" /></div>
            <div id="state">
            <h6>State*</h6>
            <select /*style="height:35px;"*/ id="state-select" form ="contact-form" className="form-control state-form-control" /*style="width:50%;"*/>
            <option defaultValue="" disabled selected>Select</option>
            <option defaultValue="AL">AL</option>
            <option defaultValue="AK">AK</option>
            <option defaultValue="AZ">AZ</option>
            <option defaultValue="AR">AR</option>
            <option defaultValue="CA">CA</option>
            <option defaultValue="CO">CO</option>
            <option defaultValue="CT">CT</option>
            <option defaultValue="DE">DE</option>
            <option defaultValue="DC">DC</option>
            <option defaultValue="FL">FL</option>
            <option defaultValue="GA">GA</option>
            <option defaultValue="HI">HI</option>
            <option defaultValue="ID">ID</option>
            <option defaultValue="IL">IL</option>
            <option defaultValue="IN">IN</option>
            <option defaultValue="IA">IA</option>
            <option defaultValue="KS">KS</option>
            <option defaultValue="KY">KY</option>
            <option defaultValue="LA">LA</option>
            <option defaultValue="ME">ME</option>
            <option defaultValue="MD">MD</option>
            <option defaultValue="MA">MA</option>
            <option defaultValue="MI">MI</option>
            <option defaultValue="MN">MN</option>
            <option defaultValue="MS">MS</option>
            <option defaultValue="MO">MO</option>
            <option defaultValue="MT">MT</option>
            <option defaultValue="NE">NE</option>
            <option defaultValue="NV">NV</option>
            <option defaultValue="NH">NH</option>
            <option defaultValue="NJ">NJ</option>
            <option defaultValue="NM">NM</option>
            <option defaultValue="NY">NY</option>
            <option defaultValue="NC">NC</option>
            <option defaultValue="ND">ND</option>
            <option defaultValue="OH">OH</option>
            <option defaultValue="OK">OK</option>
            <option defaultValue="OR">OR</option>
            <option defaultValue="PA">PA</option>
            <option defaultValue="RI">RI</option>
            <option defaultValue="SC">SC</option>
            <option defaultValue="SD">SD</option>
            <option defaultValue="TN">TN</option>
            <option defaultValue="TX">TX</option>
            <option defaultValue="UT">UT</option>
            <option defaultValue="VT">VT</option>
            <option defaultValue="VA">VA</option>
            <option defaultValue="WA">WA</option>
            <option defaultValue="WV">WV</option>
            <option defaultValue="WI">WI</option>
            <option defaultValue="WY">WY</option>
              </select>	
              </div>
               <div id="zip">
            <h6>ZIP code*</h6>
            <input type="text" /*style="height:35px;" */ id="zip-input" placeholder="00000" className="form-control state-form-control" /></div>
        <div id="checkbox-holder">
            <input type="checkbox" id="c1" name="agreement" required /> <span className="agree-terms">Yes, I have read and agree to the <a href="#ca">Calling Agreement</a> below.<br /></span>
          </div>
            <button id="btn-submit" type="button" onClick={submitToAPI} className="btn btn-lg" /*style="margin-top:20px;"*/>Submit</button> 
        </form>
        </div>
        )
    }
}

export default Form;