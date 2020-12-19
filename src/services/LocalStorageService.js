const LocalStorageService = (function() {
    var _service;

    function _getService() {
        if (!_service) {
            _service = this;
            return _service
        }
        return _service;
    }

    function _setToken(access_token) {
        localStorage.setItem('access_token', access_token);
    }

    function _getAccessToken() {
        return localStorage.getItem('access_token');
    }

    function _getRefreshToken() {
        return localStorage.getItem('refresh_token');
    }

    function _clearToken() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
    }

    return {
        getService: _getService,
        setToken: _setToken,
        getAccessToken: _getAccessToken,
        getRefreshToken: _getRefreshToken,
        clearToken: _clearToken
    }
})();

export default LocalStorageService;