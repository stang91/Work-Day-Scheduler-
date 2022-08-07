# Work-Day-Scheduler-
## Discription

Life have always been busy and sometimes it can be hectic.  To combat the disarray, I created a work schedule so I can be a little more organize.  It allows me to keep track of my tasks at hand and helps me organize my thoughts and workflow.  

## Table of Content

[Installation](#installation)
[Usage](#usage)
[Credit](#credit)
[License](#license)
[What-I-would-like-to-try](#what-I-would-like-to-try)

## Installation

[Scheduler](https://stang91.github.io/Work-Day-Scheduler-/)

## Usage

![alt schedule](./assets/images/screenshots/ezgif.com-gif-maker1.gif)
## Credit

user - ![Oomph Fortuity](https://stackoverflow.com/users/1926762/oomph-fortuity)


from ![stackoverflow](https://stackoverflow.com/questions/25680333/how-to-add-ids-to-tr-using-loop-in-jquery
)


I did most of the coding myself, however, I wouldn't have been able to complete the assignment without the help from stackoverflow, without the users' help I wouldn't be able to complete it in time.  

I used user's, Oomph Fortuity, example to use prop() method and each(function(){}) method to create the id attribute. instead of attr() method.


user - ![br3t](https://stackoverflow.com/users/1430631/br3t)


from ![stackoverflow](https://stackoverflow.com/questions/42963091/how-to-save-the-value-of-textarea-to-localstorage-then-display-it-in-the-same-te)


I also used user's,br3t, example on how to loop getItem() and setItem() using localStorage.  For some apparent reason I just can't wrap my head around the localStorage.  I spent hours trying to figure out how to code it, and always end up over complicating it. Hopefully, I will finally understand it.  It might've been just me over thinking it.

## What-I-would-like-to-do-or-try

I would like to improve on this code because I feel that I can still tweek it a little more my gut says that it's not clean enough.


<code>

    let startTime =8;
    let endTime =18;

    //duplicate time block and insert class and text
    
    for(var i=startTime; i<(endTime+2); i++){  

    //clone time block and adding and removing class
    
    let cloneTimeBlock= $('.custom-clone').clone().addClass('custom-hours'+i).removeClass('custom-clone');

    //reasoning and logic for adding text to time indicator
    
    if (i%24===0){
        $('#addClass').text('12AM');
    }
    
    else if(i%12===0){
        $('#addClass').text('12AM');
    }

    else if(i%12!=i%24){
    let numberTime=i%12;
    $('#addClass').text(numberTime+'PM');
    }

    else {
        let numberTime=i%12;
        $('#addClass').text(numberTime+'AM');
    }

    // append clone to div container

    $('.container').append(cloneTimeBlock);

    //removes original empty clone

    $('.custom-hours'+startTime).remove();
    };

    //remove cloning time block
    $('.custom-clone').remove();
</code>


I need to study more about localStorage, it seems easy to understand, however, I just can't seem to wrap my mind around it, when I begin to use loops and statements.


<code>

    for (var i = startTime; i < (endTime+1); i++) {

        //get stored content 

      $('#content'+i).val(localStorage.getItem('content'+i));
    }

    $('.saveBtn').click(function() {

        $(this).siblings('.description').removeClass('notSaved').addClass('Saved');


        // Save data to localstorage


        for (var i = startTime; i < (endTime+1); i++) {

            localStorage.setItem('content'+ i, $('#content'+i).val());
        }
      });
</code>


I would also like to add some modal so the user can change the time table, add some tags for tasks, and  order the tasks in the orders of urgency.

I would also like to add strikeouts to completed tasks and a lists tasks with completed, WIP, etc.

I would also like to link up a calender to set deadlines for projects.