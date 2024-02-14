import fetch from 'isomorphic-fetch';

export const createLedger = (ledger, token) => {
    return fetch(`${process.env.DOMAIN}/create-new-ledger`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body : JSON.stringify(ledger)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};