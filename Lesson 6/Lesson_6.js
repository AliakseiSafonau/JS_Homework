function Animal() {

    var foodAmount = 0;

    function formatFoodAmount() {
        if (foodAmount) return foodAmount + "гр";
    }

    this.dailyNorm = function (amount) {
        if (!arguments.length) {
                return foodAmount;
        }
        try {
            if (amount < 50 || amount > 100) {
                throw new Error('некорректное число');
            }
        } catch (e) {
                console.log('Ошибка! Нельзя сыпать столько корма');
            }

        foodAmount = amount;
    }

    this.feed = function () {
        this.dailyNorm(49);
        if (foodAmount) return 'Насыпаем в миску ' + formatFoodAmount() + ' корма.';
            else return 'Миска пуста';
    }
}


var animal = new Animal();

function Cat() {
    Animal.call(this);
    var animalFeed = this.feed;
    var self = this;

    self.stroke = function () {
        console.log('Гладим кота');
        return self;
    }

    self.feed = function () {
        console.log(animalFeed.call(this));
        console.log('Кот доволен ^_^');
        return self;
    }
}
var barsik = new Cat()

console.log(animal.feed())
barsik.stroke().feed().feed().stroke();



