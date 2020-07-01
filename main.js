const BTNGETTOKEN = "btn-gettoken";

const tokenContainer = document.getElementsByClassName("token-container")[0]
const btnGetToken = document.getElementsByClassName(BTNGETTOKEN)[0]
const token = document.getElementById("token")
const signinBtn = document.getElementsByClassName("g-signin2")[0];

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId());
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
  
  afterSignIn()
}

function afterSignIn() {
  signinBtn.setAttribute("class", "none")
  tokenContainer.setAttribute('class', 'token-container')
  btnGetToken.addEventListener('click', e => {
    e.target.setAttribute('class', `none`)
    token.setAttribute('class', '')
  })
}
