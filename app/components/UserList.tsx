import { useAppSelector, useAppDispatch } from '../hooks';
import { editUser, removeUser } from '../features/user/userSlice';

export function UserList() {
  const users = useAppSelector(state => state.user.users);
  const dispatch = useAppDispatch();

  if (users.length === 0) {
    return <p className="text-gray-500 text-center">No users added</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      {users.map(user => (
        <div
          key={user.id}
          className="flex justify-between items-center bg-gray-100 p-4 rounded shadow"
        >
          <div>
            <p className="font-semibold text-black">{user.name}</p>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{user.phone}</p>
          </div>
          <div className="flex gap-2">
            <button
            onClick={() => dispatch(editUser({ ...user, name: user.name + ' (Edited)' }))}
              className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(removeUser(user.id))}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
