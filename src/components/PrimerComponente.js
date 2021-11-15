import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function (PrimerComponente) {

    //creando el estado. el primer hook
    const [num1, setNum1] = useState(undefined);//[] usa dos variables, 1ro quien almacena el estado y 2do quien setea el estado. en useState()se coloca el valor con el q se va inicializar el estado
    const [num2, setNum2] = useState(undefined);

    
    //función expresada
    const handlerNum1 = (e) =>  setNum1(e.target.value);// esto talvez de se puede hacer como en el PersonForm.js del proyecto clase_react_1 línea 70 (handlerValue())
    const handlerNum2 = (e) =>  setNum2(e.target.value);
    
    
    return (
        <>
            <h1>Mi primer Componente con hooks</h1>
            {/*formulario calculadora */}
            <Form>
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
        </>
    )
}