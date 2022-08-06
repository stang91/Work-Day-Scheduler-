window.setInterval(function () {
    $('#currentDay').html(moment().format('LLLL'));
}, 1000);
// duplicate time block
let n =5;
let b =25;
//duplicate time block and insert class and text
for(var i=n; i<(b+2); i++){  
    //clone time block and adding and removing class
    let cloneTimeBlock= $('.custom-clone').clone().addClass('custom-hours'+i).removeClass('custom-clone');
    //reasoning and logic for adding text to time indicator
    if (i%12===0){
        $('#addClass').text('12PM');
    }
    else if(i%24===0){
        $('#addClass').text('12AM');
    }
    else if(i%12!=i%24){
    let j=i%12;
    $('#addClass').text(j+'PM');
    }
    else {
        let j=i%12;
        $('#addClass').text(j+'AM');
    }
    // append clone to div container
    $('.container').append(cloneTimeBlock);
    //removes original empty clone    
    $('.custom-hours'+n).remove();
};

//https://stackoverflow.com/questions/25680333/how-to-add-ids-to-tr-using-loop-in-jquery
//add id attribute to description class and hour class
$('.description').each(function(index){
    //add id attr to content[i]
    $(this).prop('id','content'+(index+(n-1)));
    //replace #addClass id attribute to time[i]
    $(this).siblings('.hour').prop('id','time'+(index+(n-1)));
});
//remove cloning time block
$('.custom-clone').remove();

//change the description classes to background indicators
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

//https://stackoverflow.com/questions/42963091/how-to-save-the-value-of-textarea-to-localstorage-then-display-it-in-the-same-te
// create a loop for localstorage
for (var i = n; i < (b+1); i++) {
    //get stored content 
  $("#content"+i).val(localStorage.getItem("content"+i));
}

$('.saveBtn').click(function saveNotes() {
    $(this).siblings(".description").removeClass("notSaved").addClass("Saved");
    // Save data to localstorage
    for (var i = n; i < (b+1); i++) {
        ocalStorage.setItem("content"+ i, $("#content"+i).val());
    }
  });

$('.btnClear').click(function(){
    $('.description').val('');
    localStorage.clear();
});