export default function UserList({ contacts }) {
  return (
    <div>
      {contacts.map((contact) => (
        <div className="card" key={contact.phoneNumber}>
          <p className="card-name">{contact.name}</p>
          <p>{contact.email}</p>
          <p>{contact.phoneNumber}</p>
        </div>
      ))}
    </div>
  );
}
