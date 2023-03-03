
let message = document.getElementById("message");
console.log(message);
message.innerHTML = "Hey, no sé si es rápido";

message.className = "messageOne";
setTimeout(()=>{
    message.className = "normal"
    let messageTwo = document.createElement('h1');
    messageTwo.innerHTML = "pero, de verdad me gustas.";
    messageTwo.className = "messageTwo"
    message.parentNode.appendChild(messageTwo);
    setTimeout(()=>{
        messageTwo.className = "normal"
        let messageThree = document.createElement('h1');
        messageThree.innerHTML = "Quiero estar contigo.";
        messageThree.className = "messageThree"
        messageTwo.parentNode.appendChild(messageThree);
        setTimeout(()=>{
            messageThree.className = "normal";
            messageThree.remove();
            messageTwo.remove();
            message.innerHTML = '';
            message.innerHTML = "Solo queda preguntar.";
            message.className = "messagePreFinal";
            setTimeout(() => {
                message.className = "normal"
                message.innerHTML = '';
                setTimeout(() => {
                    message.className = "messageFinal";
                    message.innerHTML = "¿Quieres ser mi novia?";
                    setTimeout(() => {
                        Swal.fire({
                            title: '¿Cuál es tu respuesta?',
                            showDenyButton: true,
                            confirmButtonText: 'Si, alch',
                            denyButtonText: `No, alv`,
                          }).then((result) => {
                            if (result.isConfirmed) {
                                window.open(
                                    "https://www.youtube.com/watch?v=C3w4zEhiytA", "_blank");
                            } else if (result.isDenied) {
                                window.open(
                                    "https://www.youtube.com/watch?v=sdkr7eCVHOE", "_blank");
                            }
                          })
                    }, 7000);
                }, 3000);
            }, 7000);

        },7000);
    },9000);
},6000);









