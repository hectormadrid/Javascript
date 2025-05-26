/**
 * {
 * url: ...
 * bucket: amazon s3
 * port: 80
 * }
 */
 const config = {
    url: 'https://holamundo.io',
    bucket: 'amazon s3',
    port: 80
 }
function configurarAPI(url , bucket = 145 , port = 80) {
    return `${url}/${bucket}:${port}`;

}
//console.log(configurarAPI());    
console.log(configurarAPI('https://holamuendo.io'));    