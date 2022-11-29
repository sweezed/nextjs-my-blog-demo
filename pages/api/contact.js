import { getConnection } from '../../dataBase'

function isvalidBody ({email, name, message}) {
  return !(!email  || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') 
}

async function handler(req, res) {
  if(req.method === 'POST') {
    const { email, name, message } = req.body;

    if(isvalidBody({email, name, message})) {
      const newMessage = {
        email,
        name,
        message
      }

      let connection
      try {
        connection = await getConnection()
        await connection.db.collection('messages').insertOne(newMessage)
        connection.disconnect()
        return res.status(201).json({ message: 'Successfully added message.', msg: newMessage})
      } catch (error) {
        if (connection?.disconnect) connection.disconnect()
        
        return res.status(500).json({ message: error })
      }
    }
    
    return res.status(422).json({message: 'Invalid input for request.'})
  }
}

export default handler