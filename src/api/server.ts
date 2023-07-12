// Were writing rules and functions here on how to communicate with our backend database, the url is from insomnia. You can write out the entire code including the way we used tokens in our code, see previous bookmarked documents. Instead of doing it that way this is another way to communicate with server/get data. Pay attention to the structure of the code. The server calls is an object and its going to have 4 functions in it (GET, CREATE, UPDATE, and DELETE) https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications SEE LINK TO USE BACKEND AND LEARN HOW TO PASS A TOKEN TO THE FRONT END
const token = 'c595c89d2997cd95852ed7df2eeb70327a97d99488f7b330' //You can run your own flask app that was built in class, use the token from the phonebook application and paste it here, This is a token from Schadre's github because the database wasnt responding

export const server_calls = {
    get: async () => { 
        const response = await fetch(`https://hotline-bling.glitch.me/api/contacts`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://hotline-bling.glitch.me/api/contacts`,
        {
            method: 'POST', //DONT USE 'PUT' here that is mneant for update
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data) //Research JSON.stringify

        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id: string, data:any = {}) => {
        const response = await fetch(`https://hotline-bling.glitch.me/api/contacts/${id}`,
        {
            method: 'POST', // update should be post
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        })

        if (!response.ok) {
            throw new Error('Failed to update data on the server')
        }

        return await response.json()
    },

    delete: async (id: string) => {
        const response = await fetch(`https://hotline-bling.glitch.me/api/contacts/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },

        })

        if (!response.ok) {
            throw new Error('Failed to delete data from the server')
        }

        return;
    },
}