$().ready(function () {
  $.fn.serializeEmail = function () {
    let o = {};
    let a = this.serializeArray();
    $.each(a, function () {
      if (o[this.name]) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || "");
      } else {
        o[this.name] = this.value || "";
      }
    });
    return o;
  };

  function displayForms(parm) {
    const dataBase = [
      {
        embarcacao: [
          {
            modelo: "nhd270",
            casco: 166900.0,
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
                name: "VOLVO PENTA V8  C 5.3L, 300 HP, EVC,  DPS",
                valor: 147800.0,
              },
              {
                name: "VOLVO PENTA D4, 270 HP, DPS,  DIESEL",
                valor: 265400.0,
              },
              {
                name: "MERCRUISER 4.5 L 250 HP BRAVO 3",
                valor: 110140.0,
              },
              {
                name: "MERCRUISER 6.2 L 300 HP BRAVO 3",
                valor: 122940.0,
              },
              {
                name: "MERCRUISER V6, 270 HP, DTS, BRAVO 3, DIESEL",
                valor: 215930.0,
              },
            ],
            acessorios: [
              {
                name:
                  "KIT LUX: Roller em inox, lixeira em acrílico, Bandeira do Brasil, capa de transporte, protetor de âncora em inox, revestimento acústico do motor, luz de porão, porta toalhas em inox WC, espelho WC, vaso elétrico, ducha WC , suporte de papel higiênico e Full LED Targa",
                valor: 5900.0,
              },
              { name: "GLASS COCKPIT VOLVO PENTA 7", valor: 7000.0 },
              { name: "CONVÉS CINZA", valor: 5000.0 },
              { name: "CARRETA RODO ENCALHE", valor: 6600.0 },
              { name: "CRISTALEIRA EM ACRÍLICO", valor: 990.0 },
              { name: "CHURRASQUEIRA A CARVÃO", valor: 1500.0 },
              { name: "MESA DE TEKA NO COCKPIT", valor: 1000.0 },
              { name: "COMPLEMENTO ESTOFADO DE PROA", valor: 1500.0 },
              { name: "TOLDO", valor: 4400.0 },
              { name: "PISO EVA NHD BOATS", valor: 5500.0 },
              { name: "PISO TEKA SINTÉTICA NHD BOATS", valor: 6500.0 },
              { name: "OMBRELLONE  NHD BOATS", valor: 1500.0 },
              { name: "ÂNCORA 7,5 KGS INOX", valor: 2000.0 },
              { name: "GUINCHO ELÉTRICO C/ 40m DE CORRENTE", valor: 9800.0 },
              { name: "SONAR GARMIN ECHO 301", valor: 4000.0 },
              { name: "GPS SIMRAD 7 POL. C/ SONDA", valor: 9000.0 },
              { name: "SISTEMA SOM 2 PARES ALTO FALANTES", valor: 2800.0 },
              { name: "SISTEMA SOM 3 PARES ALTO FALANTES", valor: 3500.0 },
              {
                name:
                  "KIT SOM PREMIUM -SISTEMA DE SOM BOSS COM 2 PARES ALTO FALANTES JBL  6 X 9 + 1 PAR 6'' + SUBWOOFER 12 POLEGADAS",
                valor: 7000.0,
              },
              { name: "FAROL DE BUSCA", valor: 1690.0 },
              { name: "RADIO VHF + ANTENA", valor: 2600.0 },
              { name: "BUZINA", valor: 900.0 },
              { name: "LUZ SUB AQUÁTICA (PAR)", valor: 1500.0 },
              {
                name: "LUZ SUB AQUÁTICA LED 7 cores 12 prog. (PAR)",
                valor: 3000.0,
              },
              { name: "BATERIA AUXILIAR 150 Ah", valor: 1500.0 },
              { name: "FLAPS HIDRÁULICOS", valor: 7000.0 },
              { name: "LUZ STROBO", valor: 1000.0 },
            ],
          },

          {
            modelo: "nhd270popa",
            casco: 166900.0,
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
                valor: 105170.0,
              },
              {
                name: "YAMAHA F300 BETX, V6 ( DIR HID )",
                valor: 123200.0,
              },
              {
                name: "MERCURY 250 XL ,V8 4 STK (  DIR HID )",
                valor: 111500.0,
              },
              {
                name: "MERCURY 300 XL, V8  4 STK ( DIR HID )",
                valor: 124950.0,
              },
              {
                name: "PARELHA YAMAHA F150 4T ( DIR HID )",
                valor: 165270.0,
              },
            ],
            acessorios: [
              {
                name:
                  "KIT LUX: KIT LUX:  Roller em inox, lixeira em acrílico, Bandeira do Brasil, capa de transporte, protetor de âncora em inox, luz de porão, porta toalhas em inox WC, espelho WC, vaso elétrico, ducha WC, suporte de papel higiênico e Full LED Targa",
                valor: 5900.0,
              },
              { name: "GLASS COCKPIT VOLVO PENTA 7", valor: 7000.0 },
              { name: "CONVÉS CINZA", valor: 5000.0 },
              { name: "CARRETA RODO ENCALHE", valor: 6600.0 },
              { name: "CRISTALEIRA EM ACRÍLICO", valor: 990.0 },
              { name: "CHURRASQUEIRA A CARVÃO", valor: 1500.0 },
              { name: "MESA DE TEKA NO COCKPIT", valor: 1000.0 },
              { name: "COMPLEMENTO ESTOFADO DE PROA", valor: 1500.0 },
              { name: "TOLDO", valor: 4400.0 },
              { name: "PISO EVA NHD BOATS", valor: 5500.0 },
              { name: "PISO TEKA SINTÉTICA NHD BOATS", valor: 6500.0 },
              { name: "OMBRELLONE  NHD BOATS", valor: 1500.0 },
              { name: "ÂNCORA 7,5 KGS INOX", valor: 2000.0 },
              { name: "GUINCHO ELÉTRICO C/ 40m DE CORRENTE", valor: 9800.0 },
              { name: "SONAR GARMIN ECHO 301", valor: 4000.0 },
              { name: "GPS SIMRAD 7 POL. C/ SONDA", valor: 9000.0 },
              { name: "SISTEMA SOM 2 PARES ALTO FALANTES", valor: 2800.0 },
              { name: "SISTEMA SOM 3 PARES ALTO FALANTES", valor: 3500.0 },
              {
                name:
                  "KIT SOM PREMIUM -SISTEMA DE SOM BOSS COM 2 PARES ALTO FALANTES JBL  6 X 9 + 1 PAR 6'' + SUBWOOFER 12 POLEGADAS",
                valor: 7000.0,
              },
              { name: "FAROL DE BUSCA", valor: 1690.0 },
              { name: "RADIO VHF + ANTENA", valor: 2600.0 },
              { name: "BUZINA", valor: 900.0 },
              { name: "LUZ SUB AQUÁTICA (PAR)", valor: 1500.0 },
              {
                name: "LUZ SUB AQUÁTICA LED 7 cores 12 prog. (PAR)",
                valor: 3000.0,
              },
              { name: "BATERIA AUXILIAR 150 Ah", valor: 1500.0 },
              { name: "FLAPS HIDRÁULICOS", valor: 7000.0 },
              { name: "LUZ STROBO", valor: 1000.0 },
            ],
          },

          {
            modelo: "nhd280",
            casco: 195000.0,
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
                name: "VOLVO PENTA V8  C 5.3L, 300 HP,EVC, DPS",
                valor: 147800.0,
              },
              {
                name: "VOLVO PENTA D4, 270 HP, DPS, DIESEL",
                valor: 265400.0,
              },
              {
                name: "MERCRUISER 4.5 L 250 HP BRAVO 3",
                valor: 110140.0,
              },
              {
                name: "MERCRUISER 6.2 L 300 HP BRAVO 3",
                valor: 122940.0,
              },
              {
                name: "MERCRUISER V6, 270 HP, DTS, BRAVO 3, DIESEL",
                valor: 215930.0,
              },
            ],
            acessorios: [
              {
                name:
                  "KIT LUX:  Roller em inox, espelho de proa na cabine, lixeira em acrílico, Bandeira do Brasil, capa de transporte, revestimento acústico do motor, luz de porão, porta toalhas em inox WC, espelho WC, vaso elétrico, ducha WC, suporte de papel higiênico, base retrátil mesa cabine e Full LED targa",
                valor: 6900.0,
              },
              { name: "GLASS COCKPIT VOLVO PENTA 7", valor: 7000.0 },
              { name: "CONVÉS CINZA", valor: 5000.0 },
              { name: "CARRETA RODO ENCALHE", valor: 6600.0 },
              { name: "CRISTALEIRA EM ACRÍLICO", valor: 990.0 },
              { name: "CHURRASQUEIRA A CARVÃO", valor: 1500.0 },
              { name: "MESA DE TEKA NO COCKPIT", valor: 1000.0 },
              { name: "COMPLEMENTO ESTOFADO DE PROA", valor: 1500.0 },
              { name: "TOLDO", valor: 4400.0 },
              { name: "PISO EVA NHD BOATS", valor: 5500.0 },
              { name: "PISO TEKA SINTÉTICA NHD BOATS", valor: 6500.0 },
              { name: "OMBRELLONE  NHD BOATS", valor: 1500.0 },
              { name: "ÂNCORA 7,5 KGS INOX", valor: 2000.0 },
              { name: "GUINCHO ELÉTRICO C/ 40m DE CORRENTE", valor: 9800.0 },
              { name: "SONAR GARMIN ECHO 301", valor: 4000.0 },
              { name: "GPS SIMRAD 7 POL. C/ SONDA", valor: 9000.0 },
              { name: "SISTEMA SOM 2 PARES ALTO FALANTES", valor: 2800.0 },
              { name: "SISTEMA SOM 3 PARES ALTO FALANTES", valor: 3500.0 },
              {
                name:
                  "KIT SOM PREMIUM -SISTEMA DE SOM BOSS COM 2 PARES ALTO FALANTES JBL  6 X 9 + 1 PAR 6'' + SUBWOOFER 12 POLEGADAS",
                valor: 7000.0,
              },
              { name: "FAROL DE BUSCA", valor: 1690.0 },
              { name: "RADIO VHF + ANTENA", valor: 2600.0 },
              { name: "BUZINA", valor: 900.0 },
              { name: "LUZ SUB AQUÁTICA (PAR)", valor: 1500.0 },
              {
                name: "LUZ SUB AQUÁTICA LED 7 cores 12 prog. (PAR)",
                valor: 3000.0,
              },
              { name: "BATERIA AUXILIAR 150 Ah", valor: 1500.0 },
              { name: "FLAPS HIDRÁULICOS", valor: 7000.0 },
              { name: "LUZ STROBO", valor: 1000.0 },
              {
                name:
                  "KIT ENXOVAL NHD 280:  6 ALMOFADAS, 1 LENÇOL, 1 MANTA, 2 TOALHAS DE ROSTO e 2 TOALHAS DE BANHO.",
                valor: 2500.0,
              },
              { name: "FECHAMENTO TOTAL DO TOLDO", valor: 7000.0 },
              { name: "ARMÁRIO ACRÍLICO NA CABINE", valor: 1200.0 },
              { name: "SOLÁRIO DE PROA", valor: 2900.0 },
              {
                name:
                  "CONJUNTO MICROONDAS (MÓVEL EM TEKA + MICROONDAS 20 L + INVERSOR XANTREX 1800W, 110 V)",
                valor: 8700.0,
              },
              { name: "TV LED 12 V + ANTENA", valor: 3800.0 },
              { name: "GELADEIRA ELBER 52 L 12V", valor: 5000.0 },
            ],
          },
          {
            modelo: "nhd280popa",
            casco: 195000.0,
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
                valor: 105170.0,
              },
              {
                name: "YAMAHA F300 BETX, V6 ( DIR HID )",
                valor: 123200.0,
              },
              {
                name: "MERCURY 250 XL ,V8 4 STK (  DIR HID )",
                valor: 111500.0,
              },
              {
                name: "MERCURY 300 XL, V8  4 STK ( DIR HID )",
                valor: 124950.0,
              },
              {
                name: "PARELHA YAMAHA F 150 HP 4T ( DIR HID )",
                valor: 165270.0,
              },
            ],
            acessorios: [
              {
                name:
                  "KIT LUX:  Roller em inox, espelho de proa na cabine, lixeira em acrílico, Bandeira do Brasil, capa de transporte, revestimento acústico do motor, luz de porão, porta toalhas em inox WC, espelho WC, vaso elétrico, ducha WC, suporte de papel higiênico, base retrátil mesa cabine e Full LED targa",
                valor: 6900.0,
              },
              { name: "GLASS COCKPIT VOLVO PENTA 7", valor: 7000.0 },
              { name: "CONVÉS CINZA", valor: 5000.0 },
              { name: "CARRETA RODO ENCALHE", valor: 6600.0 },
              { name: "CRISTALEIRA EM ACRÍLICO", valor: 990.0 },
              { name: "CHURRASQUEIRA A CARVÃO", valor: 1500.0 },
              { name: "MESA DE TEKA NO COCKPIT", valor: 1000.0 },
              { name: "COMPLEMENTO ESTOFADO DE PROA", valor: 1500.0 },
              { name: "TOLDO", valor: 4400.0 },
              { name: "PISO EVA NHD BOATS", valor: 5500.0 },
              { name: "PISO TEKA SINTÉTICA NHD BOATS", valor: 6500.0 },
              { name: "OMBRELLONE  NHD BOATS", valor: 1500.0 },
              { name: "ÂNCORA 7,5 KGS INOX", valor: 2000.0 },
              { name: "GUINCHO ELÉTRICO C/ 40m DE CORRENTE", valor: 9800.0 },
              { name: "SONAR GARMIN ECHO 301", valor: 4000.0 },
              { name: "GPS SIMRAD 7 POL. C/ SONDA", valor: 9000.0 },
              { name: "SISTEMA SOM 2 PARES ALTO FALANTES", valor: 2800.0 },
              { name: "SISTEMA SOM 3 PARES ALTO FALANTES", valor: 3500.0 },
              {
                name:
                  "KIT SOM PREMIUM -SISTEMA DE SOM BOSS COM 2 PARES ALTO FALANTES JBL  6 X 9 + 1 PAR 6'' + SUBWOOFER 12 POLEGADAS",
                valor: 7000.0,
              },
              { name: "FAROL DE BUSCA", valor: 1690.0 },
              { name: "RADIO VHF + ANTENA", valor: 2600.0 },
              { name: "BUZINA", valor: 900.0 },
              { name: "LUZ SUB AQUÁTICA (PAR)", valor: 1500.0 },
              {
                name: "LUZ SUB AQUÁTICA LED 7 cores 12 prog. (PAR)",
                valor: 3000.0,
              },
              { name: "BATERIA AUXILIAR 150 Ah", valor: 1500.0 },
              { name: "FLAPS HIDRÁULICOS", valor: 7000.0 },
              { name: "LUZ STROBO", valor: 1000.0 },
              {
                name:
                  "KIT ENXOVAL NHD 280:  6 ALMOFADAS, 1 LENÇOL, 1 MANTA, 2 TOALHAS DE ROSTO e 2 TOALHAS DE BANHO.",
                valor: 2500.0,
              },
              { name: "FECHAMENTO TOTAL DO TOLDO", valor: 7000.0 },
              { name: "ARMÁRIO ACRÍLICO NA CABINE", valor: 1200.0 },
              { name: "SOLÁRIO DE PROA", valor: 2900.0 },
              {
                name:
                  "CONJUNTO MICROONDAS (MÓVEL EM TEKA + MICROONDAS 20 L + INVERSOR XANTREX 1800W, 110 V)",
                valor: 8700.0,
              },
              { name: "TV LED 12 V + ANTENA", valor: 3800.0 },
              { name: "GELADEIRA ELBER 52 L 12V", valor: 5000.0 },
            ],
          },
          {
            modelo: "nhd340",
            casco: 409600.0,
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
                valor: 242400.0,
              },
              {
                name: "VOLVO PENTA V6 240 C, 4.3L, DPS, EVC",
                valor: 266200.0,
              },
              {
                name: "VOLVO PENTA V6 280 , 4.3L, DPS",
                valor: 240800.0,
              },
              {
                name: "VOLVO PENTA V6 280 , 4.3L, DPS, EVC",
                valor: 275600.0,
              },
              {
                name: "VOLVO PENTA V8 300 , 5.3L, DPS",
                valor: 269200.0,
              },
              {
                name: "VOLVO PENTA D3 220HP, 2.4 L, DPS DIESEL",
                valor: 401000.0,
              },
              {
                name: "MERCRUISER 4.5 L 250 HP BRAVO 3",
                valor: 220280.0,
              },
              {
                name: "MERCRUISER 6.2 L 300 HP BRAVO 3",
                valor: 245940.0,
              },
              {
                name: "MERCRUISER 2.8 QSD 220 HP BRAVO 3 DIESEL",
                valor: 328560.0,
              },
            ],
            acessorios: [
              {
                name:
                  "KIT LUX:  Lixeira acrílico cockpit, Cristaleira acrílico cockpit, churrasqueira a carvão, Full LED cortesia, capa de cobertura, revestimento acústico do motor, luz de porão, buzina , roller de âncora em inox, espelho de proa na cabine, espelho WC, porta toalha em inox, porta papel higiênico, ducha.",
                valor: 6900.0,
              },
              { name: "KIT ENXOVAL NHD 340:  9 ALMOFADAS, 2 LENÇÓIS, 1 MANTA, 2 TOALHAS DE ROSTO e 2 TOALHAS DE BANHO E UMA BOLSA CAMURÇA", valor: 7000.0 },
              { name: "GLASS COCKPIT VOLVO PENTA 7", valor: 7000.0 },
              { name: "CONVÉS CINZA", valor: 5000.0 },
              { name: "CARRETA RODO ENCALHE", valor: 6600.0 },
              { name: "CRISTALEIRA EM ACRÍLICO", valor: 990.0 },
              { name: "CHURRASQUEIRA A CARVÃO", valor: 1500.0 },
              { name: "MESA DE TEKA NO COCKPIT", valor: 1000.0 },
              { name: "COMPLEMENTO ESTOFADO DE PROA", valor: 1500.0 },
              { name: "TOLDO", valor: 4400.0 },
              { name: "PISO EVA NHD BOATS", valor: 5500.0 },
              { name: "PISO TEKA SINTÉTICA NHD BOATS", valor: 6500.0 },
              { name: "OMBRELLONE  NHD BOATS", valor: 1500.0 },
              { name: "ÂNCORA 7,5 KGS INOX", valor: 2000.0 },
              { name: "GUINCHO ELÉTRICO C/ 40m DE CORRENTE", valor: 9800.0 },
              { name: "SONAR GARMIN ECHO 301", valor: 4000.0 },
              { name: "GPS SIMRAD 7 POL. C/ SONDA", valor: 9000.0 },
              { name: "SISTEMA SOM 2 PARES ALTO FALANTES", valor: 2800.0 },
              { name: "SISTEMA SOM 3 PARES ALTO FALANTES", valor: 3500.0 },
              {
                name:
                  "KIT SOM PREMIUM -SISTEMA DE SOM BOSS COM 2 PARES ALTO FALANTES JBL  6 X 9 + 1 PAR 6'' + SUBWOOFER 12 POLEGADAS",
                valor: 7000.0,
              },
              { name: "FAROL DE BUSCA", valor: 1690.0 },
              { name: "RADIO VHF + ANTENA", valor: 2600.0 },
              { name: "BUZINA", valor: 900.0 },
              { name: "LUZ SUB AQUÁTICA (PAR)", valor: 1500.0 },
              {
                name: "LUZ SUB AQUÁTICA LED 7 cores 12 prog. (PAR)",
                valor: 3000.0,
              },
              { name: "BATERIA AUXILIAR 150 Ah", valor: 1500.0 },
              { name: "FLAPS HIDRÁULICOS", valor: 7000.0 },
              { name: "LUZ STROBO", valor: 1000.0 },
              {
                name:
                  "KIT ENXOVAL NHD 280:  6 ALMOFADAS, 1 LENÇOL, 1 MANTA, 2 TOALHAS DE ROSTO e 2 TOALHAS DE BANHO.",
                valor: 2500.0,
              },
              { name: "FECHAMENTO TOTAL DO TOLDO", valor: 7000.0 },
              { name: "ARMÁRIO ACRÍLICO NA CABINE", valor: 1200.0 },
              { name: "SOLÁRIO DE PROA", valor: 2900.0 },
              {
                name:
                  "CONJUNTO MICROONDAS (MÓVEL EM TEKA + MICROONDAS 20 L + INVERSOR XANTREX 1800W, 110 V)",
                valor: 8700.0,
              },
              { name: "TV LED 12 V + ANTENA", valor: 3800.0 },
              { name: "GELADEIRA ELBER 52 L 12V", valor: 5000.0 },
            ],
          },
        ],
      },
    ];

    let sel = parm;
    let toActive = dataBase[0].embarcacao;

    const formActive = toActive.find((el) => el.modelo === sel);
    let acessorioSelect = document.getElementById("acessorios-form");
    let corSelect = document.getElementById("cor-form");
    let corEstofadoSelect = document.getElementById("corestofado-form");
    let motorSelect = document.getElementById(`motor`);
    let optionsCor = formActive.corCasco;
    let optionsCorEstofado = formActive.corEstofado;
    let optionsAcessorios = formActive.acessorios;
    let optionsMotor = formActive.motor;
    let valueCasco = formActive.casco;

    $(`#${parm}-form`).append(
      `<input type="text" id="casco" name="casco" value="${valueCasco}" hidden>
      <button type="submit" class="btn btn-primary w-100"> Enviar </button>
      `
    );
    for (var i = 0; i < optionsMotor.length; i++) {
      var opt = optionsMotor[i];
      var el = document.createElement("option");
      el.setAttribute("valor", optionsMotor[i].valor);
      el.textContent = opt.name;
      el.value = opt.name;
      motorSelect.appendChild(el);
    }

    for (var i = 0; i < optionsAcessorios.length; i++) {
      var checkBoxGroup = document.createElement("div");
      var checkBox = document.createElement("input");
      var label = document.createElement("label");
      checkBox.type = "checkbox";
      checkBox.setAttribute("valor", optionsAcessorios[i].valor);
      checkBox.value = optionsAcessorios[i].name;
      checkBox.name = "acessorios";
      acessorioSelect.appendChild(checkBoxGroup);
      checkBoxGroup.appendChild(checkBox);
      checkBoxGroup.appendChild(label);
      label.appendChild(document.createTextNode(optionsAcessorios[i].name));
    }

    for (var i = 0; i < optionsCor.length; i++) {
      var radioGroup = document.createElement("div");
      var radioButton = document.createElement("input");
      var label = document.createElement("label");
      radioButton.type = "radio";
      radioButton.name = "corCasco";
      radioButton.value = optionsCor[i];
      corSelect.appendChild(radioGroup);
      radioGroup.appendChild(radioButton);
      radioGroup.appendChild(label);
      label.appendChild(document.createTextNode(optionsCor[i]));
    }

    for (var i = 0; i < optionsCorEstofado.length; i++) {
      var checkGroup = document.createElement("div");
      let checkBox = document.createElement("input");
      let label = document.createElement("label");
      checkBox.name = "corEstofado";
      checkBox.type = "radio";
      checkBox.value = optionsCorEstofado[i];
      corEstofadoSelect.appendChild(checkGroup);
      checkGroup.appendChild(checkBox);
      checkGroup.appendChild(label);
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
            <select name="motor" id="motor"> </select>
        </div>
        <div class="form-group">
            <label for="">Acessorios:</label>
            <div id="acessorios-form">
            </div>
        </div>
       
        `);

    displayForms(modelo);
  };

  function sucessRoute(resp) {
    $("#responseSucess").append(resp);
    $("#responseSucess").removeClass("d-none");
    $(".collapse").collapse("hide");
  }

  function backRoute() {
    $(".collapse").collapse("hide");
    $("#controlPanel").removeClass("d-none");
    $("#responseSucess").addClass("d-none");
    $('#responseSucess').empty();
    $(".btn-back").remove();
  }

  const emptyForm = function (modelo) {
    $(`#${modelo}`).empty();
  };

  $(".collapse").on("shown.bs.collapse", function () {
    let modelo = $(this).attr("id");

    $("nav").append(`
    <button type="button" class="btn-back ml-auto" id="btn-back-${modelo}">
    <svg id="btn-back-${modelo}" xmlns="http://www.w3.org/2000/svg" height="42" width="42" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 512 512" xml:space="preserve" class="w-100">
    <g>
      <g>
        <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M313.749,347.584
          c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251L176.917,271.083
          c-8.341-8.341-8.341-21.824,0-30.165l106.667-106.667c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165L222.165,256
          L313.749,347.584z" fill="#fff"/>
      </g>
    </g>
    </svg>
     </button>
    `);

    $("#controlPanel").addClass("d-none");

    makeForm(modelo);

    let btnBack = document.getElementById(`btn-back-${modelo}`);
    btnBack.addEventListener("click", backRoute);

    $(`#${modelo}-form`).validate({
      rules: {
        email: {
          required: true,
          email: true,
        },
        name: "required",
        telefone: "required",
        corCasco: "required",
        corEstofado: "required",
      },
      messages: {
        email: {
          required: "Este campo é obrigatório.",
          email: "E-mail inválido, por favor, tente novamente",
        },
        name: "Este campo é obrigatório.",
        telefone: "Este campo é obrigatório.",
        corCasco: "Este campo é obrigatório.",
        corEstofado: "Este campo é obrigatório.",
      },
      submitHandler: function (form) {
        const serializeForm = $(form).serializeEmail();

        const dataAcessorios = serializeForm.acessorios || [];
        let totalAcce = 0;

        if (typeof dataAcessorios === "object") {
          for (var h = 0; h < dataAcessorios.length; h++) {
            let uniqValue = $(`input[value="${dataAcessorios[h]}"]`).attr(
              "valor"
            );
            let transformNumber = parseInt(uniqValue);

            totalAcce = transformNumber + totalAcce;
          }
        } else {
          let uniqValue = $(`input[value="${dataAcessorios}"]`).attr(
            "valor"
          );
          let transformNumber = parseInt(uniqValue);
          totalAcce = transformNumber;
        }

        let initValueMotor = parseInt(
          $(`option[value="${serializeForm.motor}"]`).attr("valor")
        );
        let initValueCasco = parseInt($("#casco").val());
        let valorTotal = initValueMotor + initValueCasco + totalAcce;
        let final = valorTotal.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        });

        const fullData = {
          ...serializeForm,
          final,
        };

        $.ajax({
          type: "POST",
          url: "./mail/mail.php",
          data: fullData,
          success: function (response) {
            sucessRoute(response);
          },
          beforeSend: function() {
            $(".generalForm input").attr("disabled", "disabled");
            $(".generalForm select").attr("disabled", "disabled");
            $(".generalForm button[type='submit']").addClass("d-none");
          },
          error: function (e) {
            sucessRoute(e);
          },
        });
      },
    });
  });

  $(".collapse").on("hidden.bs.collapse", function () {
    let modelo = $(this).attr("id");
    emptyForm(modelo);
  });
});
