/* Methods
//CREATING A CONSTRUCTOR FOR CLASS BASED COMPONENTS
constructor(props) {
    super(props);
    this.state = {name: 'coconut', age:20};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

//EVENT HANDLERS

//FORMS https://reactjs.org/docs/forms.html

//FOR MULTIPLE FORM ENTRY
handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.name);
  };
  
  */
