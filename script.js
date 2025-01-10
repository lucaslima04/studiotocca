$(document).ready(function() 
{
    $('#mobilebtn').click(function() 
    {
        $('#mobilemenu').toggleClass('active');
            const img = $('#imgmenumob');
            const imgSrc = img.attr('src');
            if (imgSrc === "menu.svg") 
            {
                img.attr('src' , "x-symbol-svgrepo-com.svg");
            }
            else {
                img.attr('src' , "menu.svg")
            }
    });
});