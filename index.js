const jwt = require('jsonwebtoken')

const SEGREDO = 'MeuSegredo123'

// Login
function gerarJwt(email) {
    // Gerando o token com Sing
    const jwtGerado = jwt.sign({ email }, SEGREDO, {expiresIn: '1h'})
    console.log(jwtGerado)
    return jwtGerado
}

// Demais operação que precisam de permissão
function validarJwt(token) {
    try {
        // Verificando o token com Verify
        const verificar = jwt.verify(token, SEGREDO)
        
        // Capturando o payload do token
        const decoded = jwt.decode(token)
        console.log(decoded)
        if(verificar){
            console.log('Sucesso, token válido')
        } else {
            throw new Error("Token inválido")
        }
    } catch (error) {
        console.error("Token inválido")
    }
}

const jwtGerado = gerarJwt("exemplo@exemplo.com")
validarJwt(jwtGerado)
validarJwt("eyJhbGciOiJIUzI1NiIsadasdasdassInR5cCI6IkpXVCJ9.eyJlbWFpbCI6asdasdasImV4ZW1wbG9AZXhlbXBsby5jb20iLCJpYXQiOjE3MzAyMTMxMDAsImV4cCI6MasdasdasdTczMDIxNjcwMH0.caeEi14ZcVHL4CMMj-jOq44o8xY_KW_Ek")