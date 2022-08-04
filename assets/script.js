window.setInterval(function () {
    $('#currentDay').html(moment().format('LLLL'));
}, 1000);
// duplicate time block
let n =5;
let b =23;
for(var i=n; i<12; i++){
    let moreInput= $('.custom-clone').clone().addClass('custom-hours'+[i]).removeClass('custom-clone');
    $('#addClass').text([i]+'AM');
    $('.container').append(moreInput);
};
if (i=12){
    let moreInput= $('.custom-clone').clone().addClass('custom-hours'+[i]).removeClass('custom-clone');
    $('#addClass').text([i]+'PM')
    $('.container').append(moreInput);
};
for(var i=12; i<b; i++){
    let w=i-12;
    let moreInput= $('.custom-clone').clone().addClass('custom-hours'+[i]).removeClass('custom-clone');
    $('#addClass').text([w]+'PM');
    $('.container').append(moreInput);
};
if(i=b){
    let w=i-12;
    let moreInput= $('.custom-clone').clone().addClass('custom-hours'+[i]).removeClass('custom-clone');
    $('#addClass').text([w]+'AM');
    $('.container').append(moreInput);
};

$('.custom-hours'+[n]).remove();

//https://stackoverflow.com/questions/25680333/how-to-add-ids-to-tr-using-loop-in-jquery
$('.description').each(function(index){
    $(this).prop('id','time'+(index+(n+1)));
});

let now=moment().hour();
 $('.description').each(function () {
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
    
});

$('.btnClear').click(function(){

    $('.description').each(function(){
        $(this).empty();
    });
    localStorage.clear();
});