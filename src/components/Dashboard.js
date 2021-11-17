import PrimerComponente from './PrimerComponente';
import { RecibirProps } from './RecibirProps';
import { useState } from 'react';
import { Navigate } from 'react-router';


const Dashboard = () => {//autorizado es una propiedad que se pasa para hacer el login

    const [result, setResult] = useState("");

    const handleResult = (newResult) => {
        setResult(newResult);
    }

    return (
        
            <div>
                <PrimerComponente handleResult={handleResult} />
                <RecibirProps result={result} />{/*} si se llama result, que tiene origen en otro componente hay que creale un estado: const [result, setResult] = useState("");{*/}
            </div>
        
    )
}

export default Dashboard;
