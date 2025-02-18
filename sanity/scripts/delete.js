// sanity/scripts/deleteHomepage.js
import { client } from '../client.js'; // or '../client.js' depending on your setup

async function deleteHomepage() {
    try {
        const result = await client.delete('homepage');
        console.log('Homepage document deleted:', result);
    } catch (error) {
        console.error('Error deleting homepage document:', error);
    }
}

deleteHomepage();