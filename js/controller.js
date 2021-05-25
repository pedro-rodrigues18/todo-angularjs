angular.module("todoApp").controller("todoAppCtrl", ['$scope', function ($scope) {

  $scope.tarefas = [];
  $scope.tarefa = { texto: '', check: false };
  $scope.cont = 0;

  $scope.inserir = function () {
    if ($scope.texto) {
      $scope.tarefa.texto = $scope.texto;
      $scope.tarefas.push(angular.copy(this.tarefa));
      $scope.texto = '';
    } else {
      alert("Não é possível criar tarefa vazia.");
    }
  }

  $scope.removerTarefa = function (tarefa) {
    let posicao = $scope.tarefas.indexOf(tarefa);
    $scope.tarefas.splice(posicao, 1);
  }


  $scope.marcarOuDesmarcarTarefa = function (tarefa) {
    if (!tarefa.check) tarefa.check = true;
    else tarefa.check = false;
  }

  $scope.removerConcluidos = function () {
    let inconcluidos = $scope.tarefas.filter((tarefa) => {
      if (!tarefa.check)
        return tarefa;
    });
    $scope.tarefas = inconcluidos;
  }

  $scope.contador = function () {
    //TODO
  }

}]);
