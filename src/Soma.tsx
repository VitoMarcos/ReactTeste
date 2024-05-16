import React, { useState } from 'react';

/*1 - Todo componente que criarmos precisa ter a primeira letra maiúscula.
  2 - Um componente deve ser uma função.
  3 - Um componente deve retornar apenas um elemento pai HTML
  4 - O componente deve ser exportado
*/

function Soma() {

    const [contador, setContador] = useState(0);

    function Clilcar(){
        setContador(contador + 1);
        console.log(contador);
    }


  return (
    <div>
    
    <label>Caixa 1:</label>
     <input type="number" />
     <label>Caixa 2: </label>
     <input type="number" />
   
     <button onClick={Clilcar}>Calcular</button>
    
    </div>
  );
}

export default Soma;
