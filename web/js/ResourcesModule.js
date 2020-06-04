import {httpModule} from './HttpModule.js'; 
import {authModule} from './authModule.js';
class ResourcesModule{
  printAddResourcesForm(){
    document.getElementById('content').innerHTML =
      `<div class="row mt-5 w-100 d-flex justify-content-center">
          <div class="card w-50 border-primary p-2">
             <div class="card-header text-center h3 mb-4 font-weight-normal text-center">Добавление ресурса</div>
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
  getListAccounts(){
    httpModule.http({url:'listAccounds', options: {method: 'GET'}})
              .then(function(response){
                  if(response !== null && response.actionStatus === 'true'){
                      resourcesModule.printResourcesForm(response.data);
                  }else{
                      document.getElementById('info').innerHTML="Ошибка: не удалось получить данные";
                  }
              });
  }
  printResourcesForm(listAccounts){
    document.getElementById('content').innerHTML = 
            `<div class="mt-5 w-100">
              <div class="w-100 mx-auto">
                <div class="card p-4 border-primary m-auto w-100">
                  <h1 class="h3 mb-4 font-weight-normal text-center">Мои пароли</h1>
                  <div class="row mx-md-n2">
                    <div class="col px-md-2">
                      <div class="p-3 border bg-light">
                        <div id='select-box' class="input-group mb-3">
                          <select id='accountId' class='w-100'>
                            <option selected hidden>Выберите ...</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="col px-md-2">
                      <div class="p-3 border bg-light">
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="lblLogin">Логин</span>
                          </div>
                          <input type="text" readonly class="form-control" id="login-resource" aria-describedby="lblLogin">
                        </div>
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="lblPassword">Пароль</span>
                          </div>
                          <input type="text" readonly class="form-control" id="password-resource" aria-describedby="lblPassword">
                        </div>
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="description">Описание</span>
                          </div>
                          <textarea readonly class="form-control" id="description-resource" aria-describedby="description"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <input type="hidden" id="accountId">
                  <button id='btnChange' type="button" class="btn btn-light col-2 align-self-end mt-3" style="display:none;">Изменить</button>
                  <button id='btnWrite' type="button" class="btn btn-primary col-2 align-self-end mt-3" style="display:none;">Записать</button>
                </div>
              </div>
            </div>`;
    let select = document.getElementById('accountId');
    for(let i=0; i < listAccounts.length; i++){
      select.append(new Option(listAccounts[i].resourceUrl,listAccounts[i].id))
    }
    select.addEventListener('change', resourcesModule.showAccountFor);
  
    
  }
  showAccountFor(){
    let select = document.getElementById('accountId');
    let accountId = select.options[select.selectedIndex].value;
    let url = 'resource?accountId='+accountId;
    httpModule.http({url:url, options: {method: 'GET'}})
              .then(function(response){
                  if(response !== null && response.actionStatus === 'true'){
                      document.getElementById('accountId').value = response.data.id;
                      document.getElementById('password-resource').value = response.data.password;
                      document.getElementById('login-resource').value = response.data.login;
                      document.getElementById('description-resource').value = response.data.description;
                      document.getElementById('btnChange').style.display='block';
                      document.getElementById('info').innerHTML='&nbsp;';
                  }else{
                      document.getElementById('info').innerHTML="Ошибка: не удалось получить данные";
                  }
              });
  }
}
let resourcesModule = new ResourcesModule();
export{resourcesModule};