import fetch from 'isomorphic-fetch';
import { handleResponse } from './auth';

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
            // handleResponse(response);
            return response.json();
        })
        .catch(err => console.log(err));
};


export const getLedgers = (token) => {
    return fetch(`${process.env.DOMAIN}/get-ledgers-specific`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getLedgersDetails = (data,token) => {
    return fetch(`${process.env.DOMAIN}/get-ledgers-details`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body : JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateLedgerBalance = (ledger, token) => {
    return fetch(`${process.env.DOMAIN}/update-closing-balances`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body : JSON.stringify(ledger)
    })
        .then(response => {
            // handleResponse(response);
            return response.json();
        })
        .catch(err => console.log(err));
};