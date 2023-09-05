import { Client } from '@elastic/elasticsearch';

const client = new Client({
    node: process.env.REACT_APP_API_URL,
});

// export async function checkClusterStatus() {
//     try {
//         const response = await client.cluster.health();
//         console.log(response);
//     } catch (error) {
//         console.error('Error fetching cluster status:', error);
//     }
// }

// export function hello() {
//     console.log('hello');
// }
