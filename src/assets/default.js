/**
 * Autonomum v.1
 * 
 * Centralização de definições padrão
 * neste arquivo.
 * 
 */

const defaultFont = (fontWeight) => {
    return 'TitilliumWeb-' + fontWeight;
}

/**
 * Objeto mock
 */

const Mock = {
    'userPicture': require('./../assets/navbar/img/perfil.jpeg')
}
export {
    defaultFont,
    Mock
}
