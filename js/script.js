$(function () {
    $('#btn1').click(function () {
        var height = parseInt($('#height').val()) / 100;
        var weight = parseInt($('#weight').val());
        var bmi = 0;
        var str = '---';

        $('ul').removeClass();
        bmi = weight / (height * height);
        if (bmi >= 35) {
            str = '고도비만';
            $('ul').addClass('red');
        } else if (bmi >= 30) {
            str = '비만';
            $('ul').addClass('orange');
        } else if (bmi >= 25) {
            str = '과체중';
            $('ul').addClass('yellow');
        } else if (bmi >= 18) {
            str = '보통';
            $('ul').addClass('green');
        } else if (bmi <= 17) {
            str = '저체중';
            $('ul').addClass('aquamarine');
        } else {
            bmi = '---'
            alert('다시 입력해주세요.');
        }
        $('.bmi span').text(bmi);
        $('.status span').text(str);
    });


});