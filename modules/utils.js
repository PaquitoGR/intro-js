console.log('utils');

export const sumScores = (courses) => {
    return courses.reduce((accum, { score }) => {
        const resultado = accum + score;
        return resultado;
    }, 0);
};


export const suma = (a, b) => a + b;

export const calculadora = () => {
    let operando = 0;
  
    const sumar = (num) => operando += num;  
    const restar = (num) => operando -= num;
    const multiplicar = (num) => operando *= num;
    const dividir = (num) => operando /= num;
  
    return {
      sumar,
      restar,
      multiplicar,
      dividir,
    };
};

export default calculadora;

// exportar :
// export
// export default