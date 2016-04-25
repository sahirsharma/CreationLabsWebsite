
    $('#about-title').on('click', function(){
        $('div').removeClass('display-none');
    });

    $('#gep').on('click', function(){
        $('.gep-slide').removeClass('display-none');
        $('.internship-slide').addClass('display-none');
        $('.open-spots-slide').addClass('display-none');
    });

    $('#internship').on('click', function(){
        $('.internship-slide').removeClass('display-none');
        $('.gep-slide').addClass('display-none');
        $('.openspots-slide').addClass('display-none');
    });

    $('#openspots').on('click', function(){
        $('.openspots-slide').removeClass('display-none');
        $('.gep-slide').addClass('display-none');
        $('.internship-slide').addClass('display-none');
    });