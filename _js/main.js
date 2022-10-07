closeAbas();
let btn1Button = document.querySelector('#btn1Button').addEventListener('click', () =>
{
    
    closeAbas();

    let containerSobreMim = document.querySelector('#containerSobreMim').style.display = 'block'

}); 

let btn2Button = document.querySelector('#btn2Button').addEventListener('click', () =>
{
    
    closeAbas();

    let conteinerHabilidades = document.querySelector('#conteinerHabilidades').style.display = 'block'

});

let btn3Button = document.querySelector('#btn3Button').addEventListener('click', () =>
{
    
    closeAbas();

    let conteinerExperiencia = document.querySelector('#conteinerExperiencia').style.display = 'block'

});

function closeAbas()
{

    let containerSobreMim = document.querySelector('#containerSobreMim').style.display = 'none'


    let conteinerHabilidades = document.querySelector('#conteinerHabilidades').style.display = 'none'


    let conteinerExperiencia = document.querySelector('#conteinerExperiencia').style.display = 'none'
    
}