export default ['storageService', ['$window', function ($window) {

    // DGE Token
    const setToken = (token) => {
        $window.localStorage['dve-auth'] = token;
    };

    const getToken = () => {
        return $window.localStorage['dve-auth'];
    };

    const clearToken = () => {
        $window.localStorage.removeItem('dve-auth');
    };

    const setUsername = (username) => {
        $window.localStorage['username'] = username;
    };

    const getUsername = () => {
        return $window.localStorage['username'];
    }

    const clearUsername = () => {
        $window.localStorage.removeItem('username');
    };

    // TODO Current User Information

    return {
        setToken: setToken,
        getToken: getToken,
        clearToken: clearToken,
        setUsername: setUsername,
        getUsername: getUsername,
        clearUsername: clearUsername
    }
}]];
