(() => {

    function getMovieById( idMovie: string ) {
        console.log({ idMovie });
    }


    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    function getActorBioById(id: string ) {
        console.log({ id });
    }
    
    interface Movie{ 
        cast: string[],
        description: string,
        title: string, 
        rating: number,  
    }

    function createMovie({cast,description,title,rating }:Movie) {
        console.log({ title, description, rating, cast });
    }


    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }


    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }):number => {
        if(isDead) return 1500;
        if(isSeparated) return 2500;
        return isRetired ? 3000 : 4000;
    }


})();