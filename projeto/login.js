function login(){

    var usuario = document.getElementById('loginf').value;
    var senha = document.getElementById('senha').valeu;

    if (usuario == 'admin' && senha == 'admin'){

      window.alert('login feito com sucesso');

    }else{
      
      window.alert('preencha os dados coretamente');

    }

  }