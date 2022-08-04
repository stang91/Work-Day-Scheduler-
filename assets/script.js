window.setInterval(function () {
    $('#currentDay').html(moment().format('LLLL'));
}, 1000);


for(var i=1; i<12; i++){
    var r=i-1;
    var moreInput= $('.custom-clone').clone().addClass('custom-hours'+[i]).removeClass('custom-hours0 custom-clone');
    $('#addClass').addClass('time'+[i]).text([i]+' AM').removeClass('time'+[r]);
    $('.container').append(moreInput);
};
if ( i=12){
    var r=i-1;
    var moreInput= $('.custom-clone').clone().addClass('custom-hours'+[i]).removeClass('custom-hours0 custom-clone');
    $('#addClass').addClass('time'+[i]).text([i]+' PM').removeClass('time'+[r]);
    $('.container').append(moreInput);
};
for(var i=13; i<24; i++){
    var r=i-1;
    var w=i-12;
    var moreInput= $('.custom-clone').clone().addClass('custom-hours'+[i]).removeClass('custom-hours0 custom-clone');
    $('#addClass').addClass('time'+[i]).text([w]+' PM').removeClass('time'+[r]);
    $('textarea').attr('id','time-'+[i]);
    $('.container').append(moreInput);
};

