const { createClient } = require('@sanity/client');

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '73x7ss88',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2021-10-21',
    token: 'skH1zNvEKR7suJ6eQsCvnhsX9LRauiurC86BTtuKAWjKhExhq3uC61BWugGLcvBpfVNKuNVtt5TsVyKXg0RhvOS62TYuTJXT33qu67DiuKdTs0gtvwL2CDeaEOtOswFW2Y4kpOKKdEHvsjVqK1XayrV48JdYbkXSrkRV6XUDqfQzDwkwZok1',
    useCdn: false
});

async function deleteProjects() {
    try {
        // Query all project document IDs
        const ids = await client.fetch('*[_type=="project"]._id');
        console.log("Found project IDs:", ids);

        if (!ids.length) {
            console.log("No project documents found.");
            return;
        }

        // Delete each project
        for (const id of ids) {
            try {
                await client.delete(id);
                console.log("Deleted document:", id);
            } catch (err) {
                console.error("Error deleting document:", id, err.message);
            }
        }
        console.log("All projects deleted.");
    } catch (error) {
        console.error("Error fetching project IDs:", error.message);
    }
}

deleteProjects();
