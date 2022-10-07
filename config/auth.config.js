module.exports = {
    accessToken:{
        salt:"secretKey",
        expired:"1min",
        type:"access"
    },
    refreshToken:{
        salt:"secretKey",
        expired:"3min",
        type: "refresh"
    }
}