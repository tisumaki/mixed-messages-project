let lists = {
    listCompliment: ['beautiful', 'wonderful', 'amazing', 'stunning', 'gorgeous', 'breathtaking'],
    listActivity: ['go outside', 'read a book', 'relax', 'do some exercise', 'message your friend'],
    listReminder: ['to drink enough water', 'to take care of yourself', 'you are not alone', 'to get enough sleep', 'to eat well']
};

const mixedCompliment = () => {
    const randomCompliment = lists.listCompliment[Math.floor(Math.random() * 5)];
    return `You look ${randomCompliment}!`
};

const mixedActivity = () => {
    const randomActivity = lists.listActivity[Math.floor(Math.random() * 5)];
    return `We suggest that you should ${randomActivity}.`
};

const mixedReminder = () => {
    const randomReminder = lists.listReminder[Math.floor(Math.random() * 5)];
    return `Remember ${randomReminder}!`
};

const mixedMessage = `Our message for you today is: ${mixedCompliment()} ${mixedActivity()} ${mixedReminder()}`
console.log(mixedMessage);