var GIPHY_API_URL = 'http://api.giphy.com';
var GIPHY_PUB_KEY = 'sLQchj92LgrtXIpE71K4aUeM5ec1emD4';

App = React.createClass({
    getInitialState() {
        return {
            loading: false,
            searchingText: '',
            gif: {},
            error: ''
        };
    },

    handleSearch: function(searchingText) {
        this.setState({
          loading: true
        });
        var self = this;
        this.getGif(searchingText)
            .then((gif) => {
                self.setState({
                    loading: false,
                    gif: gif,
                    searchingText: searchingText,
                    error: ''
                });
            })
            .catch((error) => {
                self.setState({
                    loading: false,
                    error: error.message
                });
            });
    },

    getGif: function(searchingText) { 
        var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;
        return fetch(url)
            .then(resp => resp.json())
            .then((respJson) => {
                var gif = {
                    url: respJson.data.fixed_width_downsampled_url,
                    sourceUrl: respJson.data.url
                };
                return gif;
            })
            .catch((error) => {
                throw new Error('server error - please try again later');
                return error;
            });           
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
                {
                   this.state.error ? <p id="errorMessage">{this.state.error}</p> : null
                }
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