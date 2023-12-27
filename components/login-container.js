export default function LoginContainer() {
  return (
    <div className="flex flex-col bg-white p-10 rounded-lg shadow-2xl">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Sign In</h2>
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-semibold text-gray-500">Email address</label>
            <input type="email" className="border border-gray-200 p-2 rounded-lg focus:outline-none focus:border-blue-400" />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-semibold text-gray-500">Password</label>
            <input type="password" className="border border-gray-200 p-2 rounded-lg focus:outline-none focus:border-blue-400" />
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400" />
            <label className="text-sm font-semibold text-gray-500">Remember me</label>
          </div>
          <button className="block bg-blue-500 hover:bg-blue-600 transition duration-200 ease-in-out text-white font-semibold p-4 rounded-lg shadow-md focus:outline-none">Sign In</button>
        </div>
      </div>
  )
}