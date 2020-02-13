// $(document).ready(() => {
//     //jquery
// })
// $(function)
$(() => {
    // let result = $('div')
    // let result = $('#paragraph')
    // let result = $('.myClass')
    // $('div').html('Hello Cruel World')
    // $('div').html("<h1 style='color:pink; font-size: 30px; background-color:grey;'>Hello Cruel World</h1>")
    // // console.log(result)
    let $anchor = $('<a>', {
        'class': 'nav-item',
        'text': 'Digital Crafts',
        'href': 'https://www.digitalcrafts.com/'
    });
    $('div').append($anchor)
    let $br = $('<br>')
    $('div').append($br)
    let $img = $('<img>', {
        'src': 'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/09/931/524/Rabbits_iStock.jpg?ve=1&tl=1',
        'alt': 'this is an image of bunnies'
    })
    $('div').append($img)
    // remove class
    // $('p').removeClass('myImage')
    // $('p').click(() => {
    //     alert('GET OUT MY SWAMP !!!')
    // })
    // $('p').on('click', () => {
    //     alert('GET OUT ME SWAMP !')
    // })
    // $('body').keydown((e) => {
    //     console.log(`Key Down: ${e.keyCode}`)
    // })
    // $('body').keyup((e) => {
    //     console.log(`Key Up: ${e.keyCode}`)
    // })
    let $inputCount = $('input')
    $('input').keyup((e) => {
        console.log($inputCount.val().length)
        $('#count').html($inputCount.val().length)
    })


})