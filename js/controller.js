angular.module("todoApp").controller("todoAppCtrl", ['$scope', function ($scope) {

  $scope.tarefas = [];
  $scope.tarefa = { texto: '', check: false };
  $scope.cont = 0;
  $scope.filtro = '';

  $scope.inserir = function () {
    if ($scope.texto) {
      $scope.tarefa.texto = $scope.texto;
      $scope.tarefas.push(angular.copy(this.tarefa));
      $scope.texto = '';
    } else {
      alert("Não é possível criar tarefa vazia.");
    }
    contador();
  }

  $scope.removerTarefa = function (tarefa) {
    let posicao = $scope.tarefas.indexOf(tarefa);
    $scope.tarefas.splice(posicao, 1);
    contador();
  }


  $scope.marcarOuDesmarcarTarefa = function (tarefa) {
    if (!tarefa.check) tarefa.check = true;
    else tarefa.check = false;
    contador();
  }


  $scope.removerConcluidos = function () {
    let inconcluidos = retornaTarefasIncompletas();
    $scope.tarefas = inconcluidos;
    contador();
  }

  $scope.filtrar = function (filtro = '') {
    if (filtro == true) $scope.filtro = filtro;
    else if (filtro == false) $scope.filtro = filtro;
    else $scope.filtro = filtro;
  }

  function retornaTarefasIncompletas() {
    return $scope.tarefas.filter((tarefa) => {
      if (!tarefa.check) return tarefa;
    });
  }

  function contador() {
    let inconcluidos = retornaTarefasIncompletas();
    $scope.cont = inconcluidos.length;
  }

}]);
