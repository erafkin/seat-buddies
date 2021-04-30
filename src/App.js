import prepNames from './21s';
import { useState } from 'react';

const App = (props) => {
  const [firstName, changeFirstName] = useState("");
  const [lastName, changeLastName] = useState("");
  const [buddyLeft, changeBuddyLeft] = useState();
  const [buddyRight, changeBuddyRight] = useState();

  const findBuddies = (first_name, last_name) => {
    var buddyLeftTemp, buddyRightTemp;
    prepNames.forEach((name, index) => {
      if (name.first_name === first_name.toLowerCase() && name.last_name===last_name.toLowerCase()) {
        buddyLeftTemp = prepNames[index - 1];
        buddyRightTemp = prepNames[index + 1];
      }
    });
    if (!buddyLeftTemp && !buddyRightTemp){
      buddyLeftTemp = {first_name: "No buddy found", last_name: ""}
      buddyRightTemp = {first_name: "", last_name: " Are you sure you spelled your name correctly?"}
    } 
    changeBuddyLeft(buddyLeftTemp);
    changeBuddyRight(buddyRightTemp);
  }
  return (
    <div style = {{padding: '10%'}}>
      <h1>Grad buddies!</h1>
      <h2>Find out who you will be sitting next to at grad</h2>
      <p>first name:</p>
      <input type = "text" value={firstName} onChange={(e) => {changeFirstName(e.target.value)}} />
      <p>last name:</p>
      <input type = "text" value={lastName} onChange={(e) => {changeLastName(e.target.value)}}/>
      <br/>
      <br/>
      <div 
      tabIndex={0} 
      type="button" 
      onClick={() => {findBuddies(firstName, lastName)}}
      style = {{borderRadius: '7px', borderColor: 'black', borderStyle: 'solid', width: '15%', textAlign: 'center', padding: '5px'}}>
        find seat buddies
      </div>

      <p>{buddyLeft ? `buddy left: ${buddyLeft.first_name} ${buddyLeft.last_name}`: ""}</p>
      <p>{buddyRight ? `buddy right: ${buddyRight.first_name} ${buddyRight.last_name}` : ""}</p>

      <p>*This does not include 3/2s or people graduating early or late lol. so its more of a rough guesstimate</p>

    </div>
  );
}

export default App;
