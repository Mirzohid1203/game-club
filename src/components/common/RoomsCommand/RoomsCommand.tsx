"use client"

import * as React from "react"
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command"
import {

    Edit,

    TimerIcon,
    Trash2,
} from "lucide-react"
import { DeleteItem } from "../DeleteItem/DeleteItem"

type Props = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    roomId: string
}
export function RoomsCommand({ open, setOpen, roomId }: Props) {
    const [showDeleteModal, setShowDeleteMOdal] = React.useState(false)
    const handleClick = () => {
        setOpen(false)
        setShowDeleteMOdal(true)
    }

    return (
        <div className="flex flex-col gap-4">
            <DeleteItem roomId={roomId} open={showDeleteModal} setOpen={setShowDeleteMOdal} />
            <CommandDialog className="w-100" open={open} onOpenChange={setOpen}>
                <Command>
                    <CommandList>
                        <CommandEmpty>Natija topilmadi.</CommandEmpty>
                        <CommandGroup heading="Suggestions">
                            <CommandItem>
                                <TimerIcon />
                                <span>Sessiya Boshlash</span>
                            </CommandItem>
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup heading="Sozlamalar" className="flex flex-col">
                            <CommandItem>
                                <Edit />
                                <span>Tahrirlash</span>
                            </CommandItem>
                            <CommandItem onSelect={handleClick} className="bg-red-300 text-red-700! hover: text-red-700!, hover:bg-red-200! ">
                                <Trash2 className="text-red-700" />
                                <span>O'chirish</span>
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </CommandDialog>
        </div>
    )
}
