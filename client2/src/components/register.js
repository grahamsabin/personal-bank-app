//This file will create a component for our records

import React, { isValidElement, useState } from "react";
import { useNavigate } from "react-router";
 
export default function Register() {
 const [form, setForm] = useState({
   name: "", //this is the initial field entry for name ... want to keep blank
   email: "", //intital for position
   password: "",
   //passwordConfirm: "", If i leave this here, it stays blank because I'm not storing
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();

   //come back to this -- function call to check if a password is valid
  //  if(validate()){

 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = {...form }; //re-apply this for user registration
   
   
   
    //SO This function will execute if the inputs are validated on input
 
      await fetch("http://localhost:5010/record/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPerson),
      })
      .catch(error => {
        window.alert(error);
        return;
      });
    
      setForm({ name: "", email: "", password: "", passwordConfirm: ""});
      navigate("/");
      
  //}
 };

 //function for a valid function
// validate = () => {
//   let input = this.state.input;
//   let errors = {};
//   let isValid = true;



//   if (typeof input["password"] !== "undefined" && typeof input["passwordConfirm"] !== undefined) {
    
//     if (input["password"] != input["passwordConfirm"]) {
//       isValid = false;
//       errors["password"] = "Passwords don't match";
//     }
//   }
//   return isValid; 
// }
 
 //This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Register Below!</h3>

     <form onSubmit={onSubmit}>

       <div className="form-group">
         <label htmlFor="name">Name</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>

       <div className="form-group">
         <label htmlFor="email">Email</label>
         <input
           type="text"
           className="form-control"
           id="email"
           value={form.email}
           onChange={(e) => updateForm({ email: e.target.value })}
         />
       </div>

       <div className="form-group">
         <label htmlFor="password">Password</label>
         <input
           type="password"
           className="form-control"
           id="password"
           value={form.password}
           onChange={(e) => updateForm({ password: e.target.value })}
         />
       </div>

       <div className="form-group">
         <label htmlFor="passwordConfirm">Confirm Password</label>
         <input
           type="password"
           className="form-control"
           id="passwordConfirm"
           value={form.passwordConfirm}
           //onChange={(e) => updateForm({ passwordConfirm: e.target.value })} //this keeps it from going to database
         />
       </div>



       <div className="form-group">
         <input
           type="submit"
           value="Sign Up"
           className="btn btn-primary"
         />
       </div>
     </form>

    {JSON.stringify(form.name)}
    {JSON.stringify(form.email)}
    {JSON.stringify(form.password)}


   </div>
 );
}