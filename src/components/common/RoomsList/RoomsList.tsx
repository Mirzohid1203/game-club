"use client"


import { useGetRooms } from "@/hooks/useGetRooms";

function RoomsList() {
    const { rooms, loading } = useGetRooms()

    console.log(rooms);

    rooms.length = 0

    if (!rooms.length) {
        return (
            <div className="text-xl font-bold text-gray-500 text-center">Hozircha honalar mavjud emas!</div>
        )
    }
    return (
        <div>RoomsList</div>
    )
}

export default RoomsList