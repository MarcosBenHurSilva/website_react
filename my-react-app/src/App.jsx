// props =  read-only properties that are shared between components.
//                A parent component can send data to a child component.
//                key=value

// propTypes = a mechanism that ensures that the passed value
//                        is of the correct datatype.
//                       age: PropTypes.number


// defaultProps = default values for props in case they are not
//                            passed from the parent component
//                            name: "Guest"

import Student from "./Student";

function App() {
    return(
      <>
        <Student name="Spoongebob" age={30} isStudent={true}/>
        <Student name="Patrick" age={41} isStudent={false}/>
        <Student name="Squidward" age={50} isStudent={false}/>
        <Student name="Sandy" age={27} isStudent={true}/>
        <Student age={20}/>
      </>
    );
}

export default App
