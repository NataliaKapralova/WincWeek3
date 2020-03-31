const huisWerkMaken = (vak, callback) => {
    setTimeout(function() {
    console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken` )
    callback();
    } , 2000); 
};


const klaarMetHuiswerk = () => { 
console.log('Kijk mams, ik ben klaar met mijn huiswerk'); 
}; 


huisWerkMaken("wiskune" , klaarMetHuiswerk); 