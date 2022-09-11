// https://www.omnicalculator.com/finance/gdp#how-to-calculate-gdp

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const v5 = document.getElementById('v5');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const grossdomesticproductRadio = document.getElementById('grossdomesticproductRadio');
const consumptionRadio = document.getElementById('consumptionRadio');
const investmentRadio = document.getElementById('investmentRadio');
const governmentpurchasesRadio = document.getElementById('governmentpurchasesRadio');
const exportsRadio = document.getElementById('exportsRadio');
const importsRadio = document.getElementById('importsRadio');

let grossdomesticproduct;
let consumption = v1;
let investment = v2;
let governmentpurchases = v3;
let exports = v4;
let imports = v5;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');
const variable5 = document.getElementById('variable5');

grossdomesticproductRadio.addEventListener('click', function() {
  variable1.textContent = 'Consumption';
  variable2.textContent = 'Investment';
  variable3.textContent = 'Government purchases';
  variable4.textContent = 'Exports';
  variable5.textContent = 'Imports';
  consumption = v1;
  investment = v2;
  governmentpurchases = v3;
  exports = v4;
  imports = v5;
  result.textContent = '';
});

consumptionRadio.addEventListener('click', function() {
  variable1.textContent = 'Gross domestic product';
  variable2.textContent = 'Investment';
  variable3.textContent = 'Government purchases';
  variable4.textContent = 'Exports';
  variable5.textContent = 'Imports';
  grossdomesticproduct = v1;
  investment = v2;
  governmentpurchases = v3;
  exports = v4;
  imports = v5;
  result.textContent = '';
});

investmentRadio.addEventListener('click', function() {
  variable1.textContent = 'Gross domestic product';
  variable2.textContent = 'Consumption';
  variable3.textContent = 'Government purchases';
  variable4.textContent = 'Exports';
  variable5.textContent = 'Imports';
  grossdomesticproduct = v1;
  consumption = v2;
  governmentpurchases = v3;
  exports = v4;
  imports = v5;
  result.textContent = '';
});

governmentpurchasesRadio.addEventListener('click', function() {
  variable1.textContent = 'Gross domestic product';
  variable2.textContent = 'Consumption';
  variable3.textContent = 'Investment';
  variable4.textContent = 'Exports';
  variable5.textContent = 'Imports';
  grossdomesticproduct = v1;
  consumption = v2;
  investment = v3;
  exports = v4;
  imports = v5;
  result.textContent = '';
});

exportsRadio.addEventListener('click', function() {
  variable1.textContent = 'Gross domestic product';
  variable2.textContent = 'Consumption';
  variable3.textContent = 'Investment';
  variable4.textContent = 'Government purchases';
  variable5.textContent = 'Imports';
  grossdomesticproduct = v1;
  consumption = v2;
  investment = v3;
  governmentpurchases = v4;
  imports = v5;
  result.textContent = '';
});

importsRadio.addEventListener('click', function() {
  variable1.textContent = 'Gross domestic product';
  variable2.textContent = 'Consumption';
  variable3.textContent = 'Investment';
  variable4.textContent = 'Government purchases';
  variable5.textContent = 'Exports';
  grossdomesticproduct = v1;
  consumption = v2;
  investment = v3;
  governmentpurchases = v4;
  exports = v5;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(grossdomesticproductRadio.checked)
    result.textContent = `Gross domestic product = ${computegrossdomesticproduct().toFixed(2)}`;

  else if(consumptionRadio.checked)
    result.textContent = `Consumption = ${computeconsumption().toFixed(2)}`;

  else if(investmentRadio.checked)
    result.textContent = `Investment = ${computeinvestment().toFixed(2)}`;

  else if(governmentpurchasesRadio.checked)
    result.textContent = `Government purchases = ${computegovernmentpurchases().toFixed(2)}`;

  else if(exportsRadio.checked)
    result.textContent = `Exports = ${computeexports().toFixed(2)}`;

  else if(importsRadio.checked)
    result.textContent = `Imports = ${computeimports().toFixed(2)}`;
})

// calculation

// grossdomesticproduct = consumption + investment + governmentpurchases + exports – imports

function computegrossdomesticproduct() {
  return Number(consumption.value) + Number(investment.value) + Number(governmentpurchases.value) + Number(exports.value) - Number(imports.value);
}

function computeconsumption() {
  return Number(grossdomesticproduct.value) - Number(investment.value) - Number(governmentpurchases.value) - Number(exports.value) + Number(imports.value);
}

function computeinvestment() {
  return Number(grossdomesticproduct.value) - Number(consumption.value) - Number(governmentpurchases.value) - Number(exports.value) + Number(imports.value);
}

function computegovernmentpurchases() {
  return Number(grossdomesticproduct.value) - Number(consumption.value) - Number(investment.value) - Number(exports.value) + Number(imports.value);
}

function computeexports() {
  return Number(grossdomesticproduct.value) - Number(consumption.value) - Number(investment.value) - Number(governmentpurchases.value) + Number(imports.value);
}

function computeimports() {
  return Number(consumption.value) + Number(investment.value) + Number(governmentpurchases.value) + Number(exports.value) - Number(grossdomesticproduct.value);
}