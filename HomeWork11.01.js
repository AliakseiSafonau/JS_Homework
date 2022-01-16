function Animal() {
    var self = this;

    self._stroke = null;
    self._foodAmount = null;

    self.dailyNorm = function (amount) {
        if (!arguments.length) {
            return self._foodAmount;
        }
        self._foodAmount = amount;
        try {
            if (amount < 50 || amount > 100) {
                throw new Error('Некорректное количество корма');
            }
        }
        catch (e) {
            if ( amount < 50)  return console.log('Ошибка! Недостаточно корма');
            if ( amount > 100) return console.log('Ошибка! Корма выше нормы');
        }
    }

    self.feed = function (examination) {
        self.dailyNorm(examination);
        function formatFoodAmount() {

            if (self._foodAmount > 49 && self._foodAmount < 101) return self._foodAmount + "гр";
            else if (self._foodAmount) return self._foodAmount;
        }
        if (typeof formatFoodAmount() === 'string') {
            self._foodAmount = 'Насыпаем в миску ' + formatFoodAmount() + ' корма';
            return self;
        }
        else if(!formatFoodAmount()) {
            self._foodAmount = 'Вы не насыпали корм';
            return self;
        }
        else {
            self._foodAmount = 'Вы насыпали ' + self._foodAmount + 'гр корма';
            return self;
        }
    }

    self.stroke = function () {
        self._stroke = 'Гладим кота';
        return self;
    }
}

var animal = new Animal();

function Cat() {
    Animal.call(this);

    var parentFeed = this.feed;

    this.feed = function () {
        return parentFeed() + '. Кот доволен ^_^';
    }
}

var barsik = new Cat()

console.log(barsik.feed(110).stroke());


