var contacts = [
    {
        id: 1,
        firstName: 'Jan',
        lastName: 'Nowak',
        email: 'jan.nowak@example.com',
    },
    {
        id: 2,
        firstName: 'Adam',
        lastName: 'Kowalski',
        email: 'adam.kowalski@example.com',
    },
    {
        id: 3,
        firstName: 'Zbigniew',
        lastName: 'Koziol',
        email: 'zbigniew.koziol@example.com',
    },
    {
        id: 4,
        firstName: 'Anna',
        lastName: 'Kowalska',
        email: 'anna.kowalska@example.com',
    },
    {
        id: 5,
        firstName: 'Jan',
        lastName: 'Marciniuk',
        email: 'jan.marciniuk@example.com',
    },
    {
        id: 6,
        firstName: 'Karol',
        lastName: 'Grabarski',
        email: 'karol.grabarski@example.com',
    }
];
      
var contactForm = {
    firstName: '',
    lastName: '',
    email: ''
};

      
var App = React.createClass({
    render: function() {
        return (
            <div className='app'>
                <ContactForm contact={contactForm}/>
                <Contacts items={contacts}/>
            </div>
        );
    }
});