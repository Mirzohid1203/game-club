import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogMedia,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useDeleteRoom } from "@/hooks/useDeleteRoom"
import { Trash2Icon } from "lucide-react"
import { Dispatch, SetStateAction } from "react"

type Props = {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
    roomId: string
}

export function DeleteItem({ open, setOpen, roomId }: Props) {
    const { deleteRoom } = useDeleteRoom()
    const handleDelete = () => {
        deleteRoom(roomId)
    }
    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent size="sm">
                <AlertDialogHeader>
                    <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
                        <Trash2Icon />
                    </AlertDialogMedia>
                    <AlertDialogTitle>Rostan ham o'chirmoqchimisiz?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Agar bu honani ochirsangiz qaytib tiklay olmaysiz!
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel variant="outline">ortga</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete} variant="destructive">o'chirish</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
