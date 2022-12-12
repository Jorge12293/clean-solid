
(() => {


    
    function isRedFruit( fruit: string ): boolean {
        return ['manzana','cereza','ciruela'].includes(fruit);
    }


    type FruitColor = 'red' | 'yellow' | 'purple';
    function getFruitsByColor( color: FruitColor ): string[] {
        const fruitsByColor = {
            red: ['manzana','fresa'],
            yellow: ['piña','banana'],
            purple: ['moras','uvas'],
        }
        
       if(!Object.keys(fruitsByColor).includes(color)) {
         throw Error('the color must be: red, yellow, purple');
       }
       
       return fruitsByColor[color];
    }

    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps() {

        if(!isFirstStepWorking) return 'First step broken.';
        if(!isSecondStepWorking) return 'Second step broken.';
        if(!isThirdStepWorking) return 'Third step broken.';
        if(!isFourthStepWorking) return 'Working properly!';
        return 'Fourth step broken.';
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); 
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' });

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); 
    console.log({ yellowFruits: getFruitsByColor('yellow') }); 
    console.log({ purpleFruits: getFruitsByColor('purple') });

    // workingSteps
    console.log({ workingSteps: workingSteps() }); 


})();
