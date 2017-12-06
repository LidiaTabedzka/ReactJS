var movies = [
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

var moviesElements = movies.map(function(movie){
    return React.createElement('li', {key: movie.id}, 
            React.createElement('h2', {}, movie.title),
            React.createElement('p', {}, movie.desc),
            React.createElement('img', {src: movie.img})
        );
});

var element = React.createElement('div', {}, 
                React.createElement('h1', {}, 'Lista filmów'),
                React.createElement('ul', {}, moviesElements)
            );

ReactDOM.render(element, document.getElementById('app'));