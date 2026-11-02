let scelta;


do{
    scelta = Number( prompt(`inserisci il numero corrispondente alla bevanda desiderata: 1 - acqua, 2 - coca cola , 3 - aranciata`));

    switch (scelta) {
        case 1:
            console.log(`è stata selezionata l'acqua`);
            break;

        case 2:
            console.log(`è stata selezionata coca cola`);
            break; 
            
            
        case 3:
            console.log(`è stata selezionata l'aranciata`);
            break;    
    
        default:
            console.log(`la scelta inserita non è valida, riprova`);
            
            break;
    }
}while (scelta < 1 || scelta > 3)

































/*  let num = Number(prompt(`inserisci il tuo numero per ottenere la tabellina `))

 let accoumulator = 0;
 let counter = 0;



 for (let i = 1 ; i <= num; i++) {
    if (i % 2 == 0) {
        console.log(i);
        
        
    } else{
        accoumulator = accoumulator + i;
        counter ++
    }
    
    
 }


 console.log(`accoumulator = ${accoumulator}`);
  console.log(`counter = ${counter}`);
   console.log(`risultato = ${accoumulator / counter} `); */
 


/* 
if (temperatura <= -10) {

    console.log(`copriti, perche fa mplto freddo`);
    
    
}else if (temperatura <= 0) {

    console.log(`oggi non fa freddo`);
    
    
} else if (temperatura < 20) {

    console.log(`non ci sono piu le mezze stagioni`);
    
    
} else if (temperatura < 30) {

    console.log(`mi dia qualcosa da bere`);
    
    
} else {

    console.log(`lu sole lu mare lu ientu`);
    
    
}  */ 



   /*  let description;


    switch (true) {
        case temperatura <= -10:
            description = `copriti, fa molto freddo`
             break;


        case temperatura <= 0:
            description = `oggi non fa molto freddo`
            break;

        case temperatura < 20:
            description = `non ci stanno le mezze stagione`
            break;

        case temperatura < 30:
            description = `mi dia da bere`
            break;


        
    
    
    
        default:
              description = `lu mare , lu sole, lu ientu`


        
    }


    console.log(description); */
    


