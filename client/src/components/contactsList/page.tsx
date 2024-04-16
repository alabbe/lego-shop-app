import ContactModel from "../../model/ContactModel";

const ContactsList = ({ contacts }: { contacts: ContactModel[] }) => {

  let list = contacts.map((contact: ContactModel) => 
    <tr key={contact.id}>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{contact.firstname}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{contact.lastname}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{contact.email}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{contact.birthdate}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{contact.phone}</td>
    </tr>
  );

  return (
    <div className="border rounded-lg shadow overflow-hidden dark:border-neutral-700 dark:shadow-gray-900 overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
      <thead className="bg-gray-50 dark:bg-neutral-700">
        <tr>
          <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400">Prénom</th>
          <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400">Nom</th>
          <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400">Email</th>
          <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400">Date de naissance</th>
          <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400">Téléphone</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
        {list}
      </tbody>
    </table>
    </div>
  );
}

export default ContactsList;