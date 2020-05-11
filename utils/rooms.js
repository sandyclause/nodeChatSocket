const rooms = [
  {
    roomName: 'general',
    users: []
  },
  {
    roomName: 'general2',
    users: []
  },
  {
    roomName: 'general3',
    users: []
  }
];

const addRoom = (inputRoomName, userId) => {
  console.log('add room fired')

  if (!inputRoomName || !userId) {
    return {
      error: 'need roomName and userId'
    }
  }

  const existingRoom = rooms.find(room => room.roomName === inputRoomName)

  if (existingRoom) {
    const existingRoomUsers = existingRoom.users
    existingRoomUsers.push(userId)
    const index = rooms.findIndex(room => room.roomName === inputRoomName);
    const updatedRoom = {

      roomName: inputRoomName,
      users: existingRoomUsers
    }
    rooms.splice(index, 1, updatedRoom)
  } else {
    rooms.push({
      roomName: inputRoomName,
      users: [userId]
    })
  }


}


module.exports = {
  addRoom
}