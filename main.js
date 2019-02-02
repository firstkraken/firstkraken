icecream= 0
money= 10
Buycost = 10
icecreamBuy = .5
icecreamSell = 1
Sellcost = 50
multiplier = 1
power = 0
mantissa = 0
carrers = 0
var lastUpdate = Date.now()
function format(amount) {
  power = Math.floor(Math.log10(amount))
  mantissa = amount / Math.pow(10, power)
  if (power < 3) return amount.toFixed(2)
  return mantissa.toFixed(2) + "e" + power
}
function makeIcecream() {
  if (money >= icecreamBuy.toFixed(2)*multiplier) {
    icecream += 1*multiplier
    money -= icecreamBuy.toFixed(2)*multiplier
  }
  document.getElementById("icecream").innerHTML = "You have " + format(icecream) + " icecream!"
  document.getElementById("currency").innerHTML = "You have $" + format(money)
}
function sellIcecream() {
  if (icecream >= multiplier){
    icecream -= 1*multiplier
    money += icecreamSell*multiplier
  }
  document.getElementById("icecream").innerHTML = "You have " + format(icecream) + " icecream!"
  document.getElementById("currency").innerHTML = "You have $" + format(money)
}
function decreaseBuy() {
  if (icecreamBuy > 0.01) {
    if (icecream >= Buycost.toFixed(0)) {
      icecream -= Buycost.toFixed(0)
      Buycost *= 10
      icecreamBuy -= icecreamBuy*0.01
      document.getElementById("Buycost").innerHTML = "cost: " + format(Buycost) + " Icecream"
    }
  }
  document.getElementById("icecream").innerHTML = "You have " + format(icecream) + " icecream!"
  document.getElementById("currency").innerHTML = "You have $" + format(money)
}
function increaseSell() {
  if (money >= Sellcost.toFixed(0)) {
    money -= Sellcost.toFixed(0)
    Sellcost *= 2
    icecreamSell += 0.1
    document.getElementById("Sellcost").innerHTML = "cost: $" + format(Sellcost)
  }
  document.getElementById("icecream").innerHTML = "You have " + format(icecream) + " icecream!"
  document.getElementById("currency").innerHTML = "You have $" + format(money)
}
function plusMultiplier() {
  multiplier = multiplier*10
  document.getElementById("Multiplier").innerHTML = "Multiplier" + format(multiplier) +"x"
}
function minusMultiplier() {
  if (multiplier >= 10) {
    multiplier = multiplier/10
  }
  document.getElementById("Multiplier").innerHTML = "Multiplier" + format(multiplier) +"x"
}
function update(){
  document.getElementById("icecream").innerHTML = "You have " + format(icecream) + " icecream!"
  document.getElementById("currency").innerHTML = "You have $" + format(money)
  if (icecream >= 10**(10*(carrers+1))){
    if (money >= 10**(10*(carrers+1))){
      document.getElementById("carrer").classList.add('open')
    }
  }
}
function newCarrer() {
  if (icecream >= 10**(10*(carrers+1))){
    if (money >= 10**(10*(carrers+1))){
      icecream = 0
      money= 10
      Buycost = 10
      icecreamBuy = .5
      icecreamSell = 1
      Sellcost = 50
      multiplier = 1
      power = 0
      mantissa = 0
      carrers += 1
      icecreamSell += carrers
      document.getElementById("carrer").classList.remove('open')
      document.getElementById("Buycost").innerHTML = "cost: " + format(Buycost) + " Icecream"
      document.getElementById("Sellcost").innerHTML = "cost: $" + format(Sellcost)
      document.getElementById("Multiplier").innerHTML = "Multiplier" + format(multiplier) +"x"
    }
  }
}
function timer() {
  var diff = (Date.now() - lastUpdate) / 1000
  update()
  lastUpdate = Date.now()
}
setInterval(timer, 50)
