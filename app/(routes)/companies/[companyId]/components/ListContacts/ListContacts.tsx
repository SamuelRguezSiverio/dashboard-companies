import { redirect } from 'next/navigation'
import { db } from '@/lib/db'

import { Mail, Phone } from 'lucide-react'

import { Separator } from '@/components/ui/separator'

import { auth } from '@clerk/nextjs'

import { ListContactsProps } from './ListContacts.types'

export async function ListContacts(props: ListContactsProps) {
  const { company } = props
  const { userId } = auth()

  if (!userId) {
    return redirect('/')
  }

  const contacts = await db.contact.findMany({
    where: {
      company: {
        id: company.id,
      },
    },
  })

  if (contacts.length === 0) {
    return <p>Actualmente no dispones de ningún contacto</p>
  }
  return (
    <div>
      <div className="grid items-center justify-between grid-cols-3 p-2 px-4 mt-4 mb-2 rounded-lg gap-x-3 bg-slate-400/20">
        <p>Name</p>
        <p>Role</p>
        <p className="text-right">Contact</p>
      </div>

      {contacts.map((contact) => (
        <div key={contact.id}>
          <div className="grid grid-cols-3 gap-x-3 items-center justify-between px-4">
            <p>{contact.name}</p>
            <p>{contact.role}</p>
            <div className="flex items-center gap-x-6 justify-end">
              <a href={`tel: ${contact.phone}`}>
                <Phone className="w-4 h-4" />
              </a>
              <a href={`mailto: ${contact.email}`} target="_blank">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
          <Separator className="my-3" />
        </div>
      ))}
    </div>
  )
}
