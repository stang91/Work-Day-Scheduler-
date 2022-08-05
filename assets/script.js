

window.setInterval(function () {
    $('#currentDay').html(moment().format('LLLL'));
}, 1000);
// duplicate time block
let n =1;
let b =25;

for(var i=n; i<b; i++){  
    let moreInput= $('.custom-clone').clone().addClass('custom-hours'+i).removeClass('custom-clone');
    if (i%12===0){
        $('#addClass').text('12PM')
    }
    else if(i%24===0){
        $('#addClass').text('12AM')
    }
    else if(i%12!=i%24){
    let j=i%12;
    $('#addClass').text(j+'PM')
    }
    else if(i%12>0 && i%24){
        let j=i%12;
        $('#addClass').text(j+'AM')
    }
    
$('.container').append(moreInput);

$('.custom-hours'+[n]).remove();
};

//https://stackoverflow.com/questions/25680333/how-to-add-ids-to-tr-using-loop-in-jquery
$('.description').each(function(index){
    $(this).prop('id','content'+(index+(n-1)));
    $(this).siblings('.hour').prop('id','time'+(index+(n-1)));
});

let now=moment().hour();
 $('.description').each(function () {
    let blockTime=parseInt($(this).attr('id').split('content')[1]);
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