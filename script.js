// Arrays that stores the messages to display
const adj = ['beautiful', 'amazing', 'bright', 'charming', 'creative', 'hardworking', 'kind', 'nice', 'passionate', 'persistent', 'excellent', 'favorable', 'incredible', 'unique', 'outstanding', 'remarkable', 'stunning'];

const subject = ['person', 'human', 'human being', 'individual', 'soul', 'mortal', 'creature', 'fellow', 'personage', 'character', 'fella', 'figure', 'chap', 'specimen', 'self', 'spirit'];

const message = ['Love For All, Hatred For None.', 'Change the world by being yourself.', 'Every moment is a fresh beginning.', 'Never regret anything that made you smile.', 'Die with memories, not dreams.', 'Aspire to inspire before we expire.', 'Everything you can imagine is real.', 'Simplicity is the ultimate sophistication.', 'Whatever you do, do it well.', 'What we think, we become.', 'All limitations are self-imposed.', 'Tough times never last but tough people do.', 'Problems are not stop signs, they are guidelines.', 'If you tell the truth you don’t have to remember anything.', 'Have enough courage to start and enough heart to finish.', 'Hate comes from intimidation, love comes from appreciation.', 'Determine your priorities and focus on them.', 'Be so good they can’t ignore you.', 'Dream as if you’ll live forever, live as if you’ll die today.', 'Yesterday you said tomorrow. Just do it.', 'Never let your emotions overpower your intelligence.'];

// Choose an index of the parameter array an returns the element at it
const choose = arr => {
    let i = Math.floor(Math.random() * arr.length);
    return arr[i];
}

// Saves the current date 
const date = new Date();

const today = () => {
    let month = '';
    switch(date.getMonth()) {
        case 0:
            month = 'January';
        break;
        case 1:
            month = 'February';
        break;
        case 2:
            month = 'March'
        break;
        case 3:
            month = 'April';
        break;
        case 4:
            month = 'May';
        break;
        case 5:
            month = 'June';
        break;
        case 6:
            month = 'July';
        break;
        case 7:
            month = 'August';
        break;
        case 8:
            month = 'September';
        break;
        case 9:
            month = 'October';
        break;
        case 10:
            month = 'November';
        break;
        case 11:
            month = 'December';
        break;console.log(today());
        default:
            console.log('Something wrong happened');
        break;                                            
    }
    return `Today is: ${month} ${date.getDate()} year ${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`;
}

const display = () => {
    console.log(`${today()} and we want to say that: \nYou ${choose(subject)} are ${choose(adj)} and keep this message in mind: \n${choose(message)}`);
}

display();