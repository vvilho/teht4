$(function(){
    $('button').click(function(){
        $('#advice').text('select your favourite colour among the colours');
        $('#img1').attr('src','red.jpg');
        $('#img2').attr('src','blue.jpg');
        $('#img3').attr('src','yellow.jpg');
        $('#sel').text('your favourite colours in order');

    });

    $('img').click(function(){
        $(this).hide();
        $('#selection').append('<ul>'+$(this).attr('src').slice(0,-4)+'</ul>');

    });
});