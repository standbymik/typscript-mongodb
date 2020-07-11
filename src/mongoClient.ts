import { MongoClient } from 'mongodb'

// const { url, port, dbname, username, password } = mongodb

export default async function mongoConnection(callback: any, errorCallback?: any) {

    let conn = null
    errorCallback = null

    try {
        conn = await MongoClient.connect(`mongodb://127.0.0.1:27017`, { useNewUrlParser: true })
        console.log('connect')
        return await callback(conn.db('standbymik'))

    } catch (e) {
        // eslint-disable-next-line no-console
        console.log('Database connection error: ', e)
        if (errorCallback !== null) {
            return errorCallback(e)
        }
    } finally {
        if (conn !== null) {
            conn.close()
            //console.log('Database connection closed')
        }
    }

    return null
}
