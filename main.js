icecream= 0
money= 10
Buycost = 10
icecreamBuy = .5
icecreamSell = 1
Sellcost = 50
multiplier = 1
power = 0
mantissa = 0
function format(amount) {
  power = Math.floor(Math.log10(amount)) - 1
  mantissa = amount / Math.pow(10, power)
  if (power < 3) return amount.toFixed(2)
  return mantissa.toFixed(2) + "e" + power
}
function makeIcecream() {
  if (money >= icecreamBuy.toFixed(2)*multiplier) {
    icecream += 1*multiplier
    money -= icecreamBuy.toFixed(2)*multiplier
  }
  document.getElementById("icecream").innerHTML = "You have " + format(icecream) + " Icecream!"
  document.getElementById("currency").innerHTML = "You have $" + format(money)
}
function sellIcecream() {
  if (icecream >= multiplier){
    icecream -= 1*multiplier
    money += icecreamSell*multiplier
  }
  document.getElementById("icecream").innerHTML = "You have " + format(icecream) + " Icecream!"
  document.getElementById("currency").innerHTML = "You have $" + format(money)
}
function decreaseBuy() {
  if (icecream >= Buycost.toFixed(0)) {
    icecream -= Buycost.toFixed(0)
    Buycost *= 1.1
    icecreamBuy -= icecreamBuy*0.001
    document.getElementById("Buycost").innerHTML = "cost " + format(Buycost) + " Icecream"
  }
  document.getElementById("icecream").innerHTML = "You have " + format(icecream) + " Icecream!"
  document.getElementById("currency").innerHTML = "You have $" + format(money)
}
function increaseSell() {
  if (money >= Sellcost.toFixed(0)) {
    money -= Sellcost.toFixed(0)
    Sellcost *= 1.2
    icecreamSell += 0.1
    document.getElementById("Sellcost").innerHTML = "cost: $" + format(Sellcost)
  }
  document.getElementById("icecream").innerHTML = "You have " + format(icecream) + " Icecream!"
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
