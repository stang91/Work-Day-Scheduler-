window.setInterval(function () {
    $('#currentDay').html(moment().format('LLLL'));
}, 1000);


for(var i=1; i<12; i++){
    let moreInput= $('.custom-clone').clone().addClass('custom-hours'+[i]).removeClass('custom-hours0 custom-clone');
    $('#addClass').text([i]+' AM');
    $('.container').append(moreInput);
};
if ( i=12){
    let moreInput= $('.custom-clone').clone().addClass('custom-hours'+[i]).removeClass('custom-hours0 custom-clone');
    $('#addClass').text([i]+' PM')
    $('.container').append(moreInput);
};
for(var i=13; i<24; i++){
    let w=i-12;
    let moreInput= $('.custom-clone').clone().addClass('custom-hours'+[i]).removeClass('custom-hours0 custom-clone');
    $('#addClass').text([w]+' PM');
    $('.container').append(moreInput);
};
if(i=24){
    let w=i-12;
    let moreInput= $('.custom-clone').clone().addClass('custom-hours'+[i]).removeClass('custom-hours0 custom-clone');
    $('#addClass').text([w]+' AM');
    $('.container').append(moreInput);
};

$('.custom-hours1').remove();

//https://stackoverflow.com/questions/25680333/how-to-add-ids-to-tr-using-loop-in-jquery
$('.time-block').each(function(index){
    $(this).prop('id','time'+(index+1));
 });

let now=moment().hour()
 $('.time-block').each(function () {
    let blockTime=parseInt($(this).attr('id').split('time')[1]);

    // To check the time and add the classes for background indicators
    if (now < blockTime) {
        $(this).addClass('future');
    } else if (now === blockTime) {
        $(this).addClass('present');
    } else {
        $(this).addClass('past');
    }
    
});

$('.saveBtn').click(function(){
    let savedDataText=$(this).sibbling('.time-block').val();
    let time=$(this).sibbling('.description').text();
    let savedObj={
        savedTime: time,
        textData: savedDataText
    }
    localStorage.setItem('savedObj',JSON.stringify(savedObj));
});

