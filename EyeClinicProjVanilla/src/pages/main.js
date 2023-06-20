// loginComponent.js

class LoginComponent {
    constructor() {
      this.database = [
        {
          username: "user1",
          password: "pass1"
        },
        {
          username: "user2",
          password: "pass2"
        }
      ];
  
      this.errors = {
        uname: "invalid username",
        pass: "invalid password"
      };
  
      this.renderForm();
    }
  
    handleSubmit(event) {
      event.preventDefault();
  
      const uname = document.forms[0].elements["uname"].value;
      const pass = document.forms[0].elements["pass"].value;
  
      const userData = this.database.find(user => user.username === uname);
  
      if (userData) {
        if (userData.password !== pass) {
          this.renderErrorMessage("pass");
        } else {
          this.setIsSubmitted(true);
        }
      } else {
        this.renderErrorMessage("uname");
      }
    }
  
    renderErrorMessage(name) {
      const errorMessages = document.getElementsByClassName("error");
  
      for (let i = 0; i < errorMessages.length; i++) {
        const message = errorMessages[i];
  
        if (message.dataset.name === name) {
          message.textContent = this.errors[name];
          message.style.display = "block";
        } else {
          message.style.display = "none";
        }
      }
    }
  
    renderForm() {
      const formContainer = document.getElementById("formContainer");
  
      const form = document.createElement("div");
      form.className = "login-form";
  
      const title = document.createElement("h2");
      title.className = "title";
      title.textContent = "Login";
  
      const formElement = document.createElement("form");
      formElement.onsubmit = this.handleSubmit.bind(this);
  
      const inputContainer1 = document.createElement("div");
      inputContainer1.className = "input-container";
  
      const label1 = document.createElement("label");
      label1.textContent = "Username";
  
      const input1 = document.createElement("input");
      input1.type = "text";
      input1.name = "uname";
      input1.required = true;
  
      const error1 = document.createElement("div");
      error1.className = "error";
      error1.dataset.name = "uname";
  
      inputContainer1.appendChild(label1);
      inputContainer1.appendChild(input1);
      inputContainer1.appendChild(error1);
  
      const inputContainer2 = document.createElement("div");
      inputContainer2.className = "input-container";
  
      const label2 = document.createElement("label");
      label2.textContent = "Password";
  
      const input2 = document.createElement("input");
      input2.type = "password";
      input2.name = "pass";
      input2.required = true;
  
      const error2 = document.createElement("div");
      error2.className = "error";
      error2.dataset.name = "pass";
  
      inputContainer2.appendChild(label2);
      inputContainer2.appendChild(input2);
      inputContainer2.appendChild(error2);
  
      const buttonContainer = document.createElement("div");
      buttonContainer.className = "button-container";
  
      const submitButton = document.createElement("input");
      submitButton.type = "submit";
      submitButton.value = "Submit";
  
      buttonContainer.appendChild(submitButton);
  
      formElement.appendChild(inputContainer1);
      formElement.appendChild(inputContainer2);
      formElement.appendChild(buttonContainer);
  
      form.appendChild(title);
      form.appendChild(formElement);
  
      formContainer.appendChild(form);
    }
  
    setIsSubmitted(isSubmitted) {
      this.isSubmitted = isSubmitted;
      // Add your logic for handling a successful login here
    }
  }
  
  const loginComponent = new LoginComponent
  