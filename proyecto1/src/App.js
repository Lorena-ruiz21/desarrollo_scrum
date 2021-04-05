import "./App.css";

import Profile from "./components/Profile/Profile";
import Section from "./components/section/section";
function App() {
  // const employees = [
  //   {
  //     name: "Julio Olvera",
  //     stack: ["NodeJS", "React", "Sass"],
  //     linkedin: "https://www.linkedin.com/in/julio-olvera-ortiz-b74737166/"
  //   },
  //{
    //     name: "Julio Ortiz",
    //     stack: ["NodeJS", "React", "Sass"],
    //     linkedin: "https://www.linkedin.com/in/julio-olvera-ortiz-b74737166/"
    //   },
  // ];
  return (
    <div className="App">
     <Section> 
        <p>Hola soy parrafo </p> 
        <p>Hola soy parrafo </p> 
        <p>Hola soy parrafo </p> 
        <p>Hola soy parrafo</p> 
     </Section>
          {/* {employees.map((employee) => {
            return <Profile name={employee.name} stack={employee.stack} linkedin={employee.linkedin}/>;
          })} */}
          {/* <Profile>
            <h1>Soy el h1 children!</h1>
          </Profile> */}
    </div>
  );
}

export default App;
