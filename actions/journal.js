import fetch from 'isomorphic-fetch';

export const createJournalentries = (journal, token) => {
    return fetch(`${process.env.DOMAIN}/create-journal-entry`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body : JSON.stringify(journal)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};