const validUrlConId = (url,id)=> {
            let urlCompleta = ''
            if (url[-1] != '/') {
                urlCompleta = url + '/' + id
            } else {
                urlCompleta = url + id
            }

            return urlCompleta
        }

export default validUrlConId