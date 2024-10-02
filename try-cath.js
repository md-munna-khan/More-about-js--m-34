function checkAge(){
    const ageField = document.getElementById('age')
    const ageText = ageField.value;
    const errorTag = document.getElementById("error")


    try{ 
       const age = parseInt(ageText);
       if(isNaN(age)){
       throw 'please inter a number'
    } else if(age <18){
        throw "bacha kacha not  allow"
    } else if ( age > 30){
        throw "murubbi not alow"
    }
errorTag.innerHTML = '';

}
    catch(err){
    console.log('error',err)
    errorTag.innerHTML = 'ERROR:'  + err
    }

    finally{
        console.log('all done inside try catch')
    }
    console.log(11111);
}