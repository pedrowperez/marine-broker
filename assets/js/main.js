$().ready(function () {
  function displayForms(parm) {
    const dataBase = [
      {
        embarcacao: [
          {
            modelo: "nhd270",
            casco: 166900.00,
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
                valor: 122400.00,
              },
              {
                name: "VOLVO PENTA V8  C 5.3L, 300 HP, DPS",
                valor: 136600.0,
              },
              {
                name: "VOLVO PENTA V8  C 5.3L, 300 HP, EVC,  DPS",
                valor: 147800.00,
              },
              {
                name: "VOLVO PENTA D4, 270 HP, DPS,  DIESEL",
                valor: 265400.00,
              },
              {
                name: "MERCRUISER 4.5 L 250 HP BRAVO 3",
                valor: 110140.00,
              },
              {
                name: "MERCRUISER 6.2 L 300 HP BRAVO 3",
                valor: 122940.00,
              },
              {
                name: "MERCRUISER V6, 270 HP, DTS, BRAVO 3, DIESEL",
                valor: 215930.00,
              },
            ],
            acessorios: [
              { name: "KIT LUX: Roller em inox, lixeira em acrílico, Bandeira do Brasil, capa de transporte, protetor de âncora em inox, revestimento acústico do motor, luz de porão, porta toalhas em inox WC, espelho WC, vaso elétrico, ducha WC , suporte de papel higiênico e Full LED Targa", valor: 5900.00 },
              { name: "GLASS COCKPIT VOLVO PENTA 7", valor: 7000.00 },
              { name: "CONVÉS CINZA", valor: 5000.00 },
              { name: "CARRETA RODO ENCALHE", valor: 6600.00 },
              { name: "CRISTALEIRA EM ACRÍLICO", valor: 990.00 },
              { name: "CHURRASQUEIRA A CARVÃO", valor: 1500.00 },
              { name: "MESA DE TEKA NO COCKPIT", valor: 1000.00 },
              { name: "COMPLEMENTO ESTOFADO DE PROA", valor: 1500.00 },
              { name: "TOLDO", valor: 4400.00 },
              { name: "PISO EVA NHD BOATS", valor: 5500.00 },
              { name: "PISO TEKA SINTÉTICA NHD BOATS", valor: 6500.00 },
              { name: "OMBRELLONE  NHD BOATS", valor: 1500.00 },
              { name: "ÂNCORA 7,5 KGS INOX", valor: 2000.00 },
              { name: "GUINCHO ELÉTRICO C/ 40m DE CORRENTE", valor: 9800.00 },
              { name: "SONAR GARMIN ECHO 301", valor: 4000.00 },
              { name: "GPS SIMRAD 7 POL. C/ SONDA", valor: 9000.00 },
              { name: "SISTEMA SOM 2 PARES ALTO FALANTES", valor: 2800.00 },
              { name: "SISTEMA SOM 3 PARES ALTO FALANTES", valor: 3500.00 },
              { name: "KIT SOM PREMIUM -SISTEMA DE SOM BOSS COM 2 PARES ALTO FALANTES JBL  6 X 9 + 1 PAR 6'' + SUBWOOFER 12 POLEGADAS", valor: 7000.00 },
              { name: "FAROL DE BUSCA", valor: 1690.00 },
              { name: "RADIO VHF + ANTENA", valor: 2600.00 },
              { name: "BUZINA", valor: 900.00 },
              { name: "LUZ SUB AQUÁTICA (PAR)", valor: 1500.00 },
              { name: "LUZ SUB AQUÁTICA LED 7 cores 12 prog. (PAR)", valor: 3000.00 },
              { name: "BATERIA AUXILIAR 150 Ah", valor: 1500.00  },
              { name: "FLAPS HIDRÁULICOS", valor: 7000.00 },
              { name: "LUZ STROBO", valor: 1000.00 },
            ],
          },

          {
            modelo: "nhd270popa",
            casco: 166900.00,
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
                name: "YAMAHA F250 LETX , V6 ( DIR HID )",
                valor: 105170.00,
              },
              {
                name: "YAMAHA F300 BETX, V6 ( DIR HID )",
                valor: 123200.00,
              },
              {
                name: "MERCURY 250 XL ,V8 4 STK (  DIR HID )",
                valor: 111500.00,
              },
              {
                name: "MERCURY 300 XL, V8  4 STK ( DIR HID )",
                valor: 124950.00,
              },
              {
                name: "PARELHA YAMAHA F150 4T ( DIR HID )",
                valor: 165270.00,
              },
            ],
            acessorios: [
              { name: "KIT LUX: KIT LUX:  Roller em inox, lixeira em acrílico, Bandeira do Brasil, capa de transporte, protetor de âncora em inox, luz de porão, porta toalhas em inox WC, espelho WC, vaso elétrico, ducha WC, suporte de papel higiênico e Full LED Targa", valor: 5900.00 },
              { name: "GLASS COCKPIT VOLVO PENTA 7", valor: 7000.00 },
              { name: "CONVÉS CINZA", valor: 5000.00 },
              { name: "CARRETA RODO ENCALHE", valor: 6600.00 },
              { name: "CRISTALEIRA EM ACRÍLICO", valor: 990.00 },
              { name: "CHURRASQUEIRA A CARVÃO", valor: 1500.00 },
              { name: "MESA DE TEKA NO COCKPIT", valor: 1000.00 },
              { name: "COMPLEMENTO ESTOFADO DE PROA", valor: 1500.00 },
              { name: "TOLDO", valor: 4400.00 },
              { name: "PISO EVA NHD BOATS", valor: 5500.00 },
              { name: "PISO TEKA SINTÉTICA NHD BOATS", valor: 6500.00 },
              { name: "OMBRELLONE  NHD BOATS", valor: 1500.00 },
              { name: "ÂNCORA 7,5 KGS INOX", valor: 2000.00 },
              { name: "GUINCHO ELÉTRICO C/ 40m DE CORRENTE", valor: 9800.00 },
              { name: "SONAR GARMIN ECHO 301", valor: 4000.00 },
              { name: "GPS SIMRAD 7 POL. C/ SONDA", valor: 9000.00 },
              { name: "SISTEMA SOM 2 PARES ALTO FALANTES", valor: 2800.00 },
              { name: "SISTEMA SOM 3 PARES ALTO FALANTES", valor: 3500.00 },
              { name: "KIT SOM PREMIUM -SISTEMA DE SOM BOSS COM 2 PARES ALTO FALANTES JBL  6 X 9 + 1 PAR 6'' + SUBWOOFER 12 POLEGADAS", valor: 7000.00 },
              { name: "FAROL DE BUSCA", valor: 1690.00 },
              { name: "RADIO VHF + ANTENA", valor: 2600.00 },
              { name: "BUZINA", valor: 900.00 },
              { name: "LUZ SUB AQUÁTICA (PAR)", valor: 1500.00 },
              { name: "LUZ SUB AQUÁTICA LED 7 cores 12 prog. (PAR)", valor: 3000.00 },
              { name: "BATERIA AUXILIAR 150 Ah", valor: 1500.00  },
              { name: "FLAPS HIDRÁULICOS", valor: 7000.00 },
              { name: "LUZ STROBO", valor: 1000.00 },
            ],
          },

          {
            modelo: "nhd280",
            casco: 195000.00,
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
                valor: 122400.00,
              },
              {
                name: "VOLVO PENTA V8  C 5.3L, 300 HP, DPS",
                valor: 136600.00,
              },
              {
                name: "VOLVO PENTA V8  C 5.3L, 300 HP,EVC, DPS",
                valor: 147800.00,
              },
              {
                name: "VOLVO PENTA D4, 270 HP, DPS, DIESEL",
                valor: 265400.00,

              },
              {
                name: "MERCRUISER 4.5 L 250 HP BRAVO 3",
                valor: 110140.00,

              },
              {
                name: "MERCRUISER 6.2 L 300 HP BRAVO 3",
                valor: 122940.00,
               
              },
              {
                name: "MERCRUISER V6, 270 HP, DTS, BRAVO 3, DIESEL",
                valor: 215930.00,
              },
            ],
            acessorios: [  
              { name: "KIT LUX:  Roller em inox, espelho de proa na cabine, lixeira em acrílico, Bandeira do Brasil, capa de transporte, revestimento acústico do motor, luz de porão, porta toalhas em inox WC, espelho WC, vaso elétrico, ducha WC, suporte de papel higiênico, base retrátil mesa cabine e Full LED targa", valor: 6900.00 },
              { name: "GLASS COCKPIT VOLVO PENTA 7", valor: 7000.00 },
              { name: "CONVÉS CINZA", valor: 5000.00 },
              { name: "CARRETA RODO ENCALHE", valor: 6600.00 },
              { name: "CRISTALEIRA EM ACRÍLICO", valor: 990.00 },
              { name: "CHURRASQUEIRA A CARVÃO", valor: 1500.00 },
              { name: "MESA DE TEKA NO COCKPIT", valor: 1000.00 },
              { name: "COMPLEMENTO ESTOFADO DE PROA", valor: 1500.00 },
              { name: "TOLDO", valor: 4400.00 },
              { name: "PISO EVA NHD BOATS", valor: 5500.00 },
              { name: "PISO TEKA SINTÉTICA NHD BOATS", valor: 6500.00 },
              { name: "OMBRELLONE  NHD BOATS", valor: 1500.00 },
              { name: "ÂNCORA 7,5 KGS INOX", valor: 2000.00 },
              { name: "GUINCHO ELÉTRICO C/ 40m DE CORRENTE", valor: 9800.00 },
              { name: "SONAR GARMIN ECHO 301", valor: 4000.00 },
              { name: "GPS SIMRAD 7 POL. C/ SONDA", valor: 9000.00 },
              { name: "SISTEMA SOM 2 PARES ALTO FALANTES", valor: 2800.00 },
              { name: "SISTEMA SOM 3 PARES ALTO FALANTES", valor: 3500.00 },
              { name: "KIT SOM PREMIUM -SISTEMA DE SOM BOSS COM 2 PARES ALTO FALANTES JBL  6 X 9 + 1 PAR 6'' + SUBWOOFER 12 POLEGADAS", valor: 7000.00 },
              { name: "FAROL DE BUSCA", valor: 1690.00 },
              { name: "RADIO VHF + ANTENA", valor: 2600.00 },
              { name: "BUZINA", valor: 900.00 },
              { name: "LUZ SUB AQUÁTICA (PAR)", valor: 1500.00 },
              { name: "LUZ SUB AQUÁTICA LED 7 cores 12 prog. (PAR)", valor: 3000.00 },
              { name: "BATERIA AUXILIAR 150 Ah", valor: 1500.00  },
              { name: "FLAPS HIDRÁULICOS", valor: 7000.00 },
              { name: "LUZ STROBO", valor: 1000.00 },
              { name: "KIT ENXOVAL NHD 280:  6 ALMOFADAS, 1 LENÇOL, 1 MANTA, 2 TOALHAS DE ROSTO e 2 TOALHAS DE BANHO.", valor: 2500.00},
              { name: "FECHAMENTO TOTAL DO TOLDO", valor: 7000.00 },
              { name: "ARMÁRIO ACRÍLICO NA CABINE", valor: 1200.00 },
              { name: "SOLÁRIO DE PROA", valor: 2900.00 },
              { name: "CONJUNTO MICROONDAS (MÓVEL EM TEKA + MICROONDAS 20 L + INVERSOR XANTREX 1800W, 110 V)", valor: 8700.00 },
              { name: "TV LED 12 V + ANTENA", valor: 3800.00 },
              { name: "GELADEIRA ELBER 52 L 12V", valor: 5000.00 },
            ],
          },
          {
            modelo: "nhd280popa",
            casco: 195000.00,
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
                name: "YAMAHA F250 LETX , V6 ( DIR HID )",
                valor: 105170.00,
              },
              {
                name: "YAMAHA F300 BETX, V6 ( DIR HID )",
                valor: 123200.00,
              },
              {
                name: "MERCURY 250 XL ,V8 4 STK (  DIR HID )",
                valor: 111500.00,
              },
              {
                name: "MERCURY 300 XL, V8  4 STK ( DIR HID )",
                valor: 124950.00,
              },
              {
                name: "PARELHA YAMAHA F 150 HP 4T ( DIR HID )",
                valor: 165270.00,
              },
            ],
            acessorios: [
              { name: "KIT LUX:  Roller em inox, espelho de proa na cabine, lixeira em acrílico, Bandeira do Brasil, capa de transporte, revestimento acústico do motor, luz de porão, porta toalhas em inox WC, espelho WC, vaso elétrico, ducha WC, suporte de papel higiênico, base retrátil mesa cabine e Full LED targa", valor: 6900.00 },
              { name: "GLASS COCKPIT VOLVO PENTA 7", valor: 7000.00 },
              { name: "CONVÉS CINZA", valor: 5000.00 },
              { name: "CARRETA RODO ENCALHE", valor: 6600.00 },
              { name: "CRISTALEIRA EM ACRÍLICO", valor: 990.00 },
              { name: "CHURRASQUEIRA A CARVÃO", valor: 1500.00 },
              { name: "MESA DE TEKA NO COCKPIT", valor: 1000.00 },
              { name: "COMPLEMENTO ESTOFADO DE PROA", valor: 1500.00 },
              { name: "TOLDO", valor: 4400.00 },
              { name: "PISO EVA NHD BOATS", valor: 5500.00 },
              { name: "PISO TEKA SINTÉTICA NHD BOATS", valor: 6500.00 },
              { name: "OMBRELLONE  NHD BOATS", valor: 1500.00 },
              { name: "ÂNCORA 7,5 KGS INOX", valor: 2000.00 },
              { name: "GUINCHO ELÉTRICO C/ 40m DE CORRENTE", valor: 9800.00 },
              { name: "SONAR GARMIN ECHO 301", valor: 4000.00 },
              { name: "GPS SIMRAD 7 POL. C/ SONDA", valor: 9000.00 },
              { name: "SISTEMA SOM 2 PARES ALTO FALANTES", valor: 2800.00 },
              { name: "SISTEMA SOM 3 PARES ALTO FALANTES", valor: 3500.00 },
              { name: "KIT SOM PREMIUM -SISTEMA DE SOM BOSS COM 2 PARES ALTO FALANTES JBL  6 X 9 + 1 PAR 6'' + SUBWOOFER 12 POLEGADAS", valor: 7000.00 },
              { name: "FAROL DE BUSCA", valor: 1690.00 },
              { name: "RADIO VHF + ANTENA", valor: 2600.00 },
              { name: "BUZINA", valor: 900.00 },
              { name: "LUZ SUB AQUÁTICA (PAR)", valor: 1500.00 },
              { name: "LUZ SUB AQUÁTICA LED 7 cores 12 prog. (PAR)", valor: 3000.00 },
              { name: "BATERIA AUXILIAR 150 Ah", valor: 1500.00  },
              { name: "FLAPS HIDRÁULICOS", valor: 7000.00 },
              { name: "LUZ STROBO", valor: 1000.00 },
              { name: "KIT ENXOVAL NHD 280:  6 ALMOFADAS, 1 LENÇOL, 1 MANTA, 2 TOALHAS DE ROSTO e 2 TOALHAS DE BANHO.", valor: 2500.00},
              { name: "FECHAMENTO TOTAL DO TOLDO", valor: 7000.00 },
              { name: "ARMÁRIO ACRÍLICO NA CABINE", valor: 1200.00 },
              { name: "SOLÁRIO DE PROA", valor: 2900.00 },
              { name: "CONJUNTO MICROONDAS (MÓVEL EM TEKA + MICROONDAS 20 L + INVERSOR XANTREX 1800W, 110 V)", valor: 8700.00 },
              { name: "TV LED 12 V + ANTENA", valor: 3800.00 },
              { name: "GELADEIRA ELBER 52 L 12V", valor: 5000.00 },
            ],
          },
          {
            modelo: "nhd340",
            casco: 409600.00,
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
                name: "VOLVO PENTA V6 250 C, 4.3L, DPS",
                valor: 242400.00,
              },
              {
                name: "VOLVO PENTA V6 240 C, 4.3L, DPS, EVC",
                valor: 266200.00,
              },
              {
                name: "VOLVO PENTA V6 280 , 4.3L, DPS",
                valor: 240800.00,
              },
              {
                name: "VOLVO PENTA V6 280 , 4.3L, DPS, EVC",
                valor: 275600.00,
              },
              {
                name: "VOLVO PENTA V8 300 , 5.3L, DPS",
                valor: 269200.00,
              },
              {
                name: "VOLVO PENTA D3 220HP, 2.4 L, DPS DIESEL",
                valor: 401000.00,
              },
              {
                name: "MERCRUISER 4.5 L 250 HP BRAVO 3",
                valor: 220280.00,
              },
              {
                name: "MERCRUISER 6.2 L 300 HP BRAVO 3",
                valor: 245940.00,
              },
              {
                name: "MERCRUISER 2.8 QSD 220 HP BRAVO 3 DIESEL",
                valor: 328560.00,
              },
            ],
            acessorios: [
              { name: "KIT LUX:  Roller em inox, espelho de proa na cabine, lixeira em acrílico, Bandeira do Brasil, capa de transporte, revestimento acústico do motor, luz de porão, porta toalhas em inox WC, espelho WC, vaso elétrico, ducha WC, suporte de papel higiênico, base retrátil mesa cabine e Full LED targa", valor: 6900.00 },
              { name: "GLASS COCKPIT VOLVO PENTA 7", valor: 7000.00 },
              { name: "CONVÉS CINZA", valor: 5000.00 },
              { name: "CARRETA RODO ENCALHE", valor: 6600.00 },
              { name: "CRISTALEIRA EM ACRÍLICO", valor: 990.00 },
              { name: "CHURRASQUEIRA A CARVÃO", valor: 1500.00 },
              { name: "MESA DE TEKA NO COCKPIT", valor: 1000.00 },
              { name: "COMPLEMENTO ESTOFADO DE PROA", valor: 1500.00 },
              { name: "TOLDO", valor: 4400.00 },
              { name: "PISO EVA NHD BOATS", valor: 5500.00 },
              { name: "PISO TEKA SINTÉTICA NHD BOATS", valor: 6500.00 },
              { name: "OMBRELLONE  NHD BOATS", valor: 1500.00 },
              { name: "ÂNCORA 7,5 KGS INOX", valor: 2000.00 },
              { name: "GUINCHO ELÉTRICO C/ 40m DE CORRENTE", valor: 9800.00 },
              { name: "SONAR GARMIN ECHO 301", valor: 4000.00 },
              { name: "GPS SIMRAD 7 POL. C/ SONDA", valor: 9000.00 },
              { name: "SISTEMA SOM 2 PARES ALTO FALANTES", valor: 2800.00 },
              { name: "SISTEMA SOM 3 PARES ALTO FALANTES", valor: 3500.00 },
              { name: "KIT SOM PREMIUM -SISTEMA DE SOM BOSS COM 2 PARES ALTO FALANTES JBL  6 X 9 + 1 PAR 6'' + SUBWOOFER 12 POLEGADAS", valor: 7000.00 },
              { name: "FAROL DE BUSCA", valor: 1690.00 },
              { name: "RADIO VHF + ANTENA", valor: 2600.00 },
              { name: "BUZINA", valor: 900.00 },
              { name: "LUZ SUB AQUÁTICA (PAR)", valor: 1500.00 },
              { name: "LUZ SUB AQUÁTICA LED 7 cores 12 prog. (PAR)", valor: 3000.00 },
              { name: "BATERIA AUXILIAR 150 Ah", valor: 1500.00  },
              { name: "FLAPS HIDRÁULICOS", valor: 7000.00 },
              { name: "LUZ STROBO", valor: 1000.00 },
              { name: "KIT ENXOVAL NHD 280:  6 ALMOFADAS, 1 LENÇOL, 1 MANTA, 2 TOALHAS DE ROSTO e 2 TOALHAS DE BANHO.", valor: 2500.00},
              { name: "FECHAMENTO TOTAL DO TOLDO", valor: 7000.00 },
              { name: "ARMÁRIO ACRÍLICO NA CABINE", valor: 1200.00 },
              { name: "SOLÁRIO DE PROA", valor: 2900.00 },
              { name: "CONJUNTO MICROONDAS (MÓVEL EM TEKA + MICROONDAS 20 L + INVERSOR XANTREX 1800W, 110 V)", valor: 8700.00 },
              { name: "TV LED 12 V + ANTENA", valor: 3800.00 },
              { name: "GELADEIRA ELBER 52 L 12V", valor: 5000.00 },
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
