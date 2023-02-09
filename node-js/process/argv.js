const command = process.argv

if(command[2] == 'mulai') {
    console.log('application starting...');
} else if(command[2] == 'restart') {
    console.log('application restarting...');
} else {
    console.log('application not starting');
}