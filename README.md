# Work-Day-Scheduler-
## Discription


## Table of Content

[Installation](#installation)
[Usage](#usage)
[Credit](#credit)
[License](#license)
[What-I-would-like-to-try](#what-I-would-like-to-try)
## Installation

[Scheduler]()
## Usage

![alt alt-img-names](websitelink)


## Credit
user - ![Oomph Fortuity](https://stackoverflow.com/users/1926762/oomph-fortuity)


from ![stackoverflow](https://stackoverflow.com/questions/25680333/how-to-add-ids-to-tr-using-loop-in-jquery
)


I did most of the coding myself, however, I wouldn't have been able to complete the assignment without the help from stackoverflow, without the user's help I wouldn't be able to complete it in time.  I used user's, Oomph Fortuity, example to use prop() method and each(function(){}) method to create the id attribute. instead of attr() method.


user - ![br3t](https://stackoverflow.com/users/1430631/br3t)


from ![stackoverflow](https://stackoverflow.com/questions/42963091/how-to-save-the-value-of-textarea-to-localstorage-then-display-it-in-the-same-te)


I also used user's,br3t, example on how to loop getItem() and setItem() using localStorage.  For some apparent reason I just can't wrap my head around the concept.  I spent hours trying to figure out how to code it, and always end up over complicated it. hopefully I finally understand it.  It just might've been me over thinking it.

## What-I-would-like-to-do-or-try
I would like to improve on this code because I feel that i can still tweek it a little more my gut says that it's not clean enough.



<code>
    let n =5;
    let b =22;

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

    //remove cloning time block
    $('.custom-clone').remove();

</code>




I need to study more about localStorage, it seems easy to understand however I just can't seem to wrap my mind around it. 




<code>
    for (var i = n; i < (b+1); i++) {

        //get stored content 

      $('#content'+i).val(localStorage.getItem('content'+i));
    }

    $('.saveBtn').click(function() {

        $(this).siblings('.description').removeClass('notSaved').addClass('Saved');


        // Save data to localstorage


        for (var i = n; i < (b+1); i++) {
            localStorage.setItem('content'+ i, $('#content'+i).val());
        }
      });
</code>