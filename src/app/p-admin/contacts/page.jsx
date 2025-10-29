import React from 'react'
import DataTableContacts from '@/components/tamplates/p-admin/DataTableContacts/DataTableContacts.tsx';
import Contact from '@/models/Contact.ts';
 import connectToDB from "@/configs/mongodb";

const page = async () => {

  await connectToDB();

  const contacts= await Contact.find({}).lean();

  return (
    <>
{
  contacts.langth === 0 ? (
    <h1>در حال حاضر مخاطبی وجود ندارد</h1>
  ) : (
    <DataTableContacts contacts={JSON.parse(JSON.stringify(contacts))}/>
  )
}

    </>
  )
}

export default page