function Menu()
{
    var menu = document.getElementById('menu')
    var conteudo = document.getElementById('conteudo')
    var cabecalho = document.getElementById('cabecalho')

    if(menu.style.width == '0px')
    {
        menu.style.width = '250px'
        conteudo.style.marginLeft = '250px'
        cabecalho.style.marginLeft = '250px'
    }
    else
    {
        menu.style.width = '0px'
        conteudo.style.marginLeft = '0px'
        cabecalho.style.marginLeft = '0px'
    }
}