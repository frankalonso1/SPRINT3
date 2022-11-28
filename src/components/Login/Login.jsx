import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Validacion } from "../Validacion";


const Login = () => {
    const [state, setState]= useState ({
        usuario:"",
        pass:""
    });
    const navigate=useNavigate();
    const handleOnClick = () => {

        

        navigate("/dashboard")


    };

    const handleOnchange =(value, atributte) => {

        const copyState = {...state};
        copyState[atributte]=value;
        console.log("STATE =>", copyState)
        setState(copyState);

    }

    return (

    <form>

      
        <center>
            <img src="/public/assets/img/Instaya.png " class="rounded" alt="logo"/>
        </center>
            
       
       

    <div className="container"  align="center">
        <div className="row">
        <center>
             <div className="col-md-6">
                <div className="col-md-6">
                    <input type="text" class="form-control" placeholder="Username" 
                    aria-label="Username" aria-describedby="basic-addon1" value={state.username}>
                    </input>
                    </div>
                    <div className="col-md-6">
                        <input type="password" class="form-control" placeholder="Password" 
                        aria-label="Username" aria-describedby="basic-addon1" value={state.password} onChange={(event) =>handleOnchange(event.target.value, "password")} >
                        </input>
                    </div>
                    <div className="col-md-6">    
                        <button type="submit" class="btn btn-primary" onClick={() => handleOnClick()}>
                            Login
                        </button>
                    </div>
                </div>
            </center>
            </div>
        </div>    
    </form> )
       
};
    
export default Login;



