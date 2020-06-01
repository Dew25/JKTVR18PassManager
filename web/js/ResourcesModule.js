import {httpModule} from './HttpModule.js'; 
import {authModule} from './authModule.js';
class ResourcesModule{
  printAddResourcesForm(){
    document.getElementById('content').innerHTML =
      `<div class="row w-100 d-flex justify-content-center">
          <div class="card w-50 border-primary p-2">
             <div class="card-header text-center">Добавление ресурса</div>
             <div class="card-body">
               <table class="w-100">
                 <tr>
                   <td class="d-flex justify-content-start">Адрес ресурса:</td>
                   <td class="d-flex justify-content-start"><input class="w-100" type="text" id="resource-url"  value=""></td>
                 </tr>
                 <tr>
                   <td class="d-flex justify-content-start">Логин:</td>
                   <td class="d-flex justify-content-start"><input class="w-50" type="text" id="login"  value=""></td>
                 </tr>
                 <tr>
                   <td class="d-flex justify-content-start">Пароль:</td>
                   <td class="d-flex justify-content-start"><input class="w-50" type="text" id="password"  value=""></td>
                 </tr>
                 <tr>
                   <td class="d-flex justify-content-start">Описание:</td>
                   <td class="d-flex justify-content-start"><textarea class="form-control" aria-label="Описание" id="description"></textarea></td>
                 </tr>

               </table>
               <p class="card-text">
                  <button class="btn btn-light w-100 mt-4" type="button" id="btnAddResource">Добавить</button>
               </p>
             </div>
          </div>
        </div>
      </div>`;
    document.getElementById("btnAddResource").onclick=function(){
      resourcesModule.createResource();
    }
  }
  createResource(){
    let resourceUrl = document.getElementById('resource-url').value;
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;
    let description = document.getElementById('description').value;
    let newResource = {
      "resourceUrl": resourceUrl,
      "login": login,
      "password": password,
      "description": description,
    }
    httpModule.http({url:'createResource', options: {method: 'POST', data: newResource}})
              .then(function(response){
                  if(response !== null && response.actionStatus === 'true'){
                      resourcesModule.printAddResourcesForm();
                      document.getElementById('info').innerHTML='Ресурс добавлен';
                  }else{
                      document.getElementById('info').innerHTML="Ошибка добавления ресурса";
                  }
              });
  }
}
let resourcesModule = new ResourcesModule();
export{resourcesModule};