const WomenProducts = [
    { id: "women-item1", name: 'Blossom Walk', price: '2500' , image: {shoe1: '/shoes-img/women/1-a.png',shoe2: '/shoes-img/women/1-b.png',shoe3: '/shoes-img/women/1-c.png'}, color: {shoe1: 'pink', shoe2: 'skin', shoe3: 'orange'} },
    { id: "women-item2", name: 'Serene Step', price: '3599',  image: {shoe1: '/shoes-img/women/2-a.png',shoe2: '/shoes-img/women/2-b.png',shoe3: '/shoes-img/women/2-c.png'}, color: {shoe1: 'white-green', shoe2: 'white-purple', shoe3: 'white'} },
    { id: "women-item3", name: "Luna Lace", price: '6599', image: {shoe1: '/shoes-img/women/3-a.png',shoe2: '/shoes-img/women/3-b.png',shoe3: '/shoes-img/women/3-c.png'}, color: {shoe1: 'white', shoe2: 'brown', shoe3: 'black'} },
    { id: "women-item4", name: 'Radiant Stride', price: '7999', image: {shoe1: '/shoes-img/women/4-a.png',shoe2: '/shoes-img/women/4-b.png',shoe3: '/shoes-img/women/4-c.png'}, color: {shoe1: 'pink', shoe2: 'white', shoe3: 'blue'} },
    { id: "women-item5", name: 'Enchant Walk', price: '3200', image: {shoe1: '/shoes-img/women/5-a.png',shoe2: '/shoes-img/women/5-b.png',shoe3: '/shoes-img/women/5-c.png'}, color: {shoe1: 'white-blue', shoe2: 'light-black', shoe3: 'white'} },
    { id: "women-item6", name: 'Aurora Glide', price: '5299', image: {shoe1: '/shoes-img/women/6-a.png',shoe2: '/shoes-img/women/6-b.png',shoe3: '/shoes-img/women/6-c.png'}, color: {shoe1: 'pink', shoe2: 'blue', shoe3: 'white'} },
    { id: "women-item7", name: 'Whisper Sole', price: '3999', image: {shoe1: '/shoes-img/women/7-a.png',shoe2: '/shoes-img/women/7-b.png',shoe3: '/shoes-img/women/7-c.png'}, color: {shoe1: 'light-purple', shoe2: 'white', shoe3: 'black'} },
    { id: "women-item8", name: 'Ember Elevate', price: '999', image: {shoe1: '/shoes-img/women/8-a.png',shoe2: '/shoes-img/women/8-b.png',shoe3: '/shoes-img/women/8-c.png'}, color: {shoe1: 'white-black', shoe2: 'black-red', shoe3: 'blue'} },
    { id: "women-item9", name: 'Pearl Petal', price: '2499', image: {shoe1: '/shoes-img/women/9-a.png',shoe2: '/shoes-img/women/9-b.png',shoe3: '/shoes-img/women/9-c.png'}, color: {shoe1: 'pink', shoe2: 'black', shoe3: 'white'} },
    { id: "women-item10", name: 'Radiant Rise', price: '6500', image: {shoe1: '/shoes-img/women/10-a.png',shoe2: '/shoes-img/women/10-b.png',shoe3: '/shoes-img/women/10-c.png'}, color: {shoe1: 'orange', shoe2: 'purple', shoe3: 'pink'} },
    { id: "women-item11", name: 'Velvet Vista', price: '8500', image: {shoe1: '/shoes-img/women/11-a.png',shoe2: '/shoes-img/women/11-b.png',shoe3: '/shoes-img/women/11-c.png'}, color: {shoe1: 'purple', shoe2: 'black', shoe3: 'white'} },
    { id: "women-item12", name: 'Opal Orbit', price: '7599', image: {shoe1: '/shoes-img/women/12-a.png',shoe2: '/shoes-img/women/12-b.png',shoe3: '/shoes-img/women/12-c.png'}, color: {shoe1: 'pink', shoe2: 'black', shoe3: 'white'} },
    { id: "women-item13", name: 'Willow Walk', price: '4800', image: {shoe1: '/shoes-img/women/13-a.png',shoe2: '/shoes-img/women/13-b.png',shoe3: '/shoes-img/women/13-c.png'}, color: {shoe1: 'white', shoe2: 'white', shoe3: 'white'} },
    { id: "women-item14", name: 'Velvet Voyage', price: '5600', image: {shoe1: '/shoes-img/women/14-a.png',shoe2: '/shoes-img/women/14-b.png',shoe3: '/shoes-img/women/14-c.png'}, color: {shoe1: 'purple', shoe2: 'pink', shoe3: 'white'} },
    { id: "women-item15", name: 'Petal Pulse', price: '3500', image: {shoe1: '/shoes-img/women/15-a.png',shoe2: '/shoes-img/women/15-b.png',shoe3: '/shoes-img/women/15-c.png'}, color: {shoe1: 'skyblue', shoe2: 'pink', shoe3: 'blue'} },
    { id: "women-item16", name: 'Aurora Avenue', price: '2300', image: {shoe1: '/shoes-img/women/16-a.png',shoe2: '/shoes-img/women/16-b.png',shoe3: '/shoes-img/women/16-c.png'}, color: {shoe1: 'pink', shoe2: 'black', shoe3: 'white'} },
    { id: "women-item17", name: 'Mystic Muse', price: '6999', image: {shoe1: '/shoes-img/women/17-a.png',shoe2: '/shoes-img/women/17-b.png',shoe3: '/shoes-img/women/17-c.png'}, color: {shoe1: 'brown', shoe2: 'white', shoe3: 'orange'} },
    { id: "women-item18", name: 'Luna Luxe', price: '8900', image: {shoe1: '/shoes-img/women/18-a.png',shoe2: '/shoes-img/women/18-b.png',shoe3: '/shoes-img/women/18-c.png'}, color: {shoe1: 'green', shoe2: 'black', shoe3: 'black'} },
    { id: "women-item19", name: 'Velvet Voyage', price: '7900', image: {shoe1: '/shoes-img/women/19-a.png',shoe2: '/shoes-img/women/19-b.png',shoe3: '/shoes-img/women/19-c.png'}, color: {shoe1: 'purple', shoe2: 'black', shoe3: 'black-pink'} },
    { id: "women-item20", name: 'Aurora Astral', price: '5800', image: {shoe1: '/shoes-img/women/20-a.png',shoe2: '/shoes-img/women/20-b.png',shoe3: '/shoes-img/women/20-c.png'}, color: {shoe1: 'green', shoe2: 'pink', shoe3: 'white'} },
    { id: "women-item21", name: 'Petal Pulse', price: '9999', image: {shoe1: '/shoes-img/women/21-a.png',shoe2: '/shoes-img/women/21-b.png',shoe3: '/shoes-img/women/21-c.png'}, color: {shoe1: 'skyblue', shoe2: 'black', shoe3: 'pink'} },
    { id: "women-item22", name: 'Celestial', price: '8900', image: {shoe1: '/shoes-img/women/22-a.png',shoe2: '/shoes-img/women/22-b.png',shoe3: '/shoes-img/women/22-c.png'}, color: {shoe1: 'pink', shoe2: 'purple', shoe3: 'black'} },
    { id: "women-item23", name: 'Radiant Rhythm', price: '7999', image: {shoe1: '/shoes-img/women/23-a.png',shoe2: '/shoes-img/women/23-b.png',shoe3: '/shoes-img/women/23-c.png'}, color: {shoe1: 'skyblue', shoe2: 'blue', shoe3: 'purple'} },
    { id: "women-item24", name: 'Opal Glide', price: '6999', image: {shoe1: '/shoes-img/women/24-a.png',shoe2: '/shoes-img/women/24-b.png',shoe3: '/shoes-img/women/24-c.png'}, color: {shoe1: 'skyblue', shoe2: 'pink', shoe3: 'white'} }
  ];


export default WomenProducts;

