'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import { ModalAddEventProps } from './ModalAddEvent.types'

export function ModalAddEvent(props: ModalAddEventProps) {
  const { open, setNewEvent, setOnSaveNewEvent, setOpen, companies } = props

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
            <DialogTitle>Add a new event</DialogTitle>
        </DialogHeader>

        
      </DialogContent>
    </Dialog>
  )
}
