(() => {

    // Example
    // Files to evaluate
    const filesToEvaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ]; 
    
    // Files to delete
    const filesToDelete = filesToEvaluate.map( file => file.flagged );

    // Bads Names
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Good Names
    class User { };
    interface User { };


    // Todo: Task
        
    // día de hoy - today
    const today = new Date();
    
    //  elapsed time in days
    const elapsedTimeInDays: number = 23;
    
    // number of files in directory
    const numberOfFilesDirectory = 33;
    
    //  first name
    const firstName = 'Fernando';
    
    //  last name
    const lastName = 'Herrera';

    // - days since modification
    const daysSinceLastModification = 12;
    
    //  max classes per student
    const maxClassPerStudent = 6;


})();
