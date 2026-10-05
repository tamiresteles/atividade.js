// Exercício 8 - Você cumpre as suas promessas?

function simulaPromise(sucesso) {

    let promise = new Promise((resolve, reject) => {

        if (sucesso) {
            resolve('ok');
        } else {
            reject('not ok');
        }

    });

    promise
        .then(data => console.log(data))
        .catch(data => console.log(data));
}

simulaPromise(false);
simulaPromise(true);
