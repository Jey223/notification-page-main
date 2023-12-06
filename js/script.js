const markAll = document.getElementById('mark-all');
const msgBoxs = document.querySelectorAll('.msgbox');
const numMsg = document.getElementById('num-of-msg')

function removeMessages() {
    msgBoxs.forEach((msgBox) => {
        const redDot = msgBox.querySelector('.red-dot')
        msgBox.style.backgroundColor = 'white';
        msgBox.style.boxShadow = 'none';
        if(redDot) {
            redDot.style.display = 'none';
            console.log(redDot);
        }
    })
}

const readAll = () => {
    if(numMsg.innerHTML != '0') {
        numMsg.textContent = '0'
            removeMessages();
    }
   
}


msgBoxs.forEach((msgBox) => {
    const aTags = msgBox.querySelectorAll('a');
    const redDot = msgBox.querySelector('.red-dot')

    aTags.forEach ((aTag) => {
        aTag.addEventListener('click', () => {
            if ((msgBox.style.backgroundColor != 'white') && (msgBox.style.boxShadow != 'none')){
                msgBox.style.backgroundColor = 'white';
                msgBox.style.boxShadow = 'none';
                if(redDot) {
                    redDot.style.display = 'none';
                    console.log(redDot);
                }
                const numMsgValue = numMsg.innerHTML;
                const num = parseInt(numMsgValue);
                const numValue = num - 1;
                console.log(numValue)
                numMsg.textContent = numValue;
            }
           

        });
    })
    
})

markAll.addEventListener('click', readAll)

// if (!('Notification' in window)) {
//     alert('This browser does not suppoert system notification');
// }

// Notification.requestPermission().then(function(permission) {
//     console.log(permission);
// })