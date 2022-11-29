import { MongoClient } from 'mongodb'

async function getConnection() {
    const myPassword = process.env.MONGODB_PASSWORD
    const connectionString = `mongodb+srv://admin:${myPassword}@cluster0.izl7m77.mongodb.net/?retryWrites=true&w=majority`

    const client = await MongoClient.connect(connectionString)
    const db = await client.db('my_blog')
    const disconnect = () => client.close()
    return {db, disconnect}
}

export { getConnection }