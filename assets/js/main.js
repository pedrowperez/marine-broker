$().ready(function () {
  function displayForms(parm) {
    const dataBase = [
      {
        embarcacao: [
          {
            modelo: "nhd270",
            casco: 136600.0,
            corCasco: ["Azul", "Vermelho", "Preto", "Branco", "Cinza", "Bege"],
            corEstofado: [
              "Marrom escuro",
              "Marrom claro Sport",
              "Bege Rolex Sport",
              "Bege Rolex",
              "Cinza Sport",
            ],
            motor: [
              {
                name: "VOLVO PENTA V6 C  4.3L, 280 HP, DPS",
                valor: 122400.0,
              },
              {
                name: "VOLVO PENTA V8  C 5.3L, 300 HP, DPS",
                valor: 136600.0,
              },
              {
                name: "VOLVO PENTA V8  C 5.3L, 200 HP, DPS",
                valor: 136600.0,
              },
            ],
            acessorios: [
              { name: "GLASS COCKPIT VOLVO PENTA 7'", valor: 136600.0 },
              { name: "GLASS COCKPIT VOLVO PENTA 7'", valor: 136600.0 },
              { name: "GLASS COCKPIT VOLVO PENTA 7'", valor: 136600.0 },
              { name: "GLASS COCKPIT VOLVO PENTA 7'", valor: 136600.0 },
            ],
          },

          {
            modelo: "nhd270popa",
            casco: 136600.0,
            corCasco: ["Azul", "Vermelho", "Preto", "Branco", "Cinza", "Bege"],
            corEstofado: [
              "Marrom escuro",
              "Marrom claro Sport",
              "Bege Rolex Sport",
              "Bege Rolex",
              "Cinza Sport",
            ],
            motor: [
              {
                name: "VOLVO PENTA V6 C  4.3L, 280 HP, DPS",
                valor: 122400.0,
              },
              {
                name: "VOLVO PENTA V8  C 5.3L, 300 HP, DPS",
                valor: 136600.0,
              },
              {
                name: "VOLVO PENTA V8  C 5.3L, 200 HP, DPS",
                valor: 136600.0,
              },
            ],
            acessorios: [
              { name: "GLASS COCKPIT VOLVO PENTA 7'", valor: 136600.0 },
              { name: "GLASS COCKPIT VOLVO PENTA 7'", valor: 136600.0 },
              { name: "GLASS COCKPIT VOLVO PENTA 7'", valor: 136600.0 },
              { name: "GLASS COCKPIT VOLVO PENTA 7'", valor: 136600.0 },
            ],
          },

          {
            modelo: "nhd280",
            casco: 136600.0,
            corCasco: ["Azul", "Vermelho", "Preto", "Branco", "Cinza", "Bege"],
            corEstofado: [
              "Marrom escuro",
              "Marrom claro Sport",
              "Bege Rolex Sport",
              "Bege Rolex",
              "Cinza Sport",
            ],
            motor: [
              {
                name: "VOLVO PENTA V6 C  4.3L, 280 HP, DPS",
                valor: 122400.0,
              },
              {
                name: "VOLVO PENTA V8  C 5.3L, 300 HP, DPS",
                valor: 136600.0,
              },
              {
                name: "VOLVO PENTA V8  C 5.3L, 200 HP, DPS",
                valor: 136600.0,
              },
            ],
            acessorios: [
              { name: "GLASS COCKPIT VOLVO PENTA 7'", valor: 136600.0 },
              { name: "GLASS COCKPIT VOLVO PENTA 7'", valor: 136600.0 },
              { name: "GLASS COCKPIT VOLVO PENTA 7'", valor: 136600.0 },
              { name: "GLASS COCKPIT VOLVO PENTA 7'", valor: 136600.0 },
            ],
          },
          {
            modelo: "nhd280popa",
            casco: 136600.0,
            corCasco: ["Azul", "Vermelho", "Preto", "Branco", "Cinza", "Bege"],
            corEstofado: [
              "Marrom escuro",
              "Marrom claro Sport",
              "Bege Rolex Sport",
              "Bege Rolex",
              "Cinza Sport",
            ],
            motor: [
              {
                name: "VOLVO PENTA V6 C  4.3L, 280 HP, DPS",
                valor: 122400.0,
              },
              {
                name: "VOLVO PENTA V8  C 5.3L, 300 HP, DPS",
                valor: 136600.0,
              },
              {
                name: "VOLVO PENTA V8  C 5.3L, 200 HP, DPS",
                valor: 136600.0,
              },
            ],
            acessorios: [
              { name: "GLASS COCKPIT VOLVO PENTA 7'", valor: 136600.0 },
              { name: "GLASS COCKPIT VOLVO PENTA 7'", valor: 136600.0 },
              { name: "GLASS COCKPIT VOLVO PENTA 7'", valor: 136600.0 },
              { name: "GLASS COCKPIT VOLVO PENTA 7'", valor: 136600.0 },
            ],
          },
        ],
      },
    ];

    let sel = parm;
    let toActive = dataBase[0].embarcacao;

    const formActive = toActive.find((el) => el.modelo === sel);
    console.log(formActive);

    let acessorioSelect = document.getElementById("acessorios-form");
    let corSelect = document.getElementById("cor-form");
    let corEstofadoSelect = document.getElementById("corestofado-form");
    let motorSelect = document.getElementById(`motor-${sel}`);
    let optionsCor = formActive.corCasco;
    let optionsCorEstofado = formActive.corEstofado;
    let optionsAcessorios = formActive.acessorios;
    let optionsMotor = formActive.motor;

    for (var i = 0; i < optionsMotor.length; i++) {
      var opt = optionsMotor[i];
      var el = document.createElement("option");
      el.textContent = opt.name;
      el.value = opt.valor;
      motorSelect.appendChild(el);
    }

    for (var i = 0; i < optionsAcessorios.length; i++) {
      var checkBox = document.createElement("input");
      var label = document.createElement("label");
      checkBox.type = "checkbox";
      checkBox.value = optionsAcessorios[i].valor;
      acessorioSelect.appendChild(checkBox);
      acessorioSelect.appendChild(label);
      label.appendChild(document.createTextNode(optionsAcessorios[i].name));
    }

    for (var i = 0; i < optionsCor.length; i++) {
      var checkBox = document.createElement("input");
      var label = document.createElement("label");
      checkBox.type = "radio";
      checkBox.name = "corCasco";
      checkBox.value = optionsCor[i];
      corSelect.appendChild(checkBox);
      corSelect.appendChild(label);
      label.appendChild(document.createTextNode(optionsCor[i]));
    }
    for (var i = 0; i < optionsCorEstofado.length; i++) {
      var checkBox = document.createElement("input");
      var label = document.createElement("label");
      checkBox.name = "corEstofado";
      checkBox.type = "radio";
      checkBox.value = optionsCorEstofado[i];
      corEstofadoSelect.appendChild(checkBox);
      corEstofadoSelect.appendChild(label);
      label.appendChild(document.createTextNode(optionsCorEstofado[i]));
    }
  }

  const makeForm = function (modelo) {
    $(`#${modelo}`).append(
      `<form id="${modelo}-form" class="generalForm"> </form>`
    );
    $(`#${modelo}-form`).append(`
        <div class="form-group">
            <label for="name">Nome:</label>
            <input type="text" class="form-control" name="name" id="name" aria-describedby="helpId" placeholder="">
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="text" class="form-control" name="email" id="email" aria-describedby="helpId" placeholder="">
        </div>
        <div class="form-group">
            <label for="telefone">Telefone:</label>
            <input type="phone" class="form-control" name="telefone" id="telefone" aria-describedby="helpId" placeholder="">
            
        </div>
        <div class="form-group">
            <label for="">Estado</label>
            <input type="text" class="form-control" name="estado" id="estado" aria-describedby="helpId" placeholder="">
        </div>
        <div class="form-group">
            <label for="">Cor do Casco</label>
            <div id="cor-form">
            </div>
        </div>
        <div class="form-group">
            <label for="">Cor do Estofado</label>
            <div id="corestofado-form">
            </div>
        </div>
        <div class="form-group">
            <label for="">Motor:</label>
            <select name="motor-${modelo}" id="motor-${modelo}"> </select>
        </div>
        <div class="form-group">
            <label for="">Acessorios:</label>
            <div id="acessorios-form">
            </div>
        </div>
        `);

    displayForms(modelo);
  };

  const emptyForm = function (modelo) {
    $(`#${modelo}`).empty();
  };

  $(".collapse").on("shown.bs.collapse", function () {
    let modelo = $(this).attr("id");
    makeForm(modelo);
  });

  $(".collapse").on("hidden.bs.collapse", function () {
    let modelo = $(this).attr("id");
    emptyForm(modelo);
  });

});
