// Conditional rendering = allows you to control what gets rendered 
//                         in your application based on certain conditions. 
//                         (ex. show, hide, or change components)

import UserGreeting from './UserGreeting.jsx';

function App() {
    return(
      <>
        <UserGreeting isLoggedIn={true} username="Marcos"/>
        <UserGreeting/>
        <UserGreeting isLoggedIn={true}/>
        <UserGreeting username="Marcos"/>
      </>
    );
}

export default App
