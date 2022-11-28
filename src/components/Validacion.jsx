import { useState, Fragment } from "react"; 
import App from '../App'; 
import Login from "./Login/Login";
export function Validacion(){ 

 
 

    const [text, setText] = useState(''); 

    const [isValid, setIsvalid] = useState(true); 

 
 
    const submitHandler= (e) =>{ 

        e.preventDefault(); 

        let user = document.getElementById('usuario').value; 
        let pass = document.getElementById('pass').value; 
       

 

        if(user === '' || pass === ''){ 

            alert("Debe digitar usuario y contraseña") 

        }else{ 

            const requestOptions = { 

                method: 'POST', 

                headers: {'Content-Type': 'application/json'}, 

                body: JSON.stringify({user:user, pass:pass}) 

            }; 

            //Enviar hacia el back 

            fetch("http://localhost:9890/login", requestOptions) 

            .then((response)=> response.json()) 

            .then((service)=>{ 

                console.log(service.mensaje); 

                setText(service.mensaje); 

                setIsvalid(false); 

            }) 

        } 

 
 

    } 

    if(isValid){ 

        return( 

            <Fragment> 

              <form onSubmit={submitHandler}> 

                  <div> 

                      <label htmlFor="usuario">Usuario:</label> 

                      <input name="usuario" type="text" placeholder="Usuario" required id="usuario"/> 

                      <label htmlFor="pass">Password:</label> 

                      <input name="pass" type="text" placeholder="Password" required id="pass"/> 

                      <button type="submit">Iniciar Sesión</button> 

                  </div> 

              </form> 

       

            </Fragment> 

          ); 

 
 

    }else{ 

        return( 

            <App/> 

        ); 

    } 

 
 

    

} 