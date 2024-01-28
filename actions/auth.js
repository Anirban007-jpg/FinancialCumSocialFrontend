
import fetch from 'isomorphic-fetch';
import cookie from 'js-cookie';
import Router from 'next/router';


export const handleResponse = response => {
    if (response.status === 401) {
        signout(() => {
            Router.push({
                pathname: '/signin',
                query: {
                    message: 'Your session is expired. Please signin'
                }
            });
        });
    }
};

// export const preSignup = user => {
//     return fetch(`${API}/pre-signup`, {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(user)
//     })
//         .then(response => {
//             return response.json();
//         })
//         .catch(err => console.log(err));
// };



export const signup = company => {
    return fetch(`${process.env.DOMAIN}/register`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(company)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};