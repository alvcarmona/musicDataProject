const { gql } = require('apollo-server');
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

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


const sites = [{name:'Spotify', description:'sitio papi'}];


const typeDefs = gql`
    type Chart {
        name: String
        url: String
        data: String
        country: String
        metadata: String
        site: Site!
    }
    type Site {
        name: String
        url: String
        description: String
        charts: [Chart]
    }

    type Query {
        charts: [Chart]
        sites: [Site]
    }
`;

const resolvers = {
    Query: {
        charts:  () => charts,
        sites:  () => sites,
    },Site: {
        charts(site) {
            return filter(charts, { site: site.name });
        },
    },
   // JSON: GraphQLJSON
};
export {typeDefs,resolvers}