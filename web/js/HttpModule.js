/*  fetch немножко параноик и по умолчанию не 
*   передаёт куки от сайта, на который 
*   отправляется запрос (а идентификатор 
*   сессии хранится в куке PHPSESSID, или JSESSIONID). 
*   За передачу кук и заголовков авторизации 
*   отвечает опция credentials, которая может 
*   иметь одно из следующих значений:
*     'omit' (по умолчанию) — не передавать куки и заголовки авторизации;
*     'same-origin' — передавать, только если домен, на который 
*       отправляется запрос, совпадает с доменом текущего сайта 
*       (точнее, origin; сложный случай, но текущего вопроса не касается, 
*       так что не буду его подробно описывать);
*     'include' — передавать.
*/
class HttpModule{
    status(response) {  
        if (response.status >= 200 && response.status < 300) {  
          return Promise.resolve(response)  
        } else {  
          return Promise.reject(new Error(response.statusText))  
        }  
    }
    json(response) {  
        return response.json()  
    }
    parseOptions(opt){
        if(opt.method === 'POST'){
            return {
                method: opt.method,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                credentials: 'include',
                body: JSON.stringify(opt.data)
            };
        }else{
            return {
                method: opt.method,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                credentials: 'include'
            };   
        }
    }
    //POST запрос формат: httpModule.http({url:'createUser',options:{method:'POST',data:user}})
    //GET запрос формае: httpModule.http({url:'listUsers',options:{method:'GET'}})
    http(httpOptions){
        let options = httpModule.parseOptions(httpOptions.options);
        return fetch(httpOptions.url, options)
                .then(httpModule.status)
                .then(httpModule.json)
                .catch((ex) => console.log("Получена ошибка от сервера: ", ex));
    }
}
let httpModule = new HttpModule();
export{httpModule};


