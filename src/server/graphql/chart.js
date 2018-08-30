const {gql} = require('apollo-server');

const charts = [
    {
        name: 'primera',
        url: 'https://spotifycharts.com/regional/global/daily/2018-08-23',
        data: '{[{Position:1,TrackName:"in my feelings",Artist:"drake",Streams:100,URL:"https://open.spotify.com/track/2G7V7zsVDxg1yRsu7Ew9RJ"},{Position:1,TrackName:"in my feelings",Artist:"drake",Streams:100,URL:"https://open.spotify.com/track/2G7V7zsVDxg1yRsu7Ew9RJ"},{Position:1,TrackName:"in my feelings",Artist:"drake",Streams:100,URL:"https://open.spotify.com/track/2G7V7zsVDxg1yRsu7Ew9RJ"},{Position:1,TrackName:"in my feelings",Artist:"drake",Streams:100,URL:"https://open.spotify.com/track/2G7V7zsVDxg1yRsu7Ew9RJ"},{Position:1,TrackName:"in my feelings",Artist:"drake",Streams:100,URL:"https://open.spotify.com/track/2G7V7zsVDxg1yRsu7Ew9RJ"},{Position:1,TrackName:"in my feelings",Artist:"drake",Streams:100,URL:"https://open.spotify.com/track/2G7V7zsVDxg1yRsu7Ew9RJ"}]}',
        country: 'global',
        metadata: '{}',
        site: 'Spotify'
    },
    {
        name: 'segunda',
        url: 'https://spotifycharts.com/regional/global/daily/2018-08-23',
        data: '{[{Position:1,TrackName:"in my feelings",Artist:"drake",Streams:100,URL:"https://open.spotify.com/track/2G7V7zsVDxg1yRsu7Ew9RJ"},{Position:1,TrackName:"in my feelings",Artist:"drake",Streams:100,URL:"https://open.spotify.com/track/2G7V7zsVDxg1yRsu7Ew9RJ"},{Position:1,TrackName:"in my feelings",Artist:"drake",Streams:100,URL:"https://open.spotify.com/track/2G7V7zsVDxg1yRsu7Ew9RJ"},{Position:1,TrackName:"in my feelings",Artist:"drake",Streams:100,URL:"https://open.spotify.com/track/2G7V7zsVDxg1yRsu7Ew9RJ"},{Position:1,TrackName:"in my feelings",Artist:"drake",Streams:100,URL:"https://open.spotify.com/track/2G7V7zsVDxg1yRsu7Ew9RJ"},{Position:1,TrackName:"in my feelings",Artist:"drake",Streams:100,URL:"https://open.spotify.com/track/2G7V7zsVDxg1yRsu7Ew9RJ"}]}',
        country: 'global',
        metadata: '{}',
        site: 'Spotify'
    }
];

const sites = [{name: 'Spotify', description: 'sitio papi'}];
const countries = [{code: 'global', name: 'Global', site: 'Spotify'}, {
    code: 'us',
    name: 'United States',
    site: 'Spotify'
},
    {code: 'gb', name: 'United Kingdom', site: 'Spotify'},];
const dates = [{ name:"2018-08-16",code:"08/16/2018",site:"Spotify"},
                {name:"2018-08-15",code:"08/15/2018",site:"Spotify"},
                {name:"2018-08-14",code:"08/14/2018",site:"Spotify"}]
const chartTypes = [{name:"Top 200",code:"regional",Site:"Spotify"},{name:"Viral",code:"viral",site:"Spotify"}
]

const typeDefs = gql`
    type Site {
        id: ID!
        name: String
        url: String
        description: String
        charts: [Chart]
        countries: [Country]
        dates: [Date]
        periods: [Period]
        category: String
    }
    type Chart {
        id: ID!
        name: String
        url: String
        data: String
        country: String
        metadata: String
        site: Site!
    }
   
    type Country {
        name: String
        code: String
        site: Site!
    }
    type Date {
        name: String
        code: String
        site: Site!
    }
    type Period {
        name: String
        code: String
        site: Site!
    }
    
    type Query {
        charts: [Chart]
        sites: [Site]
        info: String!
        filters: String
    }
    
`;

const resolvers = {
    Query: {
        charts:  () => charts,
        sites:  () => sites,
        info: () => `This is the API of a SpotifyCharts Clone`,
        filters: ()=> {return JSON.stringify({dates:dates, countries:countries, chartTypes:chartTypes})}
    },Site: {
        charts(site) {
            return filter(charts, { site: site.name });
        },
    },
};
export {typeDefs, resolvers}