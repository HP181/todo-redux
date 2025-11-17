import { UserForm } from '../features/user/User';
import { UserList } from '../components/UserList';

export default function Welcome() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-4xl font-bold mb-8 text-blue-500 text-center">
        Welcome to Redux User Management
      </h1>

      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl flex flex-col gap-8">
        <UserForm />
        <hr className="border-gray-300" />
        <UserList />
      </div>
    </div>
  );
}
