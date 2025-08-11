const UserCard = ({ currentUsers }) => {
  return currentUsers.map((user) => (
    <div
      className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
      key={user.id}
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {user.name}
      </h5>
      <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
        {user.email}
      </p>
      <p className="mb-3 font-normal text-gray-200 dark:text-gray-500">
        {user.company?.name}
      </p>
    </div>
  ));
};
export default UserCard;
