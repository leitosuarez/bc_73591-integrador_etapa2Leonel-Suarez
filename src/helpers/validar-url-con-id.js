const validUrlConId = (url,id)=> {
            let urlCompleta = ''
    
            const lastIndexUrl = url[url.length - 1]
            if (lastIndexUrl != '/') {
                urlCompleta = url + '/' + id
            } else {
                urlCompleta = url + id
            }

            return urlCompleta
        }

export default validUrlConId