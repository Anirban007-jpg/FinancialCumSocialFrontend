import fetch from 'isomorphic-fetch';
import cookie from 'js-cookie';
import { useRouter } from 'next/navigation';
// import Router from 'next/router';


export const handleResponse = response => {
    const router = useRouter();
    if (response.status === 401) {
        signout(() => {
            router.push({
                pathname: '/',
                query: {
                    message: 'Your session is expired. Please signin'
                }
            });
        });
    } else {
        return null;
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

export const signin = company => {
    return fetch(`${process.env.DOMAIN}/login`, {
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
// set cookie
export const setCookie = (key, value) => {
    if (process.browser) {
        cookie.set(key, value, {
            expires: 1
        });
    }
};

export const removeCookie = key => {
    if (process.browser) {
        cookie.remove(key, {
            expires: 1
        });
    }
};
// get cookie
export const getCookie = key => {
    if (process.browser) {
        return cookie.get(key);
    }else {
        return false;
    }
};

export const signout = next => {
    removeCookie('token');
    removeLocalStorage('company');
    next();

    return fetch(`${process.env.DOMAIN}/signout`, {
        method: 'GET'
    })
        .then(response => {
            console.log('signout success');
        })
        .catch(err => console.log(err));
};


// localstorage
export const setLocalStorage = (key, value) => {
    if (process.browser) {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

export const removeLocalStorage = key => {
    if (process.browser) {
        localStorage.removeItem(key);
    }
};
// autheticate user by pass data to cookie and localstorage
export const authenticate = (data, next) => {
    setCookie('token', data.token);
    setLocalStorage('company', data.company);
    next();
};

export const isAuth = () => {
    if (process.browser) {
        const cookieChecked = getCookie('token');
        if (cookieChecked) {
            if (localStorage.getItem('company')) {
                return JSON.parse(localStorage.getItem('company'));
            } else {
                return false;
            }
        }
    }else{
        return false;
    }
};

export const updateUser = (user, next) => {
    if (process.browser) {
        if (localStorage.getItem('user')) {
            let auth = JSON.parse(localStorage.getItem('user'));
            auth = user;
            localStorage.setItem('user', JSON.stringify(auth));
            next();
        }
    }
};

export const forgotPassword = company_registered_email => {
    return fetch(`${process.env.DOMAIN}/forgot-password`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(company_registered_email)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const resetPassword = resetInfo => {
    return fetch(`${process.env.DOMAIN}/reset-password`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(resetInfo)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};