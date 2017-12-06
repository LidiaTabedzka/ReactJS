var moviesArray = [
    {
        id: 1,
        title: 'Pretty woman',
        desc: 'Komedia romantyczna',
        img: 'images/film1.jpg'
    },
    {
       id: 2,
       title: 'Król lew',
       desc: 'Film animowany',
       img: 'images/film2.jpg'
    },
    {
       id: 3,
       title: 'Hobbit',
       desc: 'Film fantasy',
       img: 'images/film3.jpg'       
    },
    {
       id: 4,
       title: 'Chata',
       desc: 'Film religijny/dramat',
       img: 'images/film4.jpg'       
    },
    {
       id: 5,
       title: 'Nietykalni',
       desc: 'Film biograficzny/komedia',
       img: 'images/film5.jpg'        
    }
];

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function(){
        return (
            React.createElement('li', {key: this.props.movie.id}, 
                React.createElement('h2', {}, this.props.movie.title),
                React.createElement('p', {}, this.props.movie.desc),
                React.createElement('img', {src: this.props.movie.img})
            )
        )
    }
});

var MoviesList = React.createClass({
    render: function(){
        return (
            React.createElement('div', {}, 
                React.createElement('h1', {}, 'Lista filmów'),
                React.createElement('ul', {}, movieElement)
            )
        )
    }
});

var movieElement = moviesArray.map(function(movie){
    return React.createElement(Movie, {key: movie.id, movie: movie})
});

var moviesListElement = React.createElement(MoviesList);

ReactDOM.render(moviesListElement, document.getElementById('app'));