const search = function(){
    const input = document.querySelector('.search-block > input')
    const seatchBtn = document.querySelector('.search-block > button')
    console.log(input);
    console.log(seatchBtn);
    // input.addEventListener('input', (event) => {
    // })

    input.addEventListener('click', (event) =>{
        console.log(event.target.value);
    } )
}



search();