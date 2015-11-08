$(document).ready(function(){
  loadModules();
}); 
    

function loadModules(){
    document.querySelector('#greeting').innerText =
    'Hello World! This is Amal Bose';
    
    var module, sidebarInnerHTML;
    for	(index = 0; index < modules.length; index++) {
      
      module = modules[index];
      sidebarInnerHTML = '';
      
      sidebarInnerHTML += '                <li class='+module.method+'>';
      sidebarInnerHTML += '<a>'+module.name+'</a>';
      sidebarInnerHTML += '                </li>';

      $('.sidebar-nav').append(sidebarInnerHTML);
      
      $('.'+module.method).click( window[module.method]);
      
    }
   
}
