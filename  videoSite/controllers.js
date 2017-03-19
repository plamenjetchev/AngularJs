videoSite.controller('videoSiteController', function ($scope) {
    $scope.info = [
        {
        title: 'BMW',
        pictureUrl: 'http://o.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/http://o.aolcdn.com/commerce/autodata/images/USC50BMC681A021001.jpg',
        length: '3:32',
        category: 'Sport',
        subscribers: '3',
        date: new Date(2014, 12, 15).toDateString(),
        haveSubtitles: false,
        comments: [
            {
                username: 'Pesho Peshev' ,
                content: 'Congratulations Nakov',
                date: new Date (2014, 12, 15, 12, 30, 0).toDateString(),
                likes: '6',
                websiteUrl: 'http://pesho.com/'
            },
            {
                username: 'Plamen Jetchev' ,
                content: 'Congratulations Nakov',
                date: new Date(2014, 12, 15, 12, 30, 0).toDateString(),
                likes: '7',
                websiteUrl: 'http://funny.com'
            },
      ]
    },
    {
        title: 'Lamborgini',
        pictureUrl: "http://wallpaper-gallery.net/images/lamborghini/lamborghini-15.jpg",
        length: '1.20',
        category: 'Fun',
        subscribers: '3',
        date: new Date(2014, 12, 15).toDateString(),
        haveSubtitles: false,
        comments: [
            {
                username: 'Dimcho Dimchev' ,
                content: 'Congratulations Nakov',
                date: new Date (2014, 12, 15, 12, 30, 0).toDateString(),
                likes: '5',
                websiteUrl: 'http://dim4ou.com'
            },
            {
                username: 'Go6o Go6ev' ,
                content: 'Congratulations Nakov',
                date: new Date(2014, 12, 15, 12, 30, 0).toDateString(),
                likes: '2',
                websiteUrl: 'http://go6o.com/'
            },           
        ]
    },
    {
        title: 'Bugatti',
        pictureUrl: 'http://1car.ir/thumbnails/mark/4%D9%BE%D8%A7%DA%AF%D8%A7%D9%86%DB%8C-%D8%B2%D9%88%D9%86%D8%AF%D8%A7-%D8%A8%D9%88%DA%AF%D8%A7%D8%AA%DB%8C-%D9%88%DB%8C%D8%B1%D9%88%D9%86%20(2).jpg',
        length: '152:72',
        category: 'Turbo',
        subscribers: '34',
        date: new Date(2014, 12, 15).toDateString(),
        haveSubtitles: true,
        comments: [
            {
                username: 'Grue Gruev',
                content: 'Congratulations Nakov',
                date: new Date (2014, 12, 15, 12, 30, 0).toDateString(),
                likes: '25',
                websiteUrl: 'http://bugatti.com/'
            },
            {
                username: 'Sim4o Sim4ev' ,
                content: 'Congratulations Nakov',
                date: new Date(2014, 12, 15, 12, 30, 0).toDateString(),
                likes: '3',
                websiteUrl: 'http://bugatti.com/'
            },
        ]
    },
        {
        title: 'Bentley',
        pictureUrl: 'http://img03.deviantart.net/5305/i/2014/122/8/5/bentley_concept_sport__by_raymondpicasso-d7guwwm.jpg',
        length: '3:32',
        category: 'Transport',
        subscribers: '3',
        date: new Date(2014, 12, 15).toDateString(),
        haveSubtitles: true,
        comments: [
            {
                username: 'Ti6o Ti6ev',
                content: 'Congratulations Nakov',
                date: new Date (2014, 12, 15, 12, 30, 0).toDateString(),
                likes: '8',
                websiteUrl: 'http://ti6o.com/'
            },
            {
                username: 'Da4o Da4ev' ,
                content: 'Congratulations Nakov',
                date: new Date(2014, 12, 15, 12, 30, 0).toDateString(),
                likes: '15',
                websiteUrl: 'http://da4o.com/'
            },
            
        ]
    },
    {
        title: "Nissan",
        pictureUrl: 'http://hdwallpapersrocks.com/wp-content/uploads/2013/09/Nissan-red-sports-car-wallpaper.jpg',
        length: '5:32',
        category: 'Weels',
        subscribers: '12',
        date: new Date(2014, 10, 11).toDateString(),
        haveSubtitles: false,
        comments: [
            {
                username: 'Moni Monev' ,
                content: 'Congratulations Nakov',
                date: new Date (2014, 12, 15, 12, 30, 0).toDateString(),
                likes: '42',
                websiteUrl: 'http://moni.com/'
            },
            {
                username: 'Lu4o Lu4ev' ,
                content: 'Congratulations Nakov',
                date: new Date(2014, 10, 13, 9, 27, 0).toDateString(),
                likes: '24',
                websiteUrl: 'http://lu4o.com/'
            },
            
        ]
    },
    {
        title: 'Audi',
        pictureUrl: 'http://mecvns.com/wp-content/uploads/2017/03/pretty-inspiration-ideas-newest-audi-sports-car-audi-sport-car.jpg',
        length: '8:37',
        category: 'Auto',
        subscribers: '156',
        date: new Date(2009, 7, 5).toDateString(),
        haveSubtitles: false,
        comments: [
            {
                username: 'Vuio Vuiev' ,
                content: 'Congratulations Nakov',
                date: new Date (2014, 12, 15, 12, 30, 0).toDateString(),
                likes: '327',
                websiteUrl: 'http://vuio.com/'
            },
            {
                username: 'Volen Volev' ,
                content: 'Congratulations Nakov',
                date: new Date(2011, 9, 12, 9, 15, 0).toDateString(),
                likes: '75',
                websiteUrl: 'http://volen.com/'
            }
            
        ]
    }
    
    ];
});