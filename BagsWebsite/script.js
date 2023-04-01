const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');

if(bar)
{
    //if anyone click event is happening
    bar.addEventListener('click',() =>
    {
        nav.classList.add('active');
    })
}


if(close)
{
    //if anyone click event is happening to close
    close.addEventListener('click',() =>
    {
        nav.classList.remove('active');
    })
}
