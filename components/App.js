var GIPHY_API_URL = 'http://api.giphy.com';
var GIPHY_PUB_KEY = 'sLQchj92LgrtXIpE71K4aUeM5ec1emD4';

App = React.createClass({
    getInitialState() {
        return {
            loading: false,
            searchingText: '',
            gif: {}
        };
    },

    handleSearch: function(searchingText) {
        this.setState({
          loading: true
        });
        var self = this;
        this.getGif(searchingText)
        .then(function(gif) {
            self.setState({
                loading: false,
                gif: gif,
                searchingText: searchingText
              });
            document.getElementById("errorMessage").innerText = "";
        })
        .catch(function(error) {
            self.setState({
                loading: false
              });
            document.getElementById("errorMessage").innerText = error.message;
        });
    },

    getGif: function(searchingText) {
        return new Promise(
            function(resolve, reject){
                var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;
                fetch(url, {
                    method: 'get'
                })
                .then(function(resp){
                    return resp.json();
                })
                .then(function(resp){
                    var gif = {
                        url: resp.data.fixed_width_downsampled_url,
                        sourceUrl: resp.data.url
                    };
                    resolve(gif);
                })
                .catch(function(error){
                    reject(new Error('server error - please try again later'));
                });
            }
        );
    },

    render: function() {

        var styles = {
            margin: '0 auto',
            textAlign: 'center'
        };

        return (
          <div style={styles}>
                <h1>Wyszukiwarka GIFów!</h1>
                <p>Znajdź gifa na <a href='http://giphy.com'>giphy</a>.<br/><br/>Naciskaj enter, aby pobrać kolejne gify.</p>
                <p id='errorMessage'></p>
                <Search onSearch={this.handleSearch}/>
            <Gif 
                loading={this.state.loading}
                url={this.state.gif.url}
                sourceUrl={this.state.gif.sourceUrl}
            />
          </div>
        );
    }
});