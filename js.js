$('#clearLast').on('click',function () { 
    //get the input's value
    var textVal = $('#calcScreen').val();
    //set the input's value
    $('#calcScreen').val(textVal.substring(0,textVal.length - 1));
});