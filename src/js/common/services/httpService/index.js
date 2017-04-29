export default ['httpService', ['$http', function ($http) {

    const setAuthorizationHandler = () => {
        console.log('object');
    };

    const get = (endpoint, params) => {
        setAuthorizationHandler();
        return $http.call(
            null,
            {
                url: endpoint,
                method: 'GET',
                params: params
            }
        );
    };

    const post = (endpoint, params, data) => {
        setAuthorizationHandler();
        return $http.call(
            null,
            {
                url: endpoint,
                method: 'POST',
                params,
                data
            }
        );
    };

    const put = (endpoint, params, data) => {
        setAuthorizationHandler();
        return $http.call(
            null,
            {
                url: endpoint,
                method: 'PUT',
                params,
                data
            }
        );
    };

    const del = (endpoint, params) => {
        setAuthorizationHandler();
        return $http.call(
            null,
            {
                url: endpoint,
                method: 'DELETE',
                params: params
            }
        );
    };

    return {
        get: get,
        post: post,
        put: put,
        del: del
    }
}]];
