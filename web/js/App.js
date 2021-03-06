
import {authModule} from './AuthModule.js';
import {httpModule} from './HttpModule.js';
import {userModule} from './UserModule.js';
import {resourcesModule} from './ResourcesModule.js';
/**
 * Блок назначения действия на событие oncklick пунктов меню
 * 
 */

document.getElementById("resources").onclick = function(){
  toogleMenuActive("resources");
  resourcesModule.getListAccounts();
};
document.getElementById("addResource").onclick = function(){
  toogleMenuActive("addResource");
  resourcesModule.printAddResourcesForm();
};
document.getElementById("userProfile").onclick = function(){
  toogleMenuActive("userProfile");
  userModule.printProfileForm();
};
document.getElementById("showLogin").onclick = function(){
  toogleMenuActive("showLogin");
  authModule.printLoginForm();
};
document.getElementById("sysout").onclick = function(){
  toogleMenuActive("sysout");
  authModule.logout();
};
/**
 * Подсвечивает выбранный пункт меню и убирает подсветку из раннее выбранных пунктов
 * @param {string} elementId - идентификатор выбранного меню
 * @returns css
 */
function toogleMenuActive(elementId){
  let activeElement = document.getElementById(elementId);
  let passiveElements = document.getElementsByClassName("nav-item");
  for(let i = 0; i < passiveElements.length; i++){
    if(activeElement === passiveElements[i]){
      passiveElements[i].classList.add("active");
    }else{
      if(passiveElements[i].classList.contains("active")){
        passiveElements[i].classList.remove("active");
      }
    }
  }
}
authModule.authMenu();