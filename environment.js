const RELEASE_VERSION = '1.0.0'

var _Environments = {
    production: {
        env: "production",
        USER_URL: '',
        RELEASE: RELEASE_VERSION,
    },
    development: {
        env: "development",
        USER_URL: '',
        LOGS: true,
        RELEASE: RELEASE_VERSION,
    },
}

function getEnvironment() {
    var env = "development";
    return _Environments[env]
}
var Environment = getEnvironment()
module.exports = Environment
