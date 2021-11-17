import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { RecibirProps } from './RecibirProps';

export default function PrimerComponente({handleResult})  {

    /*****ESTADOS******/
    //creando el estado. el primer hook
    const [num1, setNum1] = useState("");//[] usa dos variables, 1ro quien almacena el estado y 2do quien setea el estado. en useState()se coloca el valor con el q se va inicializar el estado
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("");

    
    //función expresada
    const handlerNum1 = (e) =>  setNum1(e.target.value);// esto talvez de se puede hacer como en el PersonForm.js del proyecto clase_react_1 línea 70 (handlerValue())
    const handlerNum2 = (e) =>  setNum2(e.target.value);

    //punto de montaje
    useEffect(() => {// esto es un hook de punto de montaje. se emvian dos parametros 1. una función flecha de lo que se va a ejecutar. 2. un arreglo vacio

        console.log("creación de componente");

    }, []);


    useEffect(()=>{
        console.log("Actualizando el segundo input");
    }, [num2]);// al parecer el segundo parámetro debe ser un arreglo. siempre?

    /* LA MIA const suma = (num1, num2) => {
        return(num1 + num2);
    }*/

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!(num1 === "") && !(num2 ==="")){
            //setResult(parseInt(num1) + parseInt(num2));
       <br/>
            handleResult(parseInt(num1) + parseInt(num2));
        }else{
            console.log("faltan campos");
        }
    }
    
    
    return (
        <>
            <h1>Mi primer Componente con hooks</h1>
            {/*formulario calculadora */}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formNum1">
                    <Form.Control  value = {num1} type="number" onChange= {handlerNum1} placeholder="Ingrese el primer número" />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formNum2">
                    
                    <Form.Control value = {num2} onChange = {handlerNum2} type="number" placeholder="Ingrese el segundo número" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Sumar
                </Button>
            </Form>
            {/*{!(result === "") ? (<span> Resultado: {result} </span>) :(<></>)}{/* if - else. Resultado mostrandolo localmente*/}
            {/*}{!(result === "") ? (<RecibirProps result = {result}/>) : (<></>)}{*/}
            
        </>
    )
}