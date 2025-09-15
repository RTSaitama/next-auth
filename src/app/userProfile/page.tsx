import Image from 'next/image'
import { User, Mail, Phone, MapPin, Calendar, Edit } from 'lucide-react'

interface UserProfileProps {
  user?: {
    id: number
    firstName: string
    lastName: string
    email: string
    phone?: string
    location?: string
    joinedDate?: string
    avatar?: string
  }
}

const UserProfile = ({ user }: UserProfileProps) => {
  const userData = user || {
    id: 1,
    firstName: 'Олексій',
    lastName: 'Петренко',
    email: 'test@example.com',
    phone: '+380 67 123 45 67',
    location: 'Київ, Україна',
    joinedDate: '2023-01-15',
    avatar: ''
  }

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase()
  }

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-32 sm:h-40"></div>
          
          <div className="relative px-6 pb-6">
            <div className="flex items-end -mt-16 sm:-mt-20 mb-4">
              <div className="relative">
                {userData.avatar ? (
                  <Image
                    src={userData.avatar}
                    alt={`${userData.firstName} ${userData.lastName}`}
                    width={128}
                    height={128}
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-gray-800 bg-gray-700 object-cover"
                  />
                ) : (
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-gray-800 bg-indigo-600 flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl font-bold text-white">
                      {getInitials(userData.firstName, userData.lastName)}
                    </span>
                  </div>
                )}
                <button className="absolute bottom-0 right-0 bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full transition-colors duration-200">
                  <Edit size={16} />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {userData.firstName} {userData.lastName}
                </h1>
                <p className="text-gray-400 flex items-center">
                  <Mail size={16} className="mr-2" />
                  {userData.email}
                </p>
              </div>
              
              <div className="mt-4 sm:mt-0">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                  Редагувати профіль
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-lg shadow-xl p-6">
              <h2 className="text-xl font-bold text-white mb-6">Особиста інформація</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Ім'я
                  </label>
                  <div className="bg-gray-700 rounded-lg p-3 text-white">
                    {userData.firstName}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Прізвище
                  </label>
                  <div className="bg-gray-700 rounded-lg p-3 text-white">
                    {userData.lastName}
                  </div>
                </div>
                
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Email адреса
                  </label>
                  <div className="bg-gray-700 rounded-lg p-3 text-white flex items-center">
                    <Mail size={16} className="mr-3 text-gray-400" />
                    {userData.email}
                  </div>
                </div>
                
                {userData.phone && (
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Телефон
                    </label>
                    <div className="bg-gray-700 rounded-lg p-3 text-white flex items-center">
                      <Phone size={16} className="mr-3 text-gray-400" />
                      {userData.phone}
                    </div>
                  </div>
                )}
                
                {userData.location && (
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Місцезнаходження
                    </label>
                    <div className="bg-gray-700 rounded-lg p-3 text-white flex items-center">
                      <MapPin size={16} className="mr-3 text-gray-400" />
                      {userData.location}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg shadow-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Статистика аккаунту</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">ID користувача</span>
                  <span className="text-white font-medium">#{userData.id}</span>
                </div>
                
                {userData.joinedDate && (
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Дата реєстрації</span>
                    <span className="text-white font-medium">
                      {new Date(userData.joinedDate).toLocaleDateString('uk-UA')}
                    </span>
                  </div>
                )}
                
                <div className="pt-4 border-t border-gray-700">
                  <div className="flex items-center text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    Активний статус
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg shadow-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Швидкі дії</h3>
              
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors duration-200">
                  Змінити пароль
                </button>
                
                <button className="w-full text-left p-3 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors duration-200">
                  Налаштування приватності
                </button>
                
                <button className="w-full text-left p-3 rounded-lg bg-red-600 hover:bg-red-700 text-white transition-colors duration-200">
                  Видалити аккаунт
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile