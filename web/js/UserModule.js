import {httpModule} from './HttpModule.js'; 
import {authModule} from './authModule.js';
class UserModule{
    addNewUser(){
      document.getElementById('info').innerHTML='';
        document.getElementById('content').innerHTML =
            `<div class="w-100 d-flex justify-content-center">
                <div class="card border-primary p-2" style="max-width: 60em;">
                   <div class="card-header text-center">Заполните все поля</div>
                   <div class="card-body">
                     <p class="card-text d-flex justify-content-between">Имя: <input class="ml-2" type="text" id="firstname"></p>
                     <p class="card-text d-flex justify-content-between">Фамилия: <input class="ml-2" type="text" id="surname"></p>
                     <p class="card-text d-flex justify-content-between">Email: <input class="ml-2" type="text" id="email"></p>
                     <p class="card-text d-flex justify-content-between">Логин: <input class="ml-2" type="text" id="login"></p>
                     <p class="card-text d-flex justify-content-between">Пароль: <input class="ml-2" type="text" id="password1"></p>
                     <p class="card-text d-flex justify-content-between">Повторите пароль: <input class="ml-2" type="text" id="password2"></p>
                     <p class="card-text"><button class="btn btn-light w-100" type="button" id="btnRegistration">Зарегистрировать</button</p>
                   </div>
                </div>
              </div>`;
      document.getElementById('btnRegistration').onclick=function (){
          userModule.createUser();
      }        
    }
    createUser(){
      let firstname = document.getElementById('firstname').value;
      let surname = document.getElementById('surname').value;
      let email = document.getElementById('email').value;
      let login = document.getElementById('login').value;
      let password1 = document.getElementById('password1').value;
      let password2 = document.getElementById('password2').value;
      if(password1 !== password2){
        document.getElementById('info').innerHTML="Не совпадают пароли";
        document.getElementById('password1').value='';
        document.getElementById('password2').value='';
        return;
      }
      let newUser = {
          "firstname": firstname,
          "surname": surname,
          "email": email,
          "login": login,
          "password": password1
      }
      httpModule.http({url:'createUser', options: {method: 'POST', data: newUser}})
              .then(function(response){
                  if(response !== null && response.authStatus === 'true'){
                      sessionStorage.setItem('user',JSON.stringify(response.user));
                      document.getElementById('info').innerHTML='Вы вошли как '+ response.user.login;
                      document.getElementById('content').innerHTML='';
                  }else{
                      if(response !== null){
                        document.getElementById('info').innerHTML="Email или login уже используется";
                      }else{
                        document.getElementById('info').innerHTML='Зарегистрироваться не удалось';
                      }
                  }
                  authModule.authMenu();
              });
      
    }
    printProfileForm(){
      let user = JSON.parse(sessionStorage.getItem('user'));
      document.getElementById('info').innerHTML='';
      document.getElementById('content').innerHTML =
            `<div class="w-100 d-flex justify-content-center">
                <div class="card border-primary p-2" style="max-width: 60em;">
                   <div class="card-header text-center">Профиль пользователя</div>
                   <div class="card-body">
                     <p class="card-text d-flex justify-content-between">Имя: <input class="ml-2" type="text" id="firstname" disabled value="${user.firstname}"></p>
                     <p class="card-text d-flex justify-content-between">Фамилия: <input class="ml-2" type="text" id="surname" disabled value="${user.surname}"></p>
                     <p class="card-text d-flex justify-content-between">Email: <input class="ml-2" type="text" id="email" disabled value=${user.email}></p>
                     <p class="card-text d-flex justify-content-between">Логин: <input class="ml-2" type="text" id="login" disabled value=${user.login}></p>
                     <p class="card-text d-flex justify-content-between">Пароль: <input class="ml-2" type="text" id="password1" disabled ></p>
                     <p class="card-text d-flex justify-content-between">Повторите пароль: <input class="ml-2" type="text" id="password2" disabled ></p>
                     <p class="card-text">
                        <button class="btn btn-light w-100" type="button" id="btnEnableChange">Изменить</button>
                        <button class="btn btn-light w-100" style="display: none;" type="button" id="btnWriteChange">Записать изменения</button>
                     </p>
                   </div>
                </div>
              </div>`;
      document.getElementById('btnEnableChange').onclick = function(){
        userModule.inputEnableChange();
        document.getElementById("btnWriteChange").onclick = function (){
          userModule.writeChangeProfile();
        }
      }
    }
    inputEnableChange(){
      document.getElementById('btnWriteChange').style.display="block";
      document.getElementById('btnEnableChange').style.display="none";
      document.getElementById('firstname').removeAttribute("disabled");
      document.getElementById('surname').removeAttribute("disabled");
      document.getElementById('email').removeAttribute("disabled");
      document.getElementById('login').removeAttribute("disabled");
      document.getElementById('password1').removeAttribute("disabled");
      document.getElementById('password2').removeAttribute("disabled");
    }
    writeChangeProfile(){
      let user = JSON.parse(sessionStorage.getItem('user'));
      let firstname = document.getElementById('firstname').value;
      let surname = document.getElementById('surname').value;
      let email = document.getElementById('email').value;
      let login = document.getElementById('login').value;
      let password1 = document.getElementById('password1').value;
      let password2 = document.getElementById('password2').value;
      if(password1 !== password2){
        document.getElementById('info').innerHTML="Не совпадают пароли";
        document.getElementById('password1').value='';
        document.getElementById('password2').value='';
        return;
      }
      let newProfile = {
        "id": user.id,
        "firstname": firstname,
        "surname": surname,
        "email": email,
        "login": login,
        "password": password1,
      }
      httpModule.http({url:'changeProfile', options: {method: 'POST', data: newProfile}})
              .then(function(response){
                  if(response !== null && response.actionStatus === 'true'){
                      sessionStorage.setItem('user',JSON.stringify(response.user));
                      userModule.printProfileForm();
                      document.getElementById('info').innerHTML='Изменения записаны';
                  }else{
                      userModule.printProfileForm();
                      document.getElementById('info').innerHTML="Ошибка изменения профайла";
                  }
              });
    }
}
let userModule = new UserModule();
export{userModule};