"use client"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Spinner } from "@/components/ui/spinner";
import { useGetRooms } from "@/hooks/useGetRooms";
import { Badge } from "@/components/ui/badge";
import { Settings } from "lucide-react";



function RoomsList() {
    const { rooms, loading } = useGetRooms()

    console.log(rooms);

    if (!rooms.length) {
        return (
            <div className="text-xl font-bold text-gray-500 text-center">Hozircha honalar mavjud emas!</div>
        )
    }
    if (loading) {
        return <Spinner />
    }
    return (
        <div>
            <ul>
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="">Nomi</TableHead>
                            <TableHead>Statusi</TableHead>
                            <TableHead >Narxi </TableHead>
                            <TableHead className="text-right">Sozlamalar</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {rooms.map((room) => (
                            <TableRow key={room.name}>
                                <TableCell className="font-medium">{room.name}</TableCell>
                                <TableCell>{room.isBusy ? <Badge variant={"error"}>Band</Badge> : <Badge variant={"succes"}>Bo'sh</Badge>}</TableCell>
                                <TableCell >{room.price} so'm</TableCell>
                                <TableCell className="flex justify-end">
                                    <Settings className="cursor-pointer" />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    {/* <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>Total</TableCell>
                            <TableCell className="text-right">$2,500.00</TableCell>
                        </TableRow>
                    </TableFooter> */}
                </Table>

            </ul>
        </div>
    )

}

export default RoomsList

