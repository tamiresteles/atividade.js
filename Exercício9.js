//Exercício 9 - Você cumpre as suas promessas em tempo?

function simulaPromise(sucesso, delay) {

    let promise = new Promise((resolve, reject) => {

        setTimeout(() => {

            if (sucesso) {
                resolve('ok');
            } else {
                reject('not ok');
            }

        }, delay);

    });

    promise
        .then(data => console.log(data))
        .catch(data => console.log(data));
}

simulaPromise(true, 2000);
simulaPromise(false, 1000);
