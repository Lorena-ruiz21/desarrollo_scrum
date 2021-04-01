import "./section.css";

import Profile from "./components/Profile/Profile";

function section() {
  const employees = (props)=> [
  {
     Servicio: "Agencia de presentacion de Programadores",
     Programas: ["NodeJS", "React", "Sass", "html", "javascripts", "oracle"],
    Universidad: "Autonoma del Estado de Mexico, Facultad de contaduria y administracion"
   },
  {
    Servicio: "Agencia Grupo 1",
    Programas: ["NodeJS", "React", "Sass", "html", "javascripts", "oracle"],
     Universidad: "Autonoma del Estado de Mexico, Facultad de contaduria y administracion"
    },
   ];
  return (
    <div className="section">
     
          { {employees.map((employee)} => 
            return <Profile Servicio={employee.Servicio} Programas={employee.Programas} Universidad={employee.Universidad}/>;
          })
          }
          { <profile>
            <h1> seccion uno</h1> => {props.children}
          </profile> }
    </div>
  );
}

export default section;
