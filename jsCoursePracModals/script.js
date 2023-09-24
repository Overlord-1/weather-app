document.querySelector('.collectionButtons').addEventListener('click',function(details){
    let a = details.target.classList[1];
    if(a != undefined || details.target.classList[0] === undefined )
    {
        document.querySelector('.modal').classList.remove('hidden');
        document.querySelector('.overlay1').classList.remove('hidden');
    }
});
document.addEventListener('keydown', evt =>{
    if(evt.key === 'Escape')
    {
        document.querySelector('.modal').classList.add('hidden');
        document.querySelector('.overlay1').classList.add('hidden');
    }
})
document.querySelector('.close-modal').addEventListener('click',function()
{   
    document.querySelector('.overlay1').classList.add('hidden');
    console.log(`button  X has been pressed ` );
    document.querySelector('.modal').classList.add('hidden');
});