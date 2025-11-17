import { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { add } from './userSlice';
import type { User } from './userSlice';

export function UserForm() {
  const dispatch = useAppDispatch();

  const [user, setUser] = useState<Omit<User, 'id'>>({
    name: '',
    email: '',
    phone: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: name === 'phone' ? Number(value) : value,
    }));
  };

  const handleAddUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(add({ id: crypto.randomUUID(), ...user }));
    setUser({ name: '', email: '', phone: null });
  };

  return (
    <form
      onSubmit={handleAddUser}
      className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto flex flex-col gap-4"
    >
      <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
        Add New User
      </h2>

      <input
        name="name"
        value={user.name}
        placeholder="Name"
        onChange={handleInputChange}
        className="border border-gray-300 text-black rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <input
        name="email"
        value={user.email}
        placeholder="Email"
        type="email"
        onChange={handleInputChange}
        className="border border-gray-300 text-black rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <input
        name="phone"
        value={user.phone ?? ''}
        placeholder="Phone"
        type="number"
        onChange={handleInputChange}
        className="border border-gray-300 text-black rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md px-4 py-2 transition-colors"
      >
        Add User
      </button>
    </form>
  );
}
