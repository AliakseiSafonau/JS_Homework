function Animal(name) {
    var self = this;
    this.name = name;
    var foodAmount = 0;

    function formatFoodAmount() {
        return foodAmount + 'гр';
    }

    this.dailyNorm = function (amount) {
        if (!arguments.length) {
            return formatFoodAmount();
        }
        try {
            if (amount < 50 || amount > 100) {
                throw new Error('некорректное число');
            }
        } catch (e) {
            console.log('Ошибка! Нельзя сыпать столько корма');
        }

        foodAmount = amount;
        return formatFoodAmount();
    }

    this.feed = function () {
        return 'Насыпаем в миску ' + self.dailyNorm(50) + ' корма.';
    }
}

var animal = new Animal('Барсик');

function Cat(name) {
    Animal.call(this,name);
    var animalFeed = this.feed;
    var self = this;

    self.stroke = function () {
        console.log('Гладим кота');
        return self;
    }

    self.feed = function () {
        console.log(animalFeed());
        console.log('Кот доволен ^_^');
        return self;
    }
}
var barsik = new Cat('Барсик');

console.log(animal.feed());
console.log(barsik.name);
barsik.stroke().feed().feed().stroke();



