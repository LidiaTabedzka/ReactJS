var Counter1 = React.createClass({
    getInitialState: function() {
        console.log("getInitialState: gdy chcę ustawić jakiś początkowy stan, początkową wartość dla danego elementu, która będzie dalej wykorzystywana w obliczeniach");
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        console.log("render: tworzenie elementu");
        return React.createElement('div', {className: 'single-counter'},
            React.createElement('span', {}, 'Pierwszy Licznik: ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, "Zwiększ licznik o 1"),
            React.createElement('button', {onClick: this.decrement}, "Zmniejsz licznik o 1")
        );
    },

    getDefaultProps: function() {
        console.log("getDefaultProps: gdy chcę ustawić jakieś defaultowe wartości propsów, które zostaną użyte, gdy przy tworzeniu instancji nie zostały przekazane żadne propsy");
    },

    componentWillMount: function() {
        console.log("componentWillMount: gdy chcę połączyć się z bazą danych czy wysłać zapytanie Ajax zanim zostanie utworzony nowy element");
    },

    componentDidMount: function() {
        console.log("componentDidlMount: gdy został już utworzony element np. nowy kontakt w liście kontaktów, to może wtedy pokazać się jakieś powiadomienie albo dane z tego elementu mogą zostać zapisane na serwerze czy też można dodać jakiś event listener");
    },

    componentWillReceiveProps: function() {
        console.log("componentWillReceiveProps: mamy dostęp do nowych propsów i starych, możemy je więc tu porównać i w zależności od wyniku wykonać jakąś funkcję");
    },

    shouldComponentUpdate: function() {
        console.log("shouldComponentUpdate: jeśli chcemy zoptymalizować działanie naszej aplikacji, to możemy tu dodać warunek np. porównujący propsy, który gdy da true to nastąpi update elementu, a gdy false to nie");
        return true;
    },

    componentWillUpdate: function() {
        console.log("componentWillUpdate: jeśli użyliśmy funkcji shouldComponentUpdate i dała ona wartość true, to możemy przed updatem elementu jeszcze wykonać jakąś funkcję");
    },

    componentDidUpdate: function() {
        console.log("componentDidUpdate: po update elementu mamy nowe propsy i możemy wywołać tu podobne funkcje co w componentDidMount");
    },

    componentWillUnmount: function() {
        console.log("componentWillUnmount: gdy element zostanie usunięty, to możemy usunąć metody stworzone w componentDidMount, wyzerować interwał, odpiąć event listener");
    }
});

var Counter2 = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {className: 'single-counter'},
            React.createElement('span', {}, 'Drugi Licznik: ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, "Zwiększ licznik o 1"),
            React.createElement('button', {onClick: this.decrement}, "Zmniejsz licznik o 1")
        );
    }
});

var element = React.createElement("div", {}, 
                React.createElement(Counter1),
                React.createElement(Counter2)
              );

ReactDOM.render(element, document.getElementById('app'));